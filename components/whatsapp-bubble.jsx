"use client";

import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppBubble({ href, label }) {
  return (
    <a className="whatsapp-float" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      <WhatsAppIcon />
    </a>
  );
}
