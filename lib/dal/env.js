import "server-only";

const DISALLOWED_PUBLIC_KEYS = [
  /^NEXT_PUBLIC_.*SECRET/i,
  /^NEXT_PUBLIC_.*WEBHOOK/i,
  /^NEXT_PUBLIC_.*DATABASE/i,
  /^NEXT_PUBLIC_.*DB_/i,
  /^NEXT_PUBLIC_.*BACKEND/i,
  /^NEXT_PUBLIC_.*PRIVATE/i,
  /^NEXT_PUBLIC_.*UPSTASH/i
];

let validated = false;

export function assertZeroLeakEnvironment() {
  if (validated) {
    return;
  }

  const offenders = Object.keys(process.env).filter((key) => DISALLOWED_PUBLIC_KEYS.some((pattern) => pattern.test(key)));

  if (offenders.length > 0) {
    throw new Error(`Sensitive environment variables must not use NEXT_PUBLIC_: ${offenders.join(", ")}`);
  }

  validated = true;
}

export function getOptionalServerEnv(name, fallback = "") {
  assertZeroLeakEnvironment();
  return process.env[name] ?? fallback;
}

export function getRequiredServerEnv(name) {
  assertZeroLeakEnvironment();

  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required server environment variable: ${name}`);
  }

  return value;
}

export function getOriginConfig() {
  assertZeroLeakEnvironment();

  return {
    siteUrl: getOptionalServerEnv("NEXT_PUBLIC_SITE_URL", "https://www.wandastream.com"),
    supportPhone: getOptionalServerEnv("SUPPORT_PHONE", "212600000000")
  };
}

export function getTurnstileConfig() {
  assertZeroLeakEnvironment();

  return {
    siteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
    secretKey: getOptionalServerEnv("TURNSTILE_SECRET_KEY")
  };
}

export function getStripeConfig() {
  assertZeroLeakEnvironment();

  return {
    secretKey: getOptionalServerEnv("STRIPE_SECRET_KEY"),
    webhookSecret: getOptionalServerEnv("STRIPE_WEBHOOK_SECRET")
  };
}
