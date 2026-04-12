import "server-only";
import Stripe from "stripe";
import { getStripeConfig } from "@/lib/dal/env";

let stripeClient;

export function getStripeClient() {
  const { secretKey } = getStripeConfig();

  if (!secretKey) {
    return null;
  }

  if (!stripeClient) {
    stripeClient = new Stripe(secretKey);
  }

  return stripeClient;
}
