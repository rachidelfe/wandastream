import Link from "next/link";
import Image from "next/image";
import { Counter } from "@/components/counter";
import { FullPricing } from "@/components/full-pricing";
import { ActivateSubscriptionButton } from "@/components/activate-subscription-button";
import { LiveStatus } from "@/components/live-status";
import { Reveal } from "@/components/reveal";
import { WhatsAppBubble } from "@/components/whatsapp-bubble";
import {
  GlobeIcon,
  ShieldIcon,
  SupportIcon
} from "@/components/icons";
import { logoItems, posters } from "@/components/site-data";

function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`section-heading${align === "center" ? " is-centered" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function LogoStripRow({ reverse = false }) {
  const source = reverse ? [...logoItems].reverse() : logoItems;
  const items = [...source, ...source];

  return (
    <div className="logo-marquee">
      <div className={`logo-track with-pause${reverse ? " is-reverse" : ""}`}>
        {items.map((item, index) => (
          <div className="logo-pill" key={`${item.name}-${index}`}>
            <span className="logo-glow" />
            <Image
              className="logo-pill-image"
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              loading="lazy"
              sizes={`${item.width}px`}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroShowcase() {
  return (
    <div className="hero-media-card">
      <div className="hero-media-topbar">
        <span className="console-dot" />
        <span className="console-dot" />
        <span className="console-dot" />
        <div className="hero-media-label">Live sports • Movies • Kids • Premium</div>
      </div>

      <div className="hero-media-frame">
        <Image
          src="/hero.webp"
          alt="Interface VantaStream montrant une experience IPTV premium avec cinema, sport et streaming 4K"
          width={1440}
          height={820}
          priority
          sizes="(max-width: 780px) 92vw, (max-width: 1180px) 50vw, 720px"
        />
      </div>
    </div>
  );
}

function LibraryRail() {
  const items = [...posters, ...posters];

  return (
    <div className="poster-marquee">
      <div className="poster-rail">
        <div className="poster-track">
          {items.map((poster, index) => (
            <div className="poster-card-wrap" key={`${poster.title}-${index}`} aria-hidden={index >= posters.length}>
              <article className="poster-card">
                <div className="poster-image">
                  <Image
                    src={poster.image}
                    alt={poster.title}
                    fill
                    sizes="(max-width: 768px) 74vw, 300px"
                    loading="lazy"
                  />
                </div>
                <div className="poster-copy">
                  <span>{poster.meta}</span>
                  <h3>{poster.title}</h3>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComparisonTable({ section }) {
  return (
    <div className="comparison-table-wrap">
      <table className="comparison-table">
        <thead>
          <tr>
            {section.columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {section.rows.map((row) => (
            <tr key={row.id ?? row.device}>
              {section.columns.map((column) => (
                <td key={column.key}>
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CoverageGrid({ regions }) {
  return (
    <div className="coverage-grid">
      {regions.map((region, index) => (
        <Reveal delay={index * 70} key={region.slug}>
          <Link className="guide-card coverage-card" href={`/${region.slug}`}>
            <span className="eyebrow">/{region.slug}</span>
            <h3>{region.shortName}</h3>
            <p>{region.coverageSummary}</p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

function FaqPanel({ items }) {
  return (
    <div className="faq-panel seo-faq-panel">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

function navItems({ insideRegion, basePath }) {
  if (insideRegion) {
    return [
      { label: "Home", href: basePath },
      { label: "Pricing", href: `${basePath}#pricing` },
      { label: "Library", href: `${basePath}#library` },
      { label: "Guides", href: `${basePath}/blog` },
      { label: "Contact", href: `${basePath}#contact` },
      { label: "Global Hub", href: "/" }
    ];
  }

  return [
    { label: "Home", href: "#hero" },
    { label: "Benefits", href: "#benefits" },
    { label: "Library", href: "#library" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" }
  ];
}

