import { NextResponse } from "next/server";
import { verifyTurnstileToken } from "@/lib/dal/turnstile";
import { checkRateLimit, getClientIp } from "@/lib/security/rate-limit";
import { getOriginConfig } from "@/lib/dal/env";

export const runtime = "nodejs";

function isSuspiciousBot(botSignals = {}) {
  return Boolean(botSignals?.webdriver) || Number(botSignals?.suspicionScore ?? 0) >= 2;
}

function buildWhatsAppUrl(payload = {}) {
  const supportPhone = getOriginConfig().supportPhone.replace(/\D/g, "");
  const lines = [
    "Bonjour, je souhaite un abonnement IPTV France.",
    `Site web: ${getOriginConfig().siteUrl}`,
    `Nom: ${payload.name || "Non renseigné"}`,
    `E-mail: ${payload.email || "Non renseigné"}`,
    `Appareil: ${payload.device || "Non renseigné"}`,
    `Message: ${payload.message || "Non renseigné"}`
  ];

  return `https://wa.me/${supportPhone}?text=${encodeURIComponent(lines.join("\n"))}`;
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
        message: "Vous avez envoyé plusieurs demandes. Réessayez un peu plus tard."
      },
      { status: 429 }
    );
  }

  const payload = await request.json();
  const nextActionUrl = buildWhatsAppUrl(payload);

  if (payload.honeypot || isSuspiciousBot(payload.botSignals)) {
    return NextResponse.json(
      {
        ok: true,
        shadowBanned: true,
        message: "Demande reçue.",
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
        message: "Votre demande n'a pas pu être vérifiée. Rechargez la page puis réessayez."
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Message envoyé. Ouvrez WhatsApp pour continuer rapidement.",
    nextActionUrl
  });
}
