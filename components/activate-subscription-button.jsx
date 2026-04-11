"use client";

export function ActivateSubscriptionButton({ className, href = "#pricing", label = "Activate Subscription" }) {
  return (
    <a className={className} href={href}>
      {label}
    </a>
  );
}
