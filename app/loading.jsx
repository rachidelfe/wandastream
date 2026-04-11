export default function Loading() {
  return (
    <main className="skeleton-page">
      <section className="section">
        <div className="container skeleton-hero">
          <div className="skeleton-copy">
            <div className="skeleton shimmer skeleton-pill" />
            <div className="skeleton shimmer skeleton-title" />
            <div className="skeleton shimmer skeleton-title short" />
            <div className="skeleton shimmer skeleton-line" />
            <div className="skeleton shimmer skeleton-line short" />
            <div className="skeleton-actions">
              <div className="skeleton shimmer skeleton-button" />
              <div className="skeleton shimmer skeleton-button ghost" />
            </div>
          </div>
          <div className="skeleton shimmer skeleton-panel" />
        </div>
      </section>
    </main>
  );
}
