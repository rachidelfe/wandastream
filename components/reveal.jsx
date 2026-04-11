export function Reveal({ children, className = "", delay = 0 }) {
  return (
    <div className={`reveal is-visible${className ? ` ${className}` : ""}`} style={{ "--delay": `${delay}ms` }}>
      {children}
    </div>
  );
}
