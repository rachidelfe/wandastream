import { NextResponse } from "next/server";
import { getRegionBySlug, getRegionContactHref } from "@/lib/market-data";
import { verifyTurnstileToken } from "@/lib/dal/turnstile";
import { checkRateLimit, getClientIp } from "@/lib/security/rate-limit";
import { whatsappLink } from "@/components/site-data";

export const runtime = "nodejs";

function isSuspiciousBot(botSignals = {}) {
  return Boolean(botSignals?.webdriver) || Number(botSignals?.suspicionScore ?? 0) >= 2;
}

export async function POST(request) {
  const ip = getClientIp(request);
  const limit = await checkRateLimit({
    bucket: "contact-action",
    id: ip,
    limit: 3,
    windowMs: 60 * 60 * 1000
  });

  if (!limit.success) {
    return NextResponse.json(
      {
        message: "Too many secure requests from this IP. Please try again later."
      },
      { status: 429 }
    );
  }

  const payload = await request.json();
  const region = getRegionBySlug(payload.regionSlug);
  const nextActionUrl = region ? getRegionContactHref(region) : whatsappLink;

  if (payload.honeypot || isSuspiciousBot(payload.botSignals)) {
    return NextResponse.json(
      {
        ok: true,
        shadowBanned: true,
        message: "Request received.",
        nextActionUrl
      },
      { status: 200 }
    );
  }

  const verification = await verifyTurnstileToken({
    token: payload.turnstileToken,
    ip
  });

  if (!verification.success) {
    return NextResponse.json(
      {
        message: "Security verification failed. Please refresh and try again."
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Verification complete. Continue to secure support for pricing and activation.",
    nextActionUrl
  });
}
