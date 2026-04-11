function IconBase({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export function TvIcon() {
  return (
    <IconBase>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </IconBase>
  );
}

export function PhoneIcon() {
  return (
    <IconBase>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </IconBase>
  );
}

export function LaptopIcon() {
  return (
    <IconBase>
      <rect x="4" y="5" width="16" height="10" rx="2" />
      <path d="M2.5 18.5h19" />
    </IconBase>
  );
}

export function SparkIcon() {
  return (
    <IconBase>
      <path d="m12 2 1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z" />
    </IconBase>
  );
}

export function ShieldIcon() {
  return (
    <IconBase>
      <path d="M12 3 5.5 5.8v5.6c0 4.1 2.5 7.7 6.5 9.6 4-1.9 6.5-5.5 6.5-9.6V5.8L12 3Z" />
      <path d="m9.2 12.2 1.8 1.8 3.8-4.1" />
    </IconBase>
  );
}

export function BoltIcon() {
  return (
    <IconBase>
      <path d="M13 2 6 13h5l-1 9 8-12h-5l1-8Z" />
    </IconBase>
  );
}

export function SupportIcon() {
  return (
    <IconBase>
      <path d="M4 13a8 8 0 1 1 16 0" />
      <path d="M5 14v3a2 2 0 0 0 2 2h1v-6H7a2 2 0 0 0-2 2Z" />
      <path d="M19 14v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
      <path d="M12 19v1.5" />
    </IconBase>
  );
}

export function CheckIcon() {
  return (
    <IconBase>
      <path d="m5 12 4 4L19 6" />
    </IconBase>
  );
}

export function CardIcon() {
  return (
    <IconBase>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h3" />
    </IconBase>
  );
}

export function GlobeIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14.2 14.2 0 0 1 0 18" />
      <path d="M12 3a14.2 14.2 0 0 0 0 18" />
    </IconBase>
  );
}

export function PlayIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4V8Z" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function WhatsAppIcon() {
  return (
    <IconBase>
      <path d="M12.1 3.3A8.7 8.7 0 0 0 4.6 16.4L3 21l4.7-1.5a8.7 8.7 0 1 0 4.4-16.2Z" />
      <path d="M9.1 8.4c.2-.5.5-.5.8-.5h.7c.2 0 .5.1.6.4l.9 2.1c.1.2 0 .5-.2.7l-.6.8c-.1.2-.2.4 0 .6.4.7 1.1 1.5 2 2 .2.1.4.1.6-.1l.9-.8c.2-.1.5-.2.8-.1l2 .9c.3.1.5.4.4.7l-.1.7c0 .3 0 .6-.5.8-.6.2-1.3.3-2 .2-1.1-.2-2.5-.8-4-2.3-1.7-1.6-2.3-3.1-2.5-4.2-.1-.6 0-1.3.2-1.9Z" />
    </IconBase>
  );
}
