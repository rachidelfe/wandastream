import Script from "next/script";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function GuidePage({ guide, slug }) {
  return (
    <>
      <header className="site-header is-scrolled guide-header">
        <div className="container header-inner">
          <Link className="brand" href="/">
            <span className="brand-mark" />
            <span>WandaStream</span>
          </Link>
          <nav className="desktop-nav" aria-label="Guide navigation">
            <Link href="/">Home</Link>
            <Link href="/#benefits">Benefits</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <Link className="button button-primary header-cta" href="/#pricing">
            Activate Subscription
          </Link>
        </div>
      </header>

      <main className="guide-page">
      <section className="section guide-hero">
        <div className="container guide-shell">
          <span className="eyebrow">{guide.eyebrow}</span>
          <h1>{guide.title}</h1>
          <p>{guide.intro}</p>

          <div className="guide-highlight-list">
            {guide.bullets.map((item) => (
              <div className="guide-highlight" key={item}>
                <span className="guide-bullet-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <Link className="button button-primary" href="/#pricing">
              View Pricing
            </Link>
            <Link className="button button-secondary" href="/#contact">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <section className="section deferred-section">
        <div className="container guide-grid">
          {guide.sections.map((section) => (
            <article className="guide-card" key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              <ul>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section deferred-section">
        <div className="container">
          <div className="final-cta guide-cta">
            <div className="cta-glow" />
            <span className="eyebrow">Next Step</span>
            <h2>Apply the guide, then choose the right plan for your setup.</h2>
            <p>
              Each guide is built to reduce setup friction, improve playback, and move visitors back toward a cleaner subscription decision.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/#pricing">
                Activate Subscription
              </Link>
              <Link className="button button-secondary" href="/#benefits">
                Explore Benefits
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Script
        id={`guide-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: guide.title,
            description: guide.description,
            author: {
              "@type": "Organization",
              name: siteConfig.name
            },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name
            },
            mainEntityOfPage: `${siteConfig.siteUrl}/${slug}`
          })
        }}
      />
      </main>
    </>
  );
}
