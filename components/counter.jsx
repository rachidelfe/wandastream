function formatValue(value) {
  if (value >= 10000) {
    return `${Math.round(value / 1000)}K`;
  }

  if (value >= 1000 && value % 1000 !== 0) {
    return `${(value / 1000).toFixed(1)}K`;
  }

  if (value >= 1000) {
    return `${Math.round(value / 1000)}K`;
  }

  return new Intl.NumberFormat("fr-FR").format(Math.round(value));
}

export function Counter({ value, prefix = "+", suffix = "" }) {
  return (
    <span>
      {prefix}
      {formatValue(value)}
      {suffix}
    </span>
  );
}
