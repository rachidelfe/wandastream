import Link from "next/link";
import Image from "next/image";
import { Brand, FooterBrand } from "@/components/brand";
import { FullPricing } from "@/components/full-pricing";
import { ActivateSubscriptionButton } from "@/components/activate-subscription-button";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { Reveal } from "@/components/reveal";
import { WhatsAppBubble } from "@/components/whatsapp-bubble";
import {
  BoltIcon,
  SupportIcon,
  TvIcon
} from "@/components/icons";
import { logoItems, posters } from "@/components/site-data";

function SectionHeading({ eyebrow, title, text, align = "left", size = "default" }) {
  if (!eyebrow && !title && !text) {
    return null;
  }

  return (
    <div className={`section-heading${align === "center" ? " is-centered" : ""}${size === "compact" ? " is-compact" : ""}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      {title ? <h2>{title}</h2> : null}
      {text ? <p>{text}</p> : null}
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
        <div className="hero-media-label">Chaînes • Sport • Films • Séries</div>
      </div>

      <div className="hero-media-frame">
        <Image
          src="/iptv-france-hero.webp"
          alt="WandaStream IPTV France sur Smart TV avec sport, films et séries"
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
                <td key={column.key}>{column.render ? column.render(row) : row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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

const navigationLinks = [
  { label: "Accueil", href: "/" },
  { label: "Avantages", href: "/#benefits" },
  { label: "Tarifs", href: "/#pricing" },
  { label: "Films & séries", href: "/#library" },
  { label: "Guides", href: "/guides" },
  { label: "Appareils", href: "/devices" },
  { label: "Contact", href: "/#contact" }
];

function Header({ pricingHref, contactHref }) {
  return (
    <header className="site-header is-scrolled">
      <div className="container header-inner">
        <Brand href="/" priority />

        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <ActivateSubscriptionButton className="button button-primary header-cta" href={pricingHref} label="Voir les offres" />

        <details className="mobile-nav-shell">
          <summary className="mobile-menu-toggle" aria-label="Ouvrir la navigation">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-nav-wrap">
            <nav className="mobile-nav" aria-label="Navigation mobile">
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <ActivateSubscriptionButton className="button button-primary mobile-nav-cta" href={pricingHref} label="Voir les offres" />
              <a className="button button-secondary mobile-nav-cta" href={contactHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

function Footer({ text, contactHref, note }) {
  return (
    <footer className="site-footer">
      <div className="container footer-stack">
        <div className="footer-inner">
          <div className="footer-brand-block">
            <FooterBrand />
            <p>{text}</p>
          </div>
          <a href={contactHref} target="_blank" rel="noreferrer">
            <SupportIcon />
            <span>Support disponible</span>
          </a>
        </div>

        <span className="update-badge">Mise à jour : Avril 2026</span>

        {note ? <p className="footer-note">{note}</p> : null}

        <div className="footer-link-row" aria-label="Liens rapides">
          <Link className="footer-chip" href="/guides">
            Guides
          </Link>
          <Link className="footer-chip" href="/devices">
            Appareils
          </Link>
          <Link className="footer-chip" href="/#pricing">
            Tarifs
          </Link>
          <Link className="footer-chip" href="/#contact">
            Contact
          </Link>
        </div>

        <div className="footer-link-row" aria-label="Liens légaux">
          <Link className="footer-chip" href="/terms">
            Conditions
          </Link>
          <Link className="footer-chip" href="/terms#confidentialite">
            Confidentialité
          </Link>
        </div>

        <div className="regional-footer-inline">
          <span className="regional-service-pill">
            <TvIcon />
            <span>Compatible tous appareils</span>
          </span>
          <span className="regional-service-pill">
            <BoltIcon />
            <span>Installation simple</span>
          </span>
          <span className="regional-service-pill">
            <SupportIcon />
            <span>Support disponible</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function LandingTemplate({ content, contactHref }) {
  const pricingHref = "/#pricing";

  return (
    <>
      <Header pricingHref={pricingHref} contactHref={contactHref} />

      <main>
        <section className="section hero" id="hero">
          <div className="container hero-grid">
            <div className="hero-copy reveal is-visible">
              <span className="eyebrow hero-kicker">WandaStream</span>
              <h1 className="hero-title">{content.hero.title}</h1>
              <p className="hero-subtitle">{content.hero.intro}</p>

              <div className="hero-actions">
                <ActivateSubscriptionButton className="button button-primary" href={pricingHref} label="Voir les offres" />
                <a className="button button-secondary" href={contactHref} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>

              <div className="device-row device-icons-container">
                {content.hero.devices.map(({ icon: Icon, label }) => (
                  <span className="device-icon-wrapper" key={label}>
                    <Icon />
                    <span className="device-icon-label">{label}</span>
                  </span>
                ))}
              </div>

              <div className="signal-row">
                {content.hero.signals.map(({ icon: Icon, label }) => (
                  <span className="signal-pill" key={label}>
                    <Icon />
                    <span>{label}</span>
                  </span>
                ))}
              </div>
            </div>

            <Reveal delay={120}>
              <HeroShowcase />
            </Reveal>
          </div>
        </section>

        <section className="section deferred-section" id="benefits">
          <div className="container">
            <SectionHeading {...content.benefits} />
            <div className="bento-grid">
              {content.benefits.cards.map(({ className, icon: Icon, text, title }) => (
                <Reveal delay={60} key={title}>
                  <article className={`bento-card ${className ?? ""}`}>
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

        <section className="section deferred-section">
          <div className="container">
            <SectionHeading {...content.platforms} align="center" />
            <LogoStripRow />
            <LogoStripRow reverse />
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container stats-grid trust-stats-grid">
            {content.trust.items.map((item) => (
              <article className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        {content.authority ? (
          <section className="section deferred-section">
            <div className="container">
              <SectionHeading {...content.authority.header} />
              <div className="authority-grid">
                {content.authority.cards.map((card) => (
                  <article className="guide-card" key={card.title}>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {content.comparison ? (
          <section className="section deferred-section">
            <div className="container">
              <SectionHeading {...content.comparison.header} />
              <ComparisonTable section={content.comparison} />
            </div>
          </section>
        ) : null}

        {content.stats ? (
          <section className="section deferred-section compact-stats-section">
            <div className="container">
              <div className="stats-grid stats-grid-compact">
                {content.stats.items.map((item) => (
                  <article className="stat-card compact-stat-card" key={item.label}>
                    <strong>{item.value.toLocaleString("fr-FR")}</strong>
                    <p>{item.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section deferred-section usage-section">
          <div className="container">
            <SectionHeading {...content.useCases.header} />
            <div className="feature-grid is-compact">
              {content.useCases.items.map((item) => (
                <article className="feature-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container">
            <SectionHeading {...content.reliability.header} />
            <div className="feature-grid">
              {content.reliability.cards.map(({ icon: Icon, text, title }) => (
                <article className="feature-card" key={title}>
                  <span className="feature-icon">
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {content.devices ? (
          <section className="section deferred-section">
            <div className="container">
              <SectionHeading {...content.devices.header} />
              <div className="footer-link-row">
                {content.devices.badges.map((badge) => (
                  <Link className="footer-chip" href="/devices" key={badge}>
                    {badge}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section deferred-section" id="pricing">
          <div className="container">
            <FullPricing />
          </div>
        </section>

        <section className="section deferred-section" id="library">
          <div className="container">
            <SectionHeading {...content.library} />
            <LibraryRail />
          </div>
        </section>

        <section className="section deferred-section" id="faq">
          <div className="container">
            <SectionHeading {...content.faq.header} />
            {content.faq.updateBadge ? <span className="update-badge">{content.faq.updateBadge}</span> : null}
            <FaqPanel items={content.faq.items} />
          </div>
        </section>

        {content.explorer ? (
          <section className="homepage-links" aria-label="Liens rapides WandaStream">
            <div className="container">
              <h2 className="section-title">{content.explorer.title}</h2>
              <div className="links-grid">
                {content.explorer.links.map((link) => (
                  <Link href={link.href} className="quick-link" key={link.href}>
                    <h3>{link.title}</h3>
                    <p>{link.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section deferred-section" id="contact">
          <div className="container final-cta">
            <div className="cta-glow" />
            <SectionHeading eyebrow={content.contact.eyebrow} title={content.contact.title} text={content.contact.text} align="center" />
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <ActivateSubscriptionButton className="button button-primary" href={pricingHref} label="Voir les offres" />
              <a className="button button-secondary" href={contactHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
            <LeadCaptureForm fallbackUrl={contactHref} regionSlug="france" />
          </div>
        </section>
      </main>

      <Footer text={content.footer.text} note={content.footer.note} contactHref={contactHref} />
      <WhatsAppBubble href={contactHref} label="Ouvrir WhatsApp" />
    </>
  );
}
