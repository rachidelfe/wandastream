import Script from "next/script";
import Link from "next/link";
import { Brand, FooterBrand } from "@/components/brand";
import {
  GlobeIcon,
  ShieldIcon,
  SupportIcon,
  TvIcon
} from "@/components/icons";
import { whatsappLink } from "@/components/site-data";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { franceMarket } from "@/lib/france-data";
import { guideCategories, getDeviceLinks, getGuidesForDevice, getGuidesGroupedByCategory } from "@/lib/france-guides";

const LAST_UPDATED_LABEL = "Mise à jour : Avril 2026";

function JsonLd({ data }) {
  const id = `jsonld-${String(data["@type"] ?? "schema").toLowerCase()}`;
  return <Script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const links = [
  { label: "Accueil", href: "/" },
  { label: "Avantages", href: "/#benefits" },
  { label: "Tarifs", href: "/#pricing" },
  { label: "Films & séries", href: "/#library" },
  { label: "Guides", href: "/guides" },
  { label: "Appareils", href: "/devices" },
  { label: "Contact", href: "/#contact" }
];

export function FranceFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-stack">
        <div className="footer-inner">
          <div className="footer-brand-block">
            <FooterBrand />
            <p>IPTV France avec chaînes françaises, sport, films et séries. Activation rapide et aide sur WhatsApp.</p>
          </div>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <SupportIcon />
            <span>Support disponible</span>
          </a>
        </div>

        <span className="update-badge">Mise à jour : Avril 2026</span>

        <div className="footer-link-row">
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

        <div className="footer-link-row">
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
            <ShieldIcon />
            <span>Installation simple</span>
          </span>
          <span className="regional-service-pill">
            <SupportIcon />
            <span>Support disponible</span>
          </span>
        </div>

        <p className="footer-note">
          {franceMarket.supportBase}. Paiement par {franceMarket.paymentMethods.join(", ")}. {franceMarket.complianceNote}
        </p>
      </div>
    </footer>
  );
}

