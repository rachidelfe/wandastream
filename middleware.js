import { NextResponse } from "next/server";
import { checkEdgeRateLimit, getEdgeClientIp } from "@/lib/security/edge-rate-limit";

function buildCsp(nonce) {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://challenges.cloudflare.com https://js.stripe.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "connect-src 'self' https://challenges.cloudflare.com https://api.stripe.com https://*.upstash.io",
    "frame-src 'self' https://challenges.cloudflare.com https://js.stripe.com https://hooks.stripe.com",
    "worker-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://checkout.stripe.com https://*.stripe.com https://wa.me https://api.whatsapp.com",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join("; ");
}

function applySecurityHeaders(response, nonce) {
  response.headers.set("x-nonce", nonce);
  response.headers.set("Content-Security-Policy", buildCsp(nonce));
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  return response;
}

function shouldPublicRateLimit(request) {
  if (!["GET", "HEAD"].includes(request.method)) {
    return false;
  }

  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.includes(".")
  ) {
    return false;
  }

  return true;
}

export async function middleware(request) {
  const nonce = crypto.randomUUID().replace(/-/g, "");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  if (shouldPublicRateLimit(request)) {
    const ip = getEdgeClientIp(request);
    const limit = await checkEdgeRateLimit({
      bucket: "public-pages",
      id: ip,
      limit: 60,
      windowMs: 60_000
    });

    if (!limit.success) {
      const blocked = new NextResponse("Too many requests", { status: 429 });
      blocked.headers.set("Retry-After", "60");
      return applySecurityHeaders(blocked, nonce);
    }
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });

  return applySecurityHeaders(response, nonce);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"]
};
