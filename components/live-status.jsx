function formatStatusDate(date) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long"
  }).format(date);
}

export function LiveStatus() {
  const now = new Date();
  const timestamp = formatStatusDate(now);

  return (
    <div className="system-status">
      <span className="status-dot" />
      <span>Tous les systemes operationnels</span>
      <time dateTime={now.toISOString()}>Actif aujourd&apos;hui · {timestamp}</time>
    </div>
  );
}