function Header({ insideRegion, basePath, pricingHref, contactHref }) {
  const links = navItems({ insideRegion, basePath });

  return (
    <header className="site-header is-scrolled">
      <div className="status-strip">
        <div className="container status-strip-inner">
          <LiveStatus />
          <div className="status-copy">Activation instantanee, paiement securise et surveillance active aujourd&apos;hui.</div>
        </div>
      </div>

      <div className="container header-inner">
        <Link className="brand" href={insideRegion ? basePath : "#hero"}>
          <span className="brand-mark" />
          <span>VantaStream</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <ActivateSubscriptionButton className="button button-primary header-cta" href={pricingHref} label="Start now" />
      </div>

      <details className="mobile-nav-shell">
        <summary className="mobile-menu-toggle" aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </summary>
        <div className="mobile-nav-wrap">
          <div className="container">
            <nav className="mobile-nav" aria-label="Mobile">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <ActivateSubscriptionButton className="button button-primary mobile-nav-cta" href={pricingHref} label="Start now" />
              <a className="button button-secondary mobile-nav-cta" href={contactHref} target="_blank" rel="noreferrer">
                Contact support
              </a>
            </nav>
          </div>
        </div>
      </details>
    </header>
  );
}

function Footer({ text, showRegionLinks, regions, contactHref }) {
  return (
    <footer className="site-footer">
      <div className="container footer-stack">
        <div className="footer-inner">
          <p>{text}</p>
          <a href={contactHref} target="_blank" rel="noreferrer">
            <SupportIcon />
            <span>24/7 support</span>
          </a>
        </div>

        {showRegionLinks ? (
          <div className="footer-link-row" aria-label="Regional links">
            {regions.map((region) => (
              <Link className="footer-chip" href={`/${region.slug}`} key={region.slug}>
                {region.shortName}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}

export function LandingTemplate({ content, insideRegion = false, basePath = "/", contactHref, regions = [] }) {
  const pricingHref = insideRegion ? `${basePath}#pricing` : "#pricing";

  return (
    <>
      <Header insideRegion={insideRegion} basePath={basePath} pricingHref={pricingHref} contactHref={contactHref} />

      <main>
        <section className="hero section hero-section" id="hero">
          <div className="hero-grid">
            <Reveal className="hero-copy">
              <div className="hero-badge">
                <ShieldIcon />
                <span>{content.hero.badge}</span>
              </div>

              <h1>
                <span className="hero-brand-line">VantaStream</span>
                <span>{content.hero.title}</span>
              </h1>
              <p>{content.hero.intro}</p>

              <div className="hero-actions">
                <Link className="button button-primary" href={pricingHref}>
                  Start now
                </Link>
                <a className="button button-secondary" href={contactHref} target="_blank" rel="noreferrer">
                  Contact support
                </a>
              </div>

              <div className="device-row" aria-label="Supported hero devices">
                {content.hero.devices.map(({ icon: Icon, label }) => (
                  <div className="device-chip" key={label}>
                    <Icon />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <div className="signal-row">
                {content.hero.signals.map(({ icon: Icon, label }, index) => (
                  <div className="signal-pill" key={label} style={{ "--delay": `${index * 120}ms` }}>
                    <Icon />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="hero-visual-wrap" delay={140}>
              <div className="hero-visual">
                <div className="visual-orb orb-orange" />
                <div className="visual-orb orb-green" />
                <HeroShowcase />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section deferred-section benefits-section" id="benefits">
          <div className="container">
            <Reveal>
              <SectionHeading {...content.benefits} />
            </Reveal>

            <div className="bento-grid">
              {content.benefits.cards.map(({ className, icon: Icon, text, title }, index) => (
                <Reveal delay={index * 80} key={title}>
                  <article className={`bento-card ${className}`}>
                    <span className="feature-icon">
                      <Icon />
                    </span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section deferred-section top-logo-section" id="platforms">
          <div className="container">
            <Reveal>
              <SectionHeading {...content.platforms} align="center" />
            </Reveal>
            <Reveal delay={120}>
              <div className="dual-logo-strip">
                <LogoStripRow />
                <LogoStripRow reverse />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section deferred-section trust-section">
          <div className="container">
            <Reveal>
              <div className="trust-grid">
                {content.trust.items.map((item, index) => (
                  <div className="trust-card" key={item.label} style={{ transitionDelay: `${index * 70}ms` }}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {content.trust.extra ? <div className="guide-grid two-column-grid market-testimonial-grid">{content.trust.extra}</div> : null}
          </div>
        </section>

        {content.authority ? (
          <section className="section deferred-section" id="authority">
            <div className="container">
              <Reveal>
                <SectionHeading {...content.authority.header} />
              </Reveal>

              <div className="authority-grid">
                {content.authority.cards.map((card, index) => (
                  <Reveal delay={index * 80} key={card.title}>
                    <article className="guide-card authority-card">
                      <h3>{card.title}</h3>
                      <p>{card.body}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section deferred-section library-section" id="library">
          <div className="container">
            <Reveal>
              <SectionHeading {...content.library} />
            </Reveal>

            <LibraryRail />
          </div>
        </section>

        {content.comparison ? (
          <section className="section deferred-section" id="device-comparison">
            <div className="container">
              <Reveal>
                <SectionHeading {...content.comparison.header} />
              </Reveal>
              <ComparisonTable section={content.comparison} />
            </div>
          </section>
        ) : null}

        {content.coverage ? (
          <section className="section deferred-section" id="coverage">
            <div className="container">
              <Reveal>
                <SectionHeading {...content.coverage.header} />
              </Reveal>

              <CoverageGrid regions={content.coverage.regions} />
            </div>
          </section>
        ) : null}

        {content.stats ? (
          <section className="section deferred-section" id="stats">
            <div className="container">
              <Reveal>
                <SectionHeading {...content.stats.header} align="center" />
              </Reveal>

              <div className="stats-grid">
                {content.stats.items.map((item, index) => (
                  <Reveal delay={index * 80} key={item.label}>
                    <div className="stat-card">
                      <strong>{typeof item.value === "number" ? <Counter value={item.value} /> : item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section deferred-section" id="use-cases">
          <div className="container">
            <Reveal>
              <SectionHeading {...content.useCases.header} />
            </Reveal>

            <div className="feature-grid">
              {content.useCases.items.map((card, index) => (
                <Reveal delay={index * 80} key={card.title}>
                  <article className="feature-card">
                    <span className="feature-icon">
                      <SupportIcon />
                    </span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section deferred-section pricing-section" id="pricing">
          <div className="container">
            <FullPricing titleAs="h2" />
          </div>
        </section>

        <section className="section deferred-section" id="technology">
          <div className="container">
            <Reveal>
              <SectionHeading {...content.reliability.header} />
            </Reveal>

            <div className="feature-grid">
              {content.reliability.cards.map(({ icon: Icon, title, text }, index) => (
                <Reveal delay={index * 70} key={title}>
                  <article className="feature-card">
                    <span className="feature-icon">
                      <Icon />
                    </span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section deferred-section" id="devices">
          <div className="container">
            <Reveal>
              <SectionHeading {...content.devices.header} align="center" />
            </Reveal>

            <div className="device-badge-grid">
              {content.devices.badges.map((device, index) => (
                <Reveal delay={index * 50} key={device}>
                  <div className="supported-device">
                    <GlobeIcon />
                    <span>{device}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section deferred-section" id="faq">
          <div className="container">
            <Reveal>
              <SectionHeading {...content.faq.header} />
            </Reveal>

            <FaqPanel items={content.faq.items} />
          </div>
        </section>

        <section className="section deferred-section" id="contact">
          <div className="container">
            <Reveal>
              <div className="final-cta">
                <div className="cta-glow" />
                <span className="eyebrow">{content.contact.eyebrow}</span>
                <h2>{content.contact.title}</h2>
                <p>{content.contact.text}</p>
                <div className="hero-actions">
                  <a className="button button-primary" href={contactHref} target="_blank" rel="noreferrer">
                    Contact support
                  </a>
                  <Link className="button button-secondary" href={pricingHref}>
                    View plans
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer text={content.footer.text} showRegionLinks={content.footer.showRegionLinks} regions={regions} contactHref={contactHref} />

      <WhatsAppBubble href={contactHref} label="Contact support" />
    </>
  );
}
