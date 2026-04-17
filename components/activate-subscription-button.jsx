"use client";

export function ActivateSubscriptionButton({ className, href = "#pricing", label = "Voir les offres" }) {
  return (
    <a className={className} href={href}>
      {label}
    </a>
  );
}
