import { NextResponse } from "next/server";
import { plans, whatsappLink } from "@/components/site-data";
import { getStripeClient } from "@/lib/dal/stripe";
import { verifyTurnstileToken } from "@/lib/dal/turnstile";
import { checkRateLimit, getClientIp } from "@/lib/security/rate-limit";
import { getOriginConfig } from "@/lib/dal/env";

export const runtime = "nodejs";

function normalizePlanId(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parsePlanPriceToMinorUnits(price) {
  const normalized = Number.parseFloat(String(price).replace(/[^\d.]/g, ""));
  return Math.round(normalized * 100);
}

function isSuspiciousBot(botSignals = {}) {
  return Boolean(botSignals?.webdriver) || Number(botSignals?.suspicionScore ?? 0) >= 2;
}

export async function POST(request) {
  const ip = getClientIp(request);
  const limit = await checkRateLimit({
    bucket: "payment-action",
    id: ip,
    limit: 3,
    windowMs: 60 * 60 * 1000
  });

  if (!limit.success) {
    return NextResponse.json(
      {
        message: "Too many checkout attempts from this IP. Please try again later."
      },
      { status: 429 }
    );
  }

  const payload = await request.json();

  if (payload.honeypot || isSuspiciousBot(payload.botSignals)) {
    return NextResponse.json(
      {
        ok: true,
        shadowBanned: true,
        fallbackUrl: whatsappLink
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

  const stripe = getStripeClient();
  const selectedPlan = plans.find((plan) => normalizePlanId(plan.title) === normalizePlanId(payload.planId)) ?? plans[0];

  if (!stripe) {
    return NextResponse.json({
      ok: true,
      fallbackUrl: whatsappLink,
      message: "Stripe is not configured yet. Falling back to secure support."
    });
  }

  const { siteUrl } = getOriginConfig();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: `${siteUrl}/pricing?checkout=success`,
    cancel_url: `${siteUrl}/pricing?checkout=cancelled`,
    billing_address_collection: "required",
    customer_creation: "always",
    phone_number_collection: {
      enabled: true
    },
    payment_method_collection: "always",
    payment_method_types: ["card"],
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: parsePlanPriceToMinorUnits(selectedPlan.price),
          product_data: {
            name: `${selectedPlan.title} IPTV subscription`,
            description: `${selectedPlan.duration} secure IPTV plan with support and premium streaming access.`
          }
        }
      }
    ],
    metadata: {
      plan: selectedPlan.title,
      fingerprint: payload.fingerprint ?? "unknown",
      avs_required: "true",
      cvv_required: "true"
    },
    payment_intent_data: {
      description: `${selectedPlan.title} WandaStream checkout`,
      metadata: {
        plan: selectedPlan.title,
        fingerprint: payload.fingerprint ?? "unknown"
      },
      payment_method_options: {
        card: {
          request_three_d_secure: "automatic"
        }
      }
    }
  });

  return NextResponse.json({
    ok: true,
    url: session.url
  });
}