export function FranceShell({ children, ctaHref = "/#pricing", ctaLabel = "Voir les offres" }) {
  return (
    <>
      <header className="site-header is-scrolled guide-header">
        <div className="container header-inner">
          <Brand href="/" priority />

          <nav className="desktop-nav" aria-label="Navigation principale">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link className="button button-primary header-cta" href={ctaHref}>
            {ctaLabel}
          </Link>

          <details className="mobile-nav-shell">
            <summary className="mobile-menu-toggle" aria-label="Ouvrir la navigation">
              <span />
              <span />
              <span />
            </summary>
            <div className="mobile-nav-wrap">
              <nav className="mobile-nav" aria-label="Navigation mobile">
                {links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
                <Link className="button button-primary mobile-nav-cta" href={ctaHref}>
                  {ctaLabel}
                </Link>
                <a className="button button-secondary mobile-nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </nav>
            </div>
          </details>
        </div>
      </header>

      {children}
      <FranceFooter />
    </>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function FaqList({ items }) {
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

export function GuidesHubPage() {
  const groups = getGuidesGroupedByCategory();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Accueil", path: "/" },
    { name: "Guides", path: "/guides" }
  ]);

  return (
    <FranceShell ctaHref="/#pricing">
      <main className="guide-page market-page">
        <section className="section guide-hero">
          <div className="container">
            <div className="guide-shell market-copy guide-hero-single">
              <span className="eyebrow">Guides France</span>
              <h1>Guides IPTV France pour bien choisir, installer et commencer rapidement.</h1>
              <p>
                Retrouvez ici des conseils simples pour Smart TV, Firestick, Android TV et Apple TV, avec des réponses claires avant de choisir
                votre abonnement.
              </p>
              <div className="guide-hero-meta-row">
                <div className="market-meta-row guide-meta-tags">
                  <span className="market-chip">France</span>
                  <span className="market-chip">10 guides</span>
                  <span className="market-chip">4 categories</span>
                </div>
                <div className="hero-actions guide-hero-actions">
                  <Link className="button button-primary" href="/#pricing">
                    Voir les offres
                  </Link>
                  <Link className="button button-secondary" href="/devices">
                    Voir les appareils
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tight guide-filter-strip">
          <div className="container">
            <nav className="guide-filter-nav" aria-label="Categories de guides">
              {guideCategories.map((category) => (
                <Link className="guide-filter-chip" href={`#${category.slug}`} key={category.slug}>
                  {category.label}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        {groups.map((group) => (
          <section className="section deferred-section" id={group.slug} key={group.slug}>
            <div className="container">
              <SectionIntro eyebrow="Guides" title={group.label} text={group.description} />
              <div className="help-center-grid seo-link-grid">
                {group.posts.map((post) => (
                  <article className="help-card" key={post.slug}>
                    <span className="eyebrow">{post.categoryLabel}</span>
                    <h3>{post.title}</h3>
                    <p>{post.intro}</p>
                    <Link className="help-link" href={`/guides/${post.slug}`}>
                      Lire le guide
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <JsonLd data={breadcrumbSchema} />
      </main>
    </FranceShell>
  );
}

export function GuidePostPage({ post }) {
  const devices = getDeviceLinks(post.deviceSlugs);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Accueil", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: post.title, path: `/guides/${post.slug}` }
  ]);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image || `${siteConfig.siteUrl}/iptv-france-hero.webp`,
    inLanguage: "fr-FR",
    author: {
      "@type": "Organization",
      name: "WandaStream",
      url: siteConfig.siteUrl
    },
    publisher: {
      "@type": "Organization",
      name: "WandaStream",
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/assets/img/iptv-france-wandastream-iptv-logo.svg`
      }
    },
    datePublished: post.datePublished || "2026-04-01",
    dateModified: "2026-04-14",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.siteUrl}/guides/${post.slug}`
    }
  };

  return (
    <FranceShell ctaHref="/#pricing">
      <main className="guide-page market-page">
        <section className="section guide-hero">
          <div className="container">
            <div className="guide-shell market-copy guide-hero-single">
              <span className="eyebrow">Guide France</span>
              <h1>{post.title}</h1>
              <p>{post.intro}</p>
              <div className="update-badge">{LAST_UPDATED_LABEL}</div>
              <div className="guide-hero-meta-row">
                <div className="market-meta-row guide-meta-tags">
                  <span className="market-chip">France</span>
                  <span className="market-chip">{post.categoryLabel}</span>
                  {devices.map((device) => (
                    <span className="market-chip" key={device.slug}>
                      {device.name}
                    </span>
                  ))}
                </div>
                <div className="hero-actions guide-hero-actions">
                  <Link className="button button-primary" href="/#pricing">
                    Voir les offres
                  </Link>
                  <a className="button button-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tight">
          <div className="container">
            <div className="guide-quick-solution guide-card">
              <span className="eyebrow">En bref</span>
              <h2>Le plus simple est de choisir le bon appareil, installer l'application et commencer.</h2>
              <div className="guide-highlight-list guide-highlight-grid">
                <div className="guide-highlight">
                  <span className="guide-bullet-dot" />
                  <span>Chaînes françaises et sport</span>
                </div>
                <div className="guide-highlight">
                  <span className="guide-bullet-dot" />
                  <span>Installation simple</span>
                </div>
                <div className="guide-highlight">
                  <span className="guide-bullet-dot" />
                  <span>Aide rapide sur WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container guide-grid">
            {post.sections.map((section) => (
              <article className="guide-card" key={section.heading}>
                <span className="eyebrow">{section.kicker}</span>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
                {section.bullets?.length ? (
                  <ul className="help-points">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container">
            <SectionIntro
              eyebrow="Pour aller plus loin"
              title="Les pages utiles à ouvrir ensuite."
              text="Selon votre appareil, vous pouvez continuer avec un guide d'installation, les tarifs ou un message sur WhatsApp."
            />
            <div className="help-center-grid seo-link-grid">
              {devices.map((device) => (
                <article className="help-card" key={device.slug}>
                  <span className="feature-icon">
                    <TvIcon />
                  </span>
                  <h3>{device.name}</h3>
                  <p>{device.comparison}</p>
                  <Link className="help-link" href={device.href}>
                    Voir l'installation
                  </Link>
                </article>
              ))}
              <article className="help-card">
                <span className="feature-icon">
                  <ShieldIcon />
                </span>
                <h3>Tarifs</h3>
                <p>Comparez les durées et choisissez l'offre qui vous convient le mieux.</p>
                <Link className="help-link" href="/#pricing">
                  Voir les offres
                </Link>
              </article>
              <article className="help-sidecard">
                <span className="eyebrow">Support</span>
                <h3>Besoin d'un avis avant de choisir ?</h3>
                <p>Nous pouvons vous aider à vérifier votre appareil, l'application recommandée et la bonne durée avant de commander.</p>
                <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container">
            <SectionIntro eyebrow="FAQ" title="Les questions les plus utiles sur ce sujet." text="Des réponses simples pour avancer plus vite." />
            <FaqList items={post.faqs} />
          </div>
        </section>

        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={articleSchema} />
        <JsonLd data={buildFaqSchema(post.faqs)} />
      </main>
    </FranceShell>
  );
}

export function DevicesHubPage({ devices }) {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Accueil", path: "/" },
    { name: "Appareils", path: "/devices" }
  ]);

  return (
    <FranceShell ctaHref="/#pricing">
      <main className="guide-page market-page">
        <section className="section guide-hero">
          <div className="container">
            <div className="guide-shell market-copy guide-hero-single">
              <span className="eyebrow">Appareils</span>
              <h1>Appareils compatibles pour regarder simplement sur TV, mobile et ordinateur.</h1>
              <p>Retrouvez les appareils les plus utilisés et les étapes simples pour commencer sur Smart TV, Firestick, Android TV ou Apple TV.</p>
              <div className="guide-hero-meta-row">
                <div className="market-meta-row guide-meta-tags">
                  <span className="market-chip">France</span>
                  <span className="market-chip">{devices.length} appareils</span>
                  <span className="market-chip">Installation simple</span>
                </div>
                <div className="hero-actions guide-hero-actions">
                  <Link className="button button-primary" href="/#pricing">
                    Voir les offres
                  </Link>
                  <Link className="button button-secondary" href="/guides">
                    Voir les guides
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container help-center-grid seo-link-grid">
            {devices.map((device) => (
              <article className="help-card" key={device.slug}>
                <span className="feature-icon">
                  <TvIcon />
                </span>
                <h3>{device.name}</h3>
                <p>{device.comparison}</p>
                <Link className="help-link" href={`/devices/${device.routeSlug}`}>
                  Voir l'installation
                </Link>
              </article>
            ))}
          </div>
        </section>

        <JsonLd data={breadcrumbSchema} />
      </main>
    </FranceShell>
  );
}

export function DevicePage({ device }) {
  const relatedGuides = getGuidesForDevice(device.slug);
  const appNames = Array.isArray(device.apps) ? device.apps.join(", ") : device.apps;
  const faqItems = [
    {
      question: `Quelle application utiliser sur ${device.name} ?`,
      answer: `${appNames} sont les options les plus simples pour commencer rapidement et regarder confortablement.`
    },
    {
      question: `Combien de temps prend l'installation sur ${device.name} ?`,
      answer: `Comptez généralement ${device.setupTime} si vos accès sont prêts et si la connexion est correcte.`
    },
    {
      question: "Quand faut-il contacter le support ?",
      answer: "Quand vous hésitez entre plusieurs appareils, que l'application n'est pas claire ou que vous voulez choisir l'offre la plus adaptée."
    }
  ];
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Accueil", path: "/" },
    { name: "Appareils", path: "/devices" },
    { name: device.name, path: `/devices/${device.routeSlug}` }
  ]);
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Comment installer IPTV sur ${device.name} en France`,
    description: `Guide simple pour installer votre abonnement sur ${device.name} en France. Mise en route en ${device.setupTime}.`,
    image: device.image || `${siteConfig.siteUrl}/iptv-france-hero.webp`,
    totalTime: `PT${String(device.setupTime).split("-")[0]}M`,
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: "0"
    },
    supply: [
      { "@type": "HowToSupply", name: "Abonnement WandaStream" },
      { "@type": "HowToSupply", name: device.name }
    ],
    tool: [{ "@type": "HowToTool", name: "Application IPTV Smarters" }],
    step: device.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
      url: `${siteConfig.siteUrl}/devices/${device.routeSlug}#step-${index + 1}`,
      image: step.image ? absoluteUrl(step.image) : absoluteUrl("/iptv-france-hero.webp")
    }))
  };

  return (
    <FranceShell ctaHref="/#pricing">
      <main className="guide-page market-page">
        <section className="section guide-hero">
          <div className="container">
            <div className="guide-shell market-copy guide-hero-single">
              <span className="eyebrow">Appareil</span>
              <h1>{device.name} : installation simple pour commencer rapidement.</h1>
              <p>{device.comparison}</p>
              <div className="update-badge">{LAST_UPDATED_LABEL}</div>
              <div className="guide-hero-meta-row">
                <div className="market-meta-row guide-meta-tags">
                  <span className="market-chip">{device.setupTime}</span>
                  <span className="market-chip">{device.difficulty}</span>
                  <span className="market-chip">{device.bestFor}</span>
                  <span className="market-chip">{appNames}</span>
                </div>
                <div className="hero-actions guide-hero-actions">
                  <Link className="button button-primary" href="/#pricing">
                    Voir les offres
                  </Link>
                  <a className="button button-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container guide-grid">
            {device.steps.map((step, index) => (
              <article className="guide-card" id={`step-${index + 1}`} key={step.title}>
                <span className="eyebrow">Etape {index + 1}</span>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container">
            <SectionIntro
              eyebrow="Guides liés"
              title="Quelques guides utiles pour cet appareil."
              text="Vous pouvez continuer avec des conseils simples, les tarifs ou une aide sur WhatsApp."
            />
            <div className="help-center-grid seo-link-grid">
              {relatedGuides.map((guide) => (
                <article className="help-card" key={guide.slug}>
                  <span className="feature-icon">
                    <GlobeIcon />
                  </span>
                  <h3>{guide.title}</h3>
                  <p>{guide.intro}</p>
                  <Link className="help-link" href={`/guides/${guide.slug}`}>
                    Ouvrir le guide
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container">
            <SectionIntro eyebrow="FAQ" title={`Questions fréquentes sur ${device.name}.`} text="Des réponses simples avant de commencer." />
            <FaqList items={faqItems} />
          </div>
        </section>

        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={howToSchema} />
        <JsonLd data={buildFaqSchema(faqItems)} />
      </main>
    </FranceShell>
  );
}
