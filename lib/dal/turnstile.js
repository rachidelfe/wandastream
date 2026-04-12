import "server-only";
import { getTurnstileConfig } from "@/lib/dal/env";

export async function verifyTurnstileToken({ token, ip }) {
  const { secretKey } = getTurnstileConfig();

  if (!secretKey) {
    return {
      success: true,
      skipped: true
    };
  }

  if (!token) {
    return {
      success: false,
      skipped: false,
      errors: ["missing-token"]
    };
  }

  const formData = new FormData();
  formData.set("secret", secretKey);
  formData.set("response", token);

  if (ip) {
    formData.set("remoteip", ip);
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData,
    cache: "no-store"
  });

  if (!response.ok) {
    return {
      success: false,
      skipped: false,
      errors: ["verification-request-failed"]
    };
  }

  const payload = await response.json();

  return {
    success: Boolean(payload.success),
    skipped: false,
    errors: payload["error-codes"] ?? []
  };
}
