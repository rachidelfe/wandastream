import Link from "next/link";
import { LandingTemplate } from "@/components/landing-template";
import {
  CheckIcon,
  GlobeIcon,
  ShieldIcon,
  SparkIcon,
  SupportIcon,
  TvIcon
} from "@/components/icons";
import {
  bentoCards,
  deviceBadges,
  featureCards,
  heroDevices,
  heroSignals
} from "@/components/site-data";
import {
  deviceCatalog,
  getRegionContactHref
} from "@/lib/market-data";
import {
  getGuidesByRegion,
  getGuidesGroupedByCategory
} from "@/lib/regional-guides";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildHowToSchema
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
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
      {(items ?? []).map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

function regionNav(region) {
  const basePath = `/${region.slug}`;

  return [
    { label: "Home", href: basePath },
    { label: "Pricing", href: `${basePath}#pricing` },
    { label: "Library", href: `${basePath}#library` },
    { label: "Guides", href: `${basePath}/blog` },
    { label: "Contact", href: `${basePath}#contact` },
    { label: "Global Hub", href: "/" }
  ];
}

function RegionShell({ children, region, contactHref, ctaLabel = "Start now", ctaHref }) {
  const links = regionNav(region);

  return (
    <>
      <header className="site-header is-scrolled guide-header">
        <div className="container header-inner">
          <Link className="brand" href={`/${region.slug}`}>
            <span className="brand-mark" />
            <span>{siteConfig.name}</span>
          </Link>
          <nav className="desktop-nav" aria-label="Regional navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link className="button button-primary header-cta" href={ctaHref}>
            {ctaLabel}
          </Link>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container footer-stack">
          <div className="footer-inner">
            <p>Regional guides, device pages, and landing pages now keep visitors inside the same localized path until they choose to exit to the global hub.</p>
            <a href={contactHref} target="_blank" rel="noreferrer">
              <SupportIcon />
              <span>24/7 support</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function regionHeroTitle(region) {
  const titles = {
    uk: "Stable 4K streaming built for match-day confidence.",
    fr: "Une experience IPTV premium axee sur la stabilite.",
    ma: "Une offre IPTV premium plus simple et plus rassurante.",
    be: "Une experience IPTV premium plus claire et plus stable.",
    gcc: "Premium 4K streaming for households that expect more."
  };

  return titles[region.slug] ?? "Premium IPTV with a cleaner path to activation.";
}

function regionBenefits(region) {
  const copy = {
    uk: {
      title: "A premium landing page tailored to sports-heavy households and cleaner conversion flow.",
      text: "The structure matches the global homepage, but the content is tuned to UK expectations around stability, live events, and direct support."
    },
    fr: {
      title: "Une landing page premium pensee pour la stabilite et un parcours plus clair.",
      text: "La structure reste identique a la homepage globale, mais le discours parle davantage aux attentes francophones autour du sport, du cinema et de la fluidite."
    },
    ma: {
      title: "Une landing page plus rassurante pour les foyers qui veulent une experience simple et compatible.",
      text: "La meme structure premium reste en place, avec un discours adapte au Maroc autour de la confiance, de la compatibilite et d'un parcours plus direct."
    },
    be: {
      title: "Une landing page francophone plus claire pour la Belgique.",
      text: "La page conserve la meme experience que le hub global tout en adaptant les signaux de confiance, le ton et la conversion au marche belge."
    },
    gcc: {
      title: "A premium landing page tuned for higher-end 4K expectations.",
      text: "The same master layout now speaks more directly to buyers who expect a polished living-room experience and stronger premium trust signals."
    }
  };

  const current = copy[region.slug];

  return {
    eyebrow: "Benefits",
    title: current.title,
    text: current.text,
    cards: bentoCards
  };
}

function regionPlatforms(region) {
  const textByRegion = {
    uk: "The platform layer stays polished while the messaging leans toward live events, mainstream content, and a sharper sports-first story.",
    fr: "La couche plateformes reste premium, avec un ton qui renforce davantage l'idee de stabilite et de contenus majeurs.",
    ma: "La presentation des plateformes reste identique, mais le texte insiste plus sur la confiance, le salon et les usages du quotidien.",
    be: "La meme presentation premium est conservee avec un angle plus local et francophone.",
    gcc: "The platform layer remains cinematic while the supporting copy leans more premium and 4K-oriented."
  };

  return {
    eyebrow: "Included Platforms",
    title: "A familiar platform layer that supports the same premium visual rhythm.",
    text: textByRegion[region.slug]
  };
}

function regionTrust(region) {
  const items = [
    { value: "99.99%", label: region.slug === "fr" || region.slug === "ma" || region.slug === "be" ? "promesse de stabilite" : "uptime focus" },
    { value: "<2s", label: region.slug === "fr" || region.slug === "ma" || region.slug === "be" ? "zapping cible" : "switching target" },
    { value: region.currencyLabel, label: region.slug === "fr" || region.slug === "ma" || region.slug === "be" ? "contexte local" : "local pricing context" },
    { value: region.city, label: region.slug === "fr" || region.slug === "ma" || region.slug === "be" ? "repere local" : "lead city signal" }
  ];

  const extra = (
    <>
      <article className="guide-card market-quote-card">
        <span className="eyebrow">Testimonials</span>
        <h2>{region.testimonial.name}</h2>
        <p className="market-quote">"{region.testimonial.quote}"</p>
        <p>
          {region.slug === "fr" || region.slug === "ma" || region.slug === "be"
            ? `Ce retour local renforce la confiance pour des visiteurs situes autour de ${region.city} et ${region.secondaryCity}.`
            : `This local proof helps buyers in ${region.city} and ${region.secondaryCity} connect the product promise to a market they recognize.`}
        </p>
      </article>

      <article className="guide-card">
        <span className="eyebrow">Trust signals</span>
        <h2>{region.city} and {region.secondaryCity}</h2>
        <ul>
          {(region.trustSignals ?? []).map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
      </article>
    </>
  );

  return { items, extra };
}

function regionLibrary(region) {
  const textByRegion = {
    uk: "The browsing layer stays premium while the supporting copy leans toward sports nights, entertainment, and a cleaner match-day experience.",
    fr: "La bibliotheque garde la meme interface premium avec un discours plus proche des attentes francophones autour du cinema et du sport.",
    ma: "La bibliotheque reste visuellement identique, avec une promesse plus rassurante autour des usages salon, mobile et famille.",
    be: "La bibliotheque garde la meme signature visuelle avec un angle plus adapte au marche francophone belge.",
    gcc: "The library remains cinematic while the message leans into premium 4K living-room viewing."
  };

  return {
    eyebrow: "Movies & Series",
    title: "The same streaming-style library experience, tuned with more local context.",
    text: textByRegion[region.slug]
  };
}

function regionComparison(region) {
  return {
    header: {
      eyebrow: "Device Compatibility",
      title: "Device compatibility stays on the landing page, while setup stays on the device pages.",
      text:
        region.slug === "fr" || region.slug === "ma" || region.slug === "be"
          ? "La page regionale confirme les appareils compatibles puis renvoie vers les pages device pour l'installation complete."
          : "The regional page confirms compatibility first, then routes deeper technical intent into the device guides."
    },
    columns: [
      { key: "device", label: "Device" },
      { key: "bestFor", label: "Best for" },
      { key: "strengths", label: "Why it fits" },
      {
        key: "guide",
        label: "Guide",
        render: (row) => <Link href={`/${region.slug}/${row.slug}`}>Open guide</Link>
      }
    ],
    rows: deviceCatalog.map((device) => ({
      id: device.slug,
      slug: device.slug,
      device: device.name,
      bestFor: device.bestFor,
      strengths: device.comparison
    }))
  };
}

function regionStats(region) {
  const itemsByRegion = {
    uk: [
      { value: "99.99%", label: "uptime goal" },
      { value: "<2s", label: "channel switching" },
      { value: "24/7", label: "support availability" },
      { value: "4K", label: "premium streaming focus" }
    ],
    fr: [
      { value: "99.99%", label: "stabilite cible" },
      { value: "<2s", label: "zapping cible" },
      { value: "24/7", label: "support disponible" },
      { value: "4K", label: "qualite premium" }
    ],
    ma: [
      { value: "99.99%", label: "stabilite cible" },
      { value: "<2s", label: "zapping cible" },
      { value: "24/7", label: "support disponible" },
      { value: "DH", label: "lecture locale" }
    ],
    be: [
      { value: "99.99%", label: "stabilite cible" },
      { value: "<2s", label: "zapping cible" },
      { value: "24/7", label: "support disponible" },
      { value: "EUR", label: "contexte local" }
    ],
    gcc: [
      { value: "99.99%", label: "uptime goal" },
      { value: "<2s", label: "switching target" },
      { value: "24/7", label: "support availability" },
      { value: "4K", label: "premium focus" }
    ]
  };

  return {
    header: {
      eyebrow: "Statistics",
      title: region.slug === "fr" || region.slug === "ma" || region.slug === "be" ? "Des chiffres adaptes au contexte local." : "Numbers that fit the local buying context.",
      text:
        region.slug === "fr" || region.slug === "ma" || region.slug === "be"
          ? "Les pages regionales gardent la meme structure visuelle que la homepage avec des preuves mieux alignees au marche."
          : "Regional pages keep the same visual structure as the homepage while swapping in more local trust signals."
    },
    items: itemsByRegion[region.slug]
  };
}

function regionUseCases(region) {
  const cases = {
    uk: [
      { title: "Sports fans", text: "Built for households that compare match-day reliability, fast switching, and cleaner viewing flow before they compare anything else." },
      { title: "Families", text: "Works for homes that want clear compatibility across the main screens without technical clutter on the landing page." },
      { title: "Expats", text: "Useful for buyers who want a broader content mix while keeping the conversion path simple and local." }
    ],
    fr: [
      { title: "Sport", text: "Pense pour les foyers qui veulent surtout plus de fluidite pendant les grands matchs et les pics d'audience." },
      { title: "Familles", text: "Adapte aux usages multi-ecrans avec une presentation plus claire et rassurante avant activation." },
      { title: "Cinema et series", text: "Cible les visiteurs qui privilegient la stabilite et le confort d'usage avant tout." }
    ],
    ma: [
      { title: "Salon Smart TV", text: "Pense pour les foyers qui veulent d'abord confirmer la compatibilite et la confiance sur grand ecran." },
      { title: "Mobile quotidien", text: "Utile pour les visiteurs qui basculent entre salon et usage mobile au quotidien." },
      { title: "Familles", text: "Ideal pour les foyers qui recherchent surtout un service simple a comprendre et rapide a activer." }
    ],
    be: [
      { title: "Sport premium", text: "Utile pour les visiteurs qui veulent d'abord verifier la stabilite et le confort d'usage avant de comparer les plans." },
      { title: "Foyers multi-ecrans", text: "Concu pour les usages salon, mobile et tablette dans un parcours plus lisible." },
      { title: "Cinema et series", text: "Adapte aux visiteurs qui veulent surtout une page plus claire et plus rassurante avant activation." }
    ],
    gcc: [
      { title: "Premium households", text: "Built for buyers who compare polish, support, and 4K quality as much as they compare plan length." },
      { title: "Sports-first viewing", text: "Strong for buyers who want a cleaner premium feel around live events and premium screen setups." },
      { title: "Family streaming", text: "Fits homes that want one polished experience across the core living-room screens." }
    ]
  };

  return {
    header: {
      eyebrow: "Use Cases",
      title: region.slug === "fr" || region.slug === "ma" || region.slug === "be" ? "Des cas d'usage adaptes au marche local." : "Use cases that feel local without changing the product UX.",
      text:
        region.slug === "fr" || region.slug === "ma" || region.slug === "be"
          ? "La meme grille de lecture reste en place avec un contexte plus proche des besoins locaux."
          : "The same homepage structure stays in place while the supporting language shifts toward local conversion intent."
    },
    items: cases[region.slug]
  };
}

function regionReliability(region) {
  return {
    header: {
      eyebrow: "Reliability Layer",
      title:
        region.slug === "fr" || region.slug === "ma" || region.slug === "be"
          ? "Les benefices restent presentes comme un produit premium."
          : "The benefits are still presented like a premium software product.",
      text:
        region.slug === "fr" || region.slug === "ma" || region.slug === "be"
          ? "La structure reste identique a la homepage globale avec un discours plus aligne au contexte local."
          : "The section keeps the same visual rhythm as the global homepage while shifting the supporting copy toward local expectations."
    },
    cards: featureCards
  };
}

function regionDevices(region) {
  return {
    header: {
      eyebrow: "Supported Devices",
      title:
        region.slug === "fr" || region.slug === "ma" || region.slug === "be"
          ? "Compatible avec les ecrans deja utilises a la maison."
          : "Ready for the screens already used in the home.",
      text:
        region.slug === "fr" || region.slug === "ma" || region.slug === "be"
          ? "La compatibilite reste facile a scanner sans transformer la page en guide d'installation."
          : "Compatibility stays easy to scan without turning the page into a setup guide."
    },
    badges: deviceBadges
  };
}

function regionFaq(region) {
  return {
    header: {
      eyebrow: "FAQ",
      title:
        region.slug === "fr" || region.slug === "ma" || region.slug === "be"
          ? "Des reponses locales aux questions les plus frequentes."
          : "Localized answers to the questions buyers ask most often.",
      text:
        region.slug === "fr" || region.slug === "ma" || region.slug === "be"
          ? "Les FAQ regionales traitent les objections locales sans glisser vers les details techniques."
          : "These FAQs address local objections without drifting into technical setup detail."
    },
    items: region.faq
  };
}

function regionContact(region) {
  return {
    eyebrow: "Need Help Choosing?",
    title:
      region.slug === "fr" || region.slug === "ma" || region.slug === "be"
        ? "Besoin d'aide avant de choisir votre offre ?"
        : "Need help before choosing the right plan?",
    text:
      region.slug === "fr" || region.slug === "ma" || region.slug === "be"
        ? `Le support reste disponible pour les visiteurs situes autour de ${region.city} et ${region.secondaryCity} avant activation.`
        : `Support stays available for viewers across ${region.name} who want a cleaner path from research to activation.`
  };
}

function buildRegionContent(region) {
  return {
    hero: {
      badge: "Live uptime monitored daily",
      title: regionHeroTitle(region),
      intro: region.heroIntro,
      devices: heroDevices,
      signals: heroSignals
    },
    benefits: regionBenefits(region),
    platforms: regionPlatforms(region),
    trust: regionTrust(region),
    library: regionLibrary(region),
    comparison: regionComparison(region),
    stats: regionStats(region),
    useCases: regionUseCases(region),
    reliability: regionReliability(region),
    devices: regionDevices(region),
    faq: regionFaq(region),
    contact: regionContact(region),
    footer: {
      text:
        region.slug === "fr" || region.slug === "ma" || region.slug === "be"
          ? "Chaque page regionale garde la meme experience que la homepage tout en verrouillant la navigation dans son environnement local."
          : "Each regional page now uses the same master layout as the homepage while keeping navigation locked inside its local environment.",
      showRegionLinks: false
    }
  };
}

export function RegionPage({ region }) {
  const contactHref = getRegionContactHref(region);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: region.name, path: `/${region.slug}` }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${siteConfig.name} ${region.shortName} IPTV`,
    serviceType: "Regional IPTV landing page",
    areaServed: {
      "@type": "Place",
      name: region.name
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: contactHref
    },
    description: region.heroIntro
  };

  return (
    <>
      <LandingTemplate content={buildRegionContent(region)} insideRegion basePath={`/${region.slug}`} contactHref={contactHref} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={buildFaqSchema(region.faq)} />
    </>
  );
}

function buildDeviceFaq(region, device) {
  return [
    {
      question: `What is the best app for ${device.name}?`,
      answer: `${device.apps} are the main options because they support the credentials and playback workflow most buyers expect on ${device.name}.`
    },
    {
      question: `How long does ${device.name} setup take?`,
      answer: `Most ${device.name} setups are completed in about ${device.setupTime}, assuming the buyer already has their login details and a stable connection.`
    },
    {
      question: "Should I contact support before activating?",
      answer: "Yes, especially if you want the cleanest player recommendation, a local checkout path, or help validating the device before purchase."
    }
  ];
}

export function RegionDevicePage({ region, device }) {
  const contactHref = getRegionContactHref(region);
  const faqItems = buildDeviceFaq(region, device);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: region.name, path: `/${region.slug}` },
    { name: device.name, path: `/${region.slug}/${device.slug}` }
  ]);
  const howToSchema = buildHowToSchema({
    name: `${device.name} IPTV setup in ${region.name}`,
    description: `Setup instructions for ${device.name} buyers in ${region.name}.`,
    path: `/${region.slug}/${device.slug}`,
    steps: device.steps
  });

  return (
    <RegionShell region={region} contactHref={contactHref} ctaHref={`/${region.slug}#pricing`}>
      <main className="guide-page market-page">
        <section className="section guide-hero">
          <div className="container market-hero-grid">
            <div className="guide-shell market-copy">
              <span className="eyebrow">Device guide</span>
              <h1>{device.name} IPTV setup</h1>
              <p>
                This page handles the technical layer for {device.name} buyers in {region.name}, including setup steps, app recommendations,
                optimization tips, and troubleshooting.
              </p>

              <div className="market-meta-row">
                <span className="market-chip">{device.setupTime}</span>
                <span className="market-chip">{device.apps}</span>
                <span className="market-chip">{device.bestFor}</span>
              </div>

              <div className="hero-actions">
                <Link className="button button-primary" href={`/${region.slug}#pricing`}>
                  Start now
                </Link>
                <Link className="button button-secondary" href={`/${region.slug}`}>
                  Home
                </Link>
              </div>
            </div>

            <div className="guide-card market-proof-panel">
              <span className="eyebrow">Setup Snapshot</span>
              <h3>{device.name} is best for {device.bestFor.toLowerCase()}.</h3>
              <p>{device.comparison}</p>
              <ul className="feature-list compact-list">
                <li>
                  <span className="check-badge">
                    <CheckIcon />
                  </span>
                  <span>Recommended apps: {device.apps}.</span>
                </li>
                <li>
                  <span className="check-badge">
                    <CheckIcon />
                  </span>
                  <span>All setup links stay inside the regional environment.</span>
                </li>
                <li>
                  <span className="check-badge">
                    <CheckIcon />
                  </span>
                  <span>Pricing and support remain one click away throughout the technical flow.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container guide-grid two-column-grid">
            {(device.steps ?? []).map((step, index) => (
              <article className="guide-card" key={step}>
                <span className="eyebrow">Step {index + 1}</span>
                <h2>{device.name} setup step {index + 1}</h2>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container">
            <SectionIntro
              eyebrow="Internal Links"
              title="Keep technical traffic tied to the localized conversion path."
              text="Device pages should point back to the regional homepage, regional pricing, and regional content so setup intent never loses its local context."
            />
            <div className="help-center-grid seo-link-grid">
              <article className="help-card">
                <span className="feature-icon">
                  <GlobeIcon />
                </span>
                <h3>Home</h3>
                <p>Return to the regional landing page for benefits, trust signals, pricing, and FAQ.</p>
                <Link className="help-link" href={`/${region.slug}`}>
                  Open home
                </Link>
              </article>
              <article className="help-card">
                <span className="feature-icon">
                  <ShieldIcon />
                </span>
                <h3>Pricing</h3>
                <p>Keep the commercial CTA visible for users who are ready to move from setup research into subscription comparison.</p>
                <Link className="help-link" href={`/${region.slug}#pricing`}>
                  Open pricing
                </Link>
              </article>
              <article className="help-card">
                <span className="feature-icon">
                  <SparkIcon />
                </span>
                <h3>Guides</h3>
                <p>Supplement technical content with regional guides for events, comparisons, and problem-solving queries inside the same local environment.</p>
                <Link className="help-link" href={`/${region.slug}/blog`}>
                  Open guides
                </Link>
              </article>
              <article className="help-sidecard">
                <span className="eyebrow">Support</span>
                <h3>Need help choosing the right player?</h3>
                <p>Buyers on {device.name} usually convert faster when support confirms the best app and activation path before checkout.</p>
                <a className="button button-primary" href={contactHref} target="_blank" rel="noreferrer">
                  Contact support
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container">
            <SectionIntro
              eyebrow="FAQ"
              title={`${device.name} setup questions`}
              text="These answers add helpful detail for search and reduce the support burden for high-intent device queries."
            />
            <FaqList items={faqItems} />
          </div>
        </section>

        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={howToSchema} />
        <JsonLd data={buildFaqSchema(faqItems)} />
      </main>
    </RegionShell>
  );
}

export function RegionGuidesIndexPage({ region }) {
  const posts = getGuidesByRegion(region.slug);
  const groupedPosts = getGuidesGroupedByCategory(region.slug);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: region.name, path: `/${region.slug}` },
    { name: "Guides", path: `/${region.slug}/blog` }
  ]);
  const contactHref = getRegionContactHref(region);
  const french = ["fr", "ma", "be"].includes(region.slug);
  const categoryCount = groupedPosts.filter((group) => group.posts.length > 0).length;

  return (
    <RegionShell region={region} contactHref={contactHref} ctaHref={`/${region.slug}#pricing`}>
      <main className="guide-page market-page">
        <section className="section guide-hero">
          <div className="container market-hero-grid">
            <div className="guide-shell market-copy">
              <span className="eyebrow">Guides</span>
              <h1>
                {french ? `Guides IPTV regionaux pour ${region.name}` : `Regional IPTV guides for ${region.name}`}
              </h1>
              <p>
                {french
                  ? `Cette page capte la longue traine locale autour des appareils, des grands evenements, des comparatifs et des problemes frequents, puis renvoie vers la page ${region.shortName}, les pages appareil et la section tarifs.`
                  : `This guides hub captures local long-tail searches around devices, premium events, comparisons, and problem-solving queries, then routes that traffic into the ${region.shortName} landing page, device pages, and pricing.`}
              </p>

              <div className="market-meta-row">
                <span className="market-chip">{posts.length} guides</span>
                <span className="market-chip">{categoryCount} categories</span>
                <span className="market-chip">{region.city}</span>
              </div>

              <div className="hero-actions">
                <Link className="button button-primary" href={`/${region.slug}`}>
                  Home
                </Link>
                <Link className="button button-secondary" href={`/${region.slug}#pricing`}>
                  View pricing
                </Link>
                <a className="button button-secondary" href={contactHref} target="_blank" rel="noreferrer">
                  Contact support
                </a>
              </div>
            </div>

            <div className="guide-card market-proof-panel">
              <span className="eyebrow">Guides strategy</span>
              <h3>
                {french ? "Chaque guide doit mener vers l'action." : "Every guide should end in action."}
              </h3>
              <ul className="feature-list compact-list">
                <li>
                  <span className="check-badge">
                    <CheckIcon />
                  </span>
                  <span>
                    {french ? "Chaque article renvoie vers la page regionale." : "Every article links back to the regional landing page."}
                  </span>
                </li>
                <li>
                  <span className="check-badge">
                    <CheckIcon />
                  </span>
                  <span>
                    {french ? "Les guides appareil restent lies au meme environnement local." : "Device guides stay tied to the same regional environment."}
                  </span>
                </li>
                <li>
                  <span className="check-badge">
                    <CheckIcon />
                  </span>
                  <span>
                    {french ? "La section tarifs et le support restent visibles jusqu'au bout." : "Pricing and support remain visible all the way through the funnel."}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {groupedPosts
          .filter((group) => group.posts.length > 0)
          .map((group) => (
            <section className="section deferred-section" key={group.slug}>
              <div className="container">
                <SectionIntro
                  eyebrow="Guides"
                  title={french ? `${group.frenchLabel} pour ${region.shortName}` : `${group.label} guides for ${region.shortName}`}
                  text={french ? group.frenchDescription : group.description}
                />

                <div className="help-center-grid seo-link-grid">
                  {group.posts.map((post) => (
                    <article className="help-card" key={post.slug}>
                      <span className="eyebrow">{post.categoryLabel}</span>
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>
                      <div className="market-meta-row">
                        <span className="market-chip">{post.keyword}</span>
                      </div>
                      <Link className="help-link" href={`/${region.slug}/blog/${post.slug}`}>
                        {french ? "Lire le guide" : "Read guide"}
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ))}

        <section className="section deferred-section">
          <div className="container">
            <div className="final-cta guide-cta guide-card">
              <div className="cta-glow" />
              <span className="eyebrow">Next step</span>
              <h2>
                {french
                  ? "Passez du guide a la page regionale, puis aux tarifs."
                  : "Move from the guide hub into the regional page, then pricing."}
              </h2>
              <p>
                {french
                  ? "Les guides ne sont pas un point final. Ils doivent pousser vers la page locale, les appareils relies et la conversion."
                  : "The guides hub is not an endpoint. It should push readers into the local landing page, linked device routes, and conversion."}
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href={`/${region.slug}`}>
                  Home
                </Link>
                <Link className="button button-secondary" href={`/${region.slug}#pricing`}>
                  View pricing
                </Link>
                <a className="button button-secondary" href={contactHref} target="_blank" rel="noreferrer">
                  Contact support
                </a>
              </div>
            </div>
          </div>
        </section>

        <JsonLd data={breadcrumbSchema} />
      </main>
    </RegionShell>
  );
}

export function RegionGuidePostPage({ region, post }) {
  const relatedDevices = (post.deviceSlugs ?? []).map((slug) => deviceCatalog.find((device) => device.slug === slug)).filter(Boolean);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: region.name, path: `/${region.slug}` },
    { name: "Guides", path: `/${region.slug}/blog` },
    { name: post.title, path: `/${region.slug}/blog/${post.slug}` }
  ]);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    inLanguage: region.locale,
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    },
    keywords: [post.keyword, `${region.shortName} IPTV guides`],
    mainEntityOfPage: absoluteUrl(`/${region.slug}/blog/${post.slug}`)
  };
  const contactHref = getRegionContactHref(region);
  const french = ["fr", "ma", "be"].includes(region.slug);

  return (
    <RegionShell region={region} contactHref={contactHref} ctaHref={`/${region.slug}#pricing`}>
      <main className="guide-page market-page">
        <section className="section guide-hero">
          <div className="container market-hero-grid">
            <div className="guide-shell market-copy">
              <span className="eyebrow">Guides</span>
              <h1>{post.title}</h1>
              <p>{post.intro}</p>

              <div className="market-meta-row">
                <span className="market-chip">{post.categoryLabel}</span>
                <span className="market-chip">{post.keyword}</span>
                {relatedDevices.map((device) => (
                  <span className="market-chip" key={device.slug}>
                    {device.name}
                  </span>
                ))}
              </div>

              <div className="hero-actions">
                <Link className="button button-primary" href={`/${region.slug}`}>
                  Home
                </Link>
                <Link className="button button-secondary" href={`/${region.slug}#pricing`}>
                  View pricing
                </Link>
                <a className="button button-secondary" href={contactHref} target="_blank" rel="noreferrer">
                  Contact support
                </a>
              </div>
            </div>

            <div className="guide-card market-proof-panel">
              <span className="eyebrow">SEO path</span>
              <h3>
                {french ? "Chaque guide doit finir dans le tunnel regional." : "Every guide should end inside the regional funnel."}
              </h3>
              <p>{post.categoryDescription}</p>
              <ul className="feature-list compact-list">
                <li>
                  <span className="check-badge">
                    <CheckIcon />
                  </span>
                  <span>{french ? "Page regionale liee directement." : "Regional page linked directly from the article."}</span>
                </li>
                <li>
                  <span className="check-badge">
                    <CheckIcon />
                  </span>
                  <span>{french ? "Pages appareil reliees au sujet." : "Device pages linked to the article topic."}</span>
                </li>
                <li>
                  <span className="check-badge">
                    <CheckIcon />
                  </span>
                  <span>{french ? "Tarifs et support toujours visibles." : "Pricing and support remain visible throughout."}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container guide-grid">
            {(post.sections ?? []).map((section) => (
              <article className="guide-card" key={section.heading}>
                {section.kicker ? <span className="eyebrow">{section.kicker}</span> : null}
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
                {section.subsections?.length ? (
                  <div className="guide-card-stack">
                    {section.subsections.map((item) => (
                      <div className="guide-subsection" key={item.heading}>
                        <h3>{item.heading}</h3>
                        <p>{item.body}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
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
              eyebrow="Internal links"
              title={
                french
                  ? "Faire passer le trafic du guide vers la page regionale, les appareils et les tarifs."
                  : "Move guide traffic toward the regional page, device routes, and pricing."
              }
              text={
                french
                  ? "Chaque article doit garder visible le prochain clic utile: page locale, guide appareil, tarifs ou support."
                  : "Every article should keep the next useful click visible: local page, device guide, pricing, or support."
              }
            />
            <div className="help-center-grid seo-link-grid">
              <article className="help-card">
                <span className="feature-icon">
                  <GlobeIcon />
                </span>
                <h3>{french ? `Page ${region.shortName}` : `${region.shortName} landing page`}</h3>
                <p>
                  {french
                    ? "Revenir a la page regionale pour les preuves locales, la FAQ et la conversion."
                    : "Return to the regional landing page for local proof, FAQ, and the main conversion path."}
                </p>
                <Link className="help-link" href={`/${region.slug}`}>
                  {french ? "Ouvrir la page locale" : "Open regional page"}
                </Link>
              </article>
              {(relatedDevices ?? []).map((device) => (
                <article className="help-card" key={device.slug}>
                  <span className="feature-icon">
                    <TvIcon />
                  </span>
                  <h3>{device.name}</h3>
                  <p>{device.comparison}</p>
                  <Link className="help-link" href={`/${region.slug}/${device.slug}`}>
                    {french ? "Ouvrir le guide appareil" : "Open device guide"}
                  </Link>
                </article>
              ))}
              <article className="help-card">
                <span className="feature-icon">
                  <ShieldIcon />
                </span>
                <h3>{french ? "Tarifs" : "Pricing"}</h3>
                <p>
                  {french
                    ? "Passer directement vers la section tarifs sans quitter l'environnement regional."
                    : "Jump directly into the regional pricing section without leaving the local environment."}
                </p>
                <Link className="help-link" href={`/${region.slug}#pricing`}>
                  {french ? "Voir les tarifs" : "View pricing"}
                </Link>
              </article>
              <article className="help-sidecard">
                <span className="eyebrow">{french ? "Support" : "Support"}</span>
                <h3>{french ? "Besoin d'un avis avant de choisir ?" : "Need a quick opinion before you choose?"}</h3>
                <p>
                  {french
                    ? "Le support peut valider l'appareil, le player et la meilleure etape suivante avant l'achat."
                    : "Support can validate the device, player, and best next step before the buyer checks out."}
                </p>
                <a className="button button-primary" href={contactHref} target="_blank" rel="noreferrer">
                  Contact support
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container">
            <SectionIntro
              eyebrow="FAQ"
              title={french ? "Questions longue traine traitees sur la page." : "Extra long-tail questions answered on-page."}
              text={
                french
                  ? "La FAQ renforce le guide pour le SEO tout en gardant l'intention regionale visible."
                  : "FAQ schema strengthens the guide while keeping regional intent visible for search and visitors."
              }
            />
            <FaqList items={post.faqs} />
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container">
            <div className="final-cta guide-cta guide-card">
              <div className="cta-glow" />
              <span className="eyebrow">CTA</span>
              <h2>
                {french
                  ? "Passez de ce guide a la page regionale, puis aux tarifs."
                  : "Move from this guide into the regional page, then pricing."}
              </h2>
              <p>
                {french
                  ? "Le bon tunnel reste simple: comprendre le sujet, verifier l'appareil, puis aller vers les tarifs ou le support."
                  : "The right funnel stays simple: understand the topic, verify the device path, then move into pricing or support."}
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href={`/${region.slug}#pricing`}>
                  View pricing
                </Link>
                <a className="button button-secondary" href={contactHref} target="_blank" rel="noreferrer">
                  Contact support
                </a>
              </div>
            </div>
          </div>
        </section>

        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={articleSchema} />
        <JsonLd data={buildFaqSchema(post.faqs)} />
      </main>
    </RegionShell>
  );
}
