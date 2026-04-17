import Link from "next/link";
import { Brand, FooterBrand } from "@/components/brand";
import { GlobeIcon, PlayIcon, ShieldIcon, SupportIcon } from "@/components/icons";
import { LiveStatus } from "@/components/live-status";
import { WhatsAppBubble } from "@/components/whatsapp-bubble";
import { whatsappLink } from "@/components/site-data";

export const metadata = {
  title: "Page non trouvee",
  robots: {
    index: false,
    follow: false
  }
};

const recoveryCards = [
  {
    title: "Retour à l'accueil",
    text: "Reprenez le parcours principal et retrouvez directement les chaînes, le sport, les films et les séries.",
    href: "/",
    icon: GlobeIcon,
    kind: "internal"
  },
  {
    title: "Voir les offres",
    text: "Accédez directement aux tarifs et choisissez la durée qui vous convient.",
    href: "/pricing",
    icon: PlayIcon,
    kind: "internal"
  },
  {
    title: "WhatsApp",
    text: "Si vous cherchiez une autre page, nous pouvons vous rediriger rapidement vers le bon guide ou la bonne offre.",
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
          <div className="status-copy">La page demandee est indisponible, mais le service reste actif.</div>
        </div>
      </div>

      <header className="site-header is-scrolled">
        <div className="container header-inner">
          <Brand priority />

          <nav className="desktop-nav" aria-label="Navigation 404">
            <Link href="/">Accueil</Link>
            <Link href="/#benefits">Avantages</Link>
            <Link href="/#pricing">Tarifs</Link>
            <Link href="/#library">Films & séries</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/devices">Appareils</Link>
            <Link href="/#contact">Contact</Link>
          </nav>

          <a className="button button-primary header-cta" href="/#pricing">
            Voir les offres
          </a>
        </div>
      </header>

      <main className="not-found-page">
        <section className="section hero not-found-hero">
          <div className="container not-found-grid">
            <div className="reveal is-visible hero-copy not-found-copy">
              <div className="hero-badge">
                <ShieldIcon />
                <span>Erreur 404</span>
              </div>

              <h1>
                <span className="hero-brand-line">Page introuvable</span>
                <span>Cette page n'existe plus.</span>
              </h1>

              <p>
                Le lien est peut-être incomplet ou l'ancienne page a été déplacée. Vous pouvez revenir à l'accueil, ouvrir les offres ou nous
                écrire sur WhatsApp pour aller plus vite.
              </p>

              <div className="hero-actions">
                <Link className="button button-primary" href="/">
                  Retour accueil
                </Link>
                <Link className="button button-secondary" href="/#pricing">
                  Voir les offres
                </Link>
                <a className="button button-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>

              <div className="signal-row" aria-label="Raccourcis utiles">
                <div className="signal-pill">
                  <ShieldIcon />
                  <span>Service actif</span>
                </div>
                <div className="signal-pill">
                  <PlayIcon />
                  <span>Tarifs disponibles</span>
                </div>
                <div className="signal-pill">
                  <SupportIcon />
                  <span>Support disponible</span>
                </div>
              </div>
            </div>

            <div className="reveal is-visible not-found-panel-wrap" style={{ "--delay": "120ms" }}>
              <div className="guide-card not-found-panel">
                <div className="not-found-code">404</div>
                <p className="not-found-panel-copy">
                  Choisissez l'un des chemins rapides ci-dessous pour continuer votre visite.
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
              <p>IPTV France avec chaînes françaises, sport, films et séries. Vous pouvez reprendre avec l'accueil, les offres ou WhatsApp.</p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <SupportIcon />
              <span>Support disponible</span>
            </a>
          </div>
        </div>
      </footer>

      <WhatsAppBubble href={whatsappLink} label="Ouvrir WhatsApp" />
    </>
  );
}
