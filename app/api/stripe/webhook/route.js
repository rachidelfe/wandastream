import { NextResponse } from "next/server";
import { getStripeClient } from "@/lib/dal/stripe";
import { getStripeConfig } from "@/lib/dal/env";

export const runtime = "nodejs";

export async function POST(request) {
  const stripe = getStripeClient();
  const { webhookSecret } = getStripeConfig();

  if (!stripe || !webhookSecret) {
    return NextResponse.json({ message: "Stripe webhook is not configured." }, { status: 503 });
  }

  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ message: "Missing Stripe signature." }, { status: 400 });
  }

  const payload = await request.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
    case "payment_intent.succeeded":
      break;
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
