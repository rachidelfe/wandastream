import Link from "next/link";
import { Brand, FooterBrand } from "@/components/brand";
import { GlobeIcon, PlayIcon, ShieldIcon, SupportIcon } from "@/components/icons";
import { LiveStatus } from "@/components/live-status";
import { WhatsAppBubble } from "@/components/whatsapp-bubble";
import { whatsappLink } from "@/components/site-data";
import { regionCatalog } from "@/lib/market-data";

export const metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false
  }
};

const recoveryCards = [
  {
    title: "Return to the homepage",
    text: "Go back to the main WandaStream experience and continue from the global hub.",
    href: "/",
    icon: GlobeIcon,
    kind: "internal"
  },
  {
    title: "Open pricing",
    text: "Jump straight into the full pricing table and choose the right plan without extra steps.",
    href: "/#pricing",
    icon: PlayIcon,
    kind: "internal"
  },
  {
    title: "Contact support",
    text: "If you expected a different page, support can route you to the right setup or offer fast.",
    href: whatsappLink,
    icon: SupportIcon,
    kind: "external"
  }
];

export default function NotFound() {
  return (
    <>
      <div className="status-strip">
        <div className="container status-strip-inner">
          <LiveStatus />
          <div className="status-copy">The page you requested is unavailable, but the service is online.</div>
        </div>
      </div>

      <header className="site-header is-scrolled">
        <div className="container header-inner">
          <Brand priority />

          <nav className="desktop-nav" aria-label="404 navigation">
            <Link href="/">Home</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/library">Library</Link>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              Support
            </a>
          </nav>

          <a className="button button-primary header-cta" href="/#pricing">
            Start now
          </a>
        </div>
      </header>

      <main className="not-found-page">
        <section className="section hero not-found-hero">
          <div className="container not-found-grid">
            <div className="reveal is-visible hero-copy not-found-copy">
              <div className="hero-badge">
                <ShieldIcon />
                <span>Error 404</span>
              </div>

              <h1>
                <span className="hero-brand-line">Page missing</span>
                <span>This route does not exist anymore.</span>
              </h1>

              <p>
                The link may be outdated, incomplete, or moved during the site refactor. You can head back to the
                homepage, open pricing directly, or message support and we will point you to the right page fast.
              </p>

              <div className="hero-actions">
                <Link className="button button-primary" href="/">
                  Back home
                </Link>
                <Link className="button button-secondary" href="/#pricing">
                  View pricing
                </Link>
                <a className="button button-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
                  Contact support
                </a>
              </div>

              <div className="signal-row" aria-label="Recovery shortcuts">
                <div className="signal-pill">
                  <ShieldIcon />
                  <span>Stable service online</span>
                </div>
                <div className="signal-pill">
                  <PlayIcon />
                  <span>Pricing available now</span>
                </div>
                <div className="signal-pill">
                  <SupportIcon />
                  <span>24/7 human support</span>
                </div>
              </div>

              <div className="footer-link-row not-found-region-row" aria-label="Regional hubs">
                {regionCatalog.map((region) => (
                  <Link className="footer-chip" href={`/${region.slug}`} key={region.slug}>
                    {region.shortName}
                  </Link>
                ))}
              </div>
            </div>

            <div className="reveal is-visible not-found-panel-wrap" style={{ "--delay": "120ms" }}>
              <div className="guide-card not-found-panel">
                <div className="not-found-code">404</div>
                <p className="not-found-panel-copy">
                  Choose one of the fastest paths below to continue browsing or start your subscription flow.
                </p>

                <div className="feature-grid not-found-card-grid">
                  {recoveryCards.map(({ href, icon: Icon, kind, text, title }) =>
                    kind === "internal" ? (
                      <Link className="feature-card not-found-action-card" href={href} key={title}>
                        <span className="feature-icon">
                          <Icon />
                        </span>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </Link>
                    ) : (
                      <a className="feature-card not-found-action-card" href={href} key={title} target="_blank" rel="noreferrer">
                        <span className="feature-icon">
                          <Icon />
                        </span>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-stack">
          <div className="footer-inner">
            <div className="footer-brand-block">
              <FooterBrand />
              <p>Continue with the homepage, pricing, or a regional hub without losing the WandaStream flow.</p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <SupportIcon />
              <span>24/7 support</span>
            </a>
          </div>
        </div>
      </footer>

      <WhatsAppBubble href={whatsappLink} label="Contact support" />
    </>
  );
}
