import { siteConfig } from "@/lib/site";

function normalizePhone(phone = "") {
  return String(phone).replace(/\D/g, "");
}

export function createWhatsAppLink({
  intro = "Bonjour, je souhaite un abonnement IPTV France.",
  siteUrl = siteConfig.siteUrl,
  supportPhone = siteConfig.supportPhone
} = {}) {
  const lines = [intro];

  if (siteUrl) {
    lines.push(`Site web: ${siteUrl}`);
  }

  return `https://wa.me/${normalizePhone(supportPhone)}?text=${encodeURIComponent(lines.join("\n"))}`;
}
