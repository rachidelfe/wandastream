import { deviceCatalog, regionCatalog } from "@/lib/market-data";

export const guideCategories = [
  {
    slug: "high-intent",
    label: "High-intent",
    frenchLabel: "Intentions fortes",
    description: "Commercial guides for buyers comparing devices, setup paths, and the fastest route into pricing.",
    frenchDescription: "Guides a forte intention pour aider les visiteurs a choisir un appareil, un parcours et une offre."
  },
  {
    slug: "event-based",
    label: "Event-based",
    frenchLabel: "Moments forts",
    description: "Traffic-spike content built around matches, premium events, and viewing windows that create urgency.",
    frenchDescription: "Contenus lies aux pics de trafic, aux grands matchs et aux moments qui creent une urgence d'achat."
  },
  {
    slug: "comparison",
    label: "Comparison",
    frenchLabel: "Comparatifs",
    description: "Trust-building comparisons that help visitors evaluate IPTV against mainstream alternatives in each market.",
    frenchDescription: "Comparatifs pour renforcer la confiance et aider les visiteurs a situer IPTV face aux alternatives locales."
  },
  {
    slug: "problem-solving",
    label: "Problem-solving",
    frenchLabel: "Problemes frequents",
    description: "Fix-oriented guides for buffering, app issues, and playback problems that often convert quickly.",
    frenchDescription: "Guides axes correction, buffering et depannage pour les requetes a forte conversion."
  }
];

const categoryMap = Object.fromEntries(guideCategories.map((category) => [category.slug, category]));
const frenchRegions = new Set(["fr", "ma", "be"]);
const deviceMap = Object.fromEntries(deviceCatalog.map((device) => [device.slug, device]));

const hi = (config) => ({ kind: "high-intent", ...config });
const event = (config) => ({ kind: "event-based", ...config });
const comparison = (config) => ({ kind: "comparison", ...config });
const problem = (config) => ({ kind: "problem-solving", ...config });

const regionGuideBlueprints = {
  uk: [
    event({
      slug: "how-to-watch-champions-league-live-uk-without-cable",
      title: "How to Watch Champions League Live in the UK Without Cable (2026 Guide)",
      keyword: "watch Champions League live UK without cable",
      eventName: "Champions League live nights in the UK",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "match-night buyers who want a cable-free route before kickoff"
    }),
    event({
      slug: "how-to-watch-nfl-games-uk-firestick-smart-tv",
      title: "How to Watch NFL Games in the UK on Firestick & Smart TV (Easy Setup)",
      keyword: "watch NFL games UK Firestick Smart TV",
      eventName: "NFL game nights in the UK",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "viewers who need an easy setup path for live NFL streaming on the main screen"
    }),
    event({
      slug: "where-to-watch-ufc-live-uk",
      title: "Where to Watch UFC Live in the UK (HD & 4K Streaming Guide)",
      keyword: "watch UFC live UK HD 4K streaming",
      eventName: "UFC live events in the UK",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "late-night fight fans comparing stable HD and 4K playback before the card starts"
    }),
    hi({
      slug: "best-way-to-watch-hbo-shows-uk-high-quality",
      title: "Best Way to Watch HBO Shows in the UK in High Quality (No Buffering)",
      keyword: "watch HBO shows UK high quality no buffering",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "viewers who care about cleaner VOD quality, fast loading, and fewer buffering interruptions",
      supportAngle: "a stronger path from premium series intent into device pages and pricing"
    }),
    hi({
      slug: "best-iptv-apps-streaming-uk",
      title: "Best IPTV Apps for Streaming in the UK (Firestick, Smart TV & Android)",
      keyword: "best IPTV apps UK Firestick Smart TV Android",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "buyers comparing app quality, device fit, and the simplest player before subscribing",
      supportAngle: "a cleaner handoff from app research into the UK landing page and pricing"
    }),
    event({
      slug: "how-to-watch-premier-league-without-sky-uk",
      title: "How to Watch Premier League Without Sky in the UK (Full Streaming Guide)",
      keyword: "watch Premier League without Sky UK",
      eventName: "Premier League weekends without Sky",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "sports-heavy homes looking for a full streaming path without paying for Sky bundles"
    }),
    hi({
      slug: "best-iptv-for-firestick-uk-fast-setup-stable-streaming",
      title: "Best IPTV for Firestick in the UK (Fast Setup & Stable Streaming)",
      keyword: "best IPTV for Firestick UK fast setup stable streaming",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "buyers who want a quick Firestick route with stable live sports and movie playback",
      supportAngle: "a fast route into pricing once the Firestick setup looks credible"
    }),
    comparison({
      slug: "iptv-vs-sky-uk-which-is-better",
      title: "IPTV vs Sky UK: Which Is Better for Sports & Movies in 2026?",
      keyword: "IPTV vs Sky UK sports movies 2026",
      compareTarget: "Sky UK",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "households comparing sports coverage, movie access, and flexibility in one setup"
    }),
    problem({
      slug: "how-to-fix-iptv-buffering-issues-uk",
      title: "How to Fix IPTV Buffering Issues in the UK (Step-by-Step Guide)",
      keyword: "fix IPTV buffering issues UK step by step",
      deviceSlugs: ["firestick", "smart-tv"],
      problemName: "buffering issues during sports and evening streaming",
      angle: "buyers who need a clearer fix path before they give up on the setup"
    }),
    hi({
      slug: "best-iptv-setup-sports-weekends-uk",
      title: "Best IPTV Setup for Sports Weekends in the UK (No Lag Streaming)",
      keyword: "best IPTV setup sports weekends UK no lag streaming",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "sports-first homes that want no-lag streaming during busy weekend fixtures",
      supportAngle: "a stronger conversion path for weekend sports buyers who want the setup validated quickly"
    })
  ],
  fr: [
    event({
      slug: "comment-regarder-ligue-des-champions-france-sans-cable",
      title: "Comment regarder la Ligue des Champions en France sans abonnement cable (Guide 2026)",
      keyword: "regarder Ligue des Champions France sans abonnement cable",
      eventName: "les soirees Ligue des Champions en France",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les visiteurs qui veulent un acces streaming avant les grands matchs sans passer par le cable"
    }),
    event({
      slug: "comment-regarder-nfl-france-firestick-smart-tv",
      title: "Comment regarder la NFL en France sur Firestick et Smart TV (installation facile)",
      keyword: "regarder NFL France Firestick Smart TV installation facile",
      eventName: "les matchs NFL en France",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "les visiteurs qui veulent un chemin simple pour voir la NFL sur les appareils les plus populaires"
    }),
    event({
      slug: "ou-regarder-ufc-direct-france",
      title: "Ou regarder l'UFC en direct en France (guide streaming HD & 4K)",
      keyword: "regarder UFC en direct France streaming HD 4K",
      eventName: "les soirees UFC en direct en France",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "les recherches de derniere minute autour du streaming HD et 4K pour les combats"
    }),
    hi({
      slug: "meilleure-facon-regarder-hbo-france-haute-qualite",
      title: "Meilleure facon de regarder HBO en haute qualite en France (sans coupure)",
      keyword: "regarder HBO haute qualite France sans coupure",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les visiteurs qui veulent une lecture premium pour les series HBO sans coupure",
      supportAngle: "un passage plus fluide entre contenus premium, page France et tarifs"
    }),
    hi({
      slug: "meilleures-applications-iptv-france",
      title: "Meilleures applications IPTV en France (Firestick, Smart TV et Android)",
      keyword: "meilleures applications IPTV France Firestick Smart TV Android",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "les acheteurs qui comparent application, appareil et qualite de lecture avant de commander",
      supportAngle: "une reponse claire pour les visiteurs qui veulent choisir le bon player puis passer a l'offre"
    }),
    comparison({
      slug: "iptv-vs-canal-plus-france-quelle-solution-choisir",
      title: "IPTV vs Canal+ : quelle solution choisir en France en 2026 ?",
      keyword: "IPTV vs Canal+ France 2026",
      compareTarget: "Canal+",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les foyers qui comparent stabilite, sport, cinema et souplesse d'utilisation"
    }),
    hi({
      slug: "meilleur-iptv-smart-tv-france-installation-rapide-stable",
      title: "Meilleur IPTV pour Smart TV en France (installation rapide et stable)",
      keyword: "meilleur IPTV Smart TV France installation rapide stable",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les foyers qui veulent une installation rapide sur le televiseur principal avec une stabilite rassurante",
      supportAngle: "une transition plus propre entre compatibilite Smart TV et conversion"
    }),
    problem({
      slug: "comment-ameliorer-stabilite-iptv-france",
      title: "Comment ameliorer la stabilite IPTV en France (guide complet)",
      keyword: "ameliorer stabilite IPTV France guide complet",
      problemName: "les problemes de stabilite IPTV en France",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les visiteurs qui veulent retrouver une lecture fluide avant de demander de l'aide"
    }),
    hi({
      slug: "iptv-pour-sport-et-cinema-france",
      title: "IPTV pour sport et cinema en France (streaming sans coupure)",
      keyword: "IPTV pour sport et cinema France streaming sans coupure",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les foyers qui veulent un seul parcours pour le sport premium et le cinema en streaming",
      supportAngle: "un bon chemin entre usage quotidien, page France et section tarifs"
    }),
    hi({
      slug: "configuration-iptv-simple-android-tv-france",
      title: "Configuration IPTV simple sur Android TV en France (guide complet)",
      keyword: "configuration IPTV simple Android TV France guide complet",
      deviceSlugs: ["android-tv", "firestick"],
      angle: "les utilisateurs qui veulent une configuration Android TV simple sans perdre la stabilite",
      supportAngle: "une reponse SEO claire qui mene ensuite vers le guide appareil et la conversion"
    })
  ],
  ma: [
    event({
      slug: "comment-regarder-ligue-des-champions-maroc-sans-cable",
      title: "Comment regarder la Ligue des Champions au Maroc sans abonnement cable (Guide 2026)",
      keyword: "regarder Ligue des Champions Maroc sans abonnement cable",
      eventName: "les grandes soirees Ligue des champions",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les recherches qui montent avant les grands matchs quand le visiteur veut eviter le cable"
    }),
    event({
      slug: "comment-regarder-nfl-maroc-firestick-smart-tv",
      title: "Comment regarder la NFL au Maroc sur Firestick et Smart TV (guide facile)",
      keyword: "regarder NFL Maroc Firestick Smart TV guide facile",
      eventName: "les matchs NFL au Maroc",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "les visiteurs qui veulent suivre la NFL avec un guide simple sur les ecrans les plus utilises"
    }),
    event({
      slug: "ou-regarder-ufc-direct-maroc",
      title: "Ou regarder l'UFC en direct au Maroc (streaming HD et 4K)",
      keyword: "regarder UFC direct Maroc streaming HD 4K",
      eventName: "les soirees UFC au Maroc",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "les fans qui cherchent un streaming HD et 4K avant les combats"
    }),
    hi({
      slug: "meilleure-facon-regarder-hbo-maroc-haute-qualite",
      title: "Meilleure facon de regarder HBO en haute qualite au Maroc (sans buffering)",
      keyword: "regarder HBO haute qualite Maroc sans buffering",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les visiteurs qui veulent voir HBO en haute qualite avec moins de buffering",
      supportAngle: "une passerelle plus claire entre contenus premium, page Maroc et section tarifs"
    }),
    hi({
      slug: "meilleures-applications-iptv-maroc",
      title: "Meilleures applications IPTV au Maroc (Smart TV, Android et Firestick)",
      keyword: "meilleures applications IPTV Maroc Smart TV Android Firestick",
      deviceSlugs: ["android-tv", "firestick"],
      angle: "les acheteurs qui comparent application, appareil et stabilite avant activation",
      supportAngle: "un chemin plus court entre choix du player, page Maroc et conversion"
    }),
    event({
      slug: "comment-regarder-bein-sports-maroc-sans-coupure",
      title: "Comment regarder beIN Sports au Maroc sans coupure (guide complet)",
      keyword: "regarder beIN Sports Maroc sans coupure guide complet",
      eventName: "les soirees beIN Sports au Maroc",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les visiteurs qui veulent un streaming sport plus stable autour des grands evenements"
    }),
    hi({
      slug: "meilleur-iptv-smart-tv-maroc-installation-rapide",
      title: "Meilleur IPTV pour Smart TV au Maroc (installation rapide)",
      keyword: "meilleur IPTV Smart TV Maroc installation rapide",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les foyers a Casablanca et Rabat qui veulent d'abord confirmer la compatibilite Smart TV",
      supportAngle: "un chemin plus direct entre confiance locale, appareil et page Maroc"
    }),
    problem({
      slug: "iptv-maroc-eviter-buffering-ameliorer-stabilite",
      title: "IPTV Maroc : comment eviter le buffering et ameliorer la stabilite",
      keyword: "IPTV Maroc eviter buffering ameliorer stabilite",
      problemName: "le buffering et les problemes de stabilite IPTV au Maroc",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les visiteurs qui ont besoin d'une checklist simple avant de parler au support"
    }),
    hi({
      slug: "iptv-mobile-smart-tv-maroc-guide-complet-2026",
      title: "IPTV sur mobile et Smart TV au Maroc (guide complet 2026)",
      keyword: "IPTV mobile Smart TV Maroc guide complet 2026",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les visiteurs qui veulent basculer facilement entre mobile et ecran principal a la maison",
      supportAngle: "une orientation plus claire vers les pages appareil et l'offre locale"
    }),
    hi({
      slug: "meilleure-solution-regarder-sport-maroc-facilement",
      title: "Meilleure solution pour regarder le sport au Maroc facilement",
      keyword: "meilleure solution regarder sport Maroc facilement",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "les fans de sport qui veulent un parcours simple avec une lecture plus fluide",
      supportAngle: "une reponse commerciale plus lisible pour les visiteurs sport au Maroc"
    })
  ],
  be: [
    event({
      slug: "comment-regarder-ligue-des-champions-belgique-sans-cable",
      title: "Comment regarder la Ligue des Champions en Belgique sans abonnement cable (Guide 2026)",
      keyword: "regarder Ligue des Champions Belgique sans abonnement cable",
      eventName: "les affiches Ligue des Champions en Belgique",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les recherches de soiree qui veulent un acces streaming simple sans passer par le cable"
    }),
    event({
      slug: "comment-regarder-nfl-belgique-firestick-smart-tv",
      title: "Comment regarder la NFL en Belgique sur Firestick et Smart TV",
      keyword: "regarder NFL Belgique Firestick Smart TV",
      eventName: "les matchs NFL en Belgique",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "les visiteurs qui veulent suivre la NFL sur les ecrans les plus populaires avec peu d'etapes"
    }),
    event({
      slug: "ou-regarder-ufc-direct-belgique",
      title: "Ou regarder l'UFC en direct en Belgique (guide streaming HD & 4K)",
      keyword: "regarder UFC en direct Belgique streaming HD 4K",
      eventName: "les soirees UFC en Belgique",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "les fans qui cherchent du streaming HD et 4K avant les combats"
    }),
    hi({
      slug: "meilleure-facon-regarder-hbo-belgique-haute-qualite",
      title: "Meilleure facon de regarder HBO en Belgique en haute qualite",
      keyword: "regarder HBO Belgique haute qualite",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les foyers qui veulent une qualite d'image plus propre pour les series premium",
      supportAngle: "un chemin plus lisible entre contenus premium, page Belgique et tarifs"
    }),
    hi({
      slug: "meilleures-applications-iptv-belgique",
      title: "Meilleures applications IPTV en Belgique (Smart TV, Android et Firestick)",
      keyword: "meilleures applications IPTV Belgique Smart TV Android Firestick",
      deviceSlugs: ["android-tv", "firestick"],
      angle: "les acheteurs qui comparent player, appareil et confort d'utilisation avant activation",
      supportAngle: "une reponse plus credible pour les visiteurs qui veulent choisir le bon player"
    }),
    comparison({
      slug: "iptv-vs-canal-plus-belgique-meilleure-option-2026",
      title: "IPTV vs Canal+ en Belgique : quelle est la meilleure option en 2026 ?",
      keyword: "IPTV vs Canal+ Belgique meilleure option 2026",
      compareTarget: "Canal+ en Belgique",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les visiteurs qui veulent situer IPTV face a une reference premium francophone"
    }),
    hi({
      slug: "meilleur-iptv-smart-tv-belgique-installation-simple-rapide",
      title: "Meilleur IPTV pour Smart TV en Belgique (installation simple et rapide)",
      keyword: "meilleur IPTV Smart TV Belgique installation simple rapide",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les foyers francophones qui veulent une installation salon plus claire et plus stable",
      supportAngle: "une passerelle simple entre compatibilite Smart TV, page Belgique et conversion"
    }),
    hi({
      slug: "iptv-stable-sport-cinema-belgique",
      title: "IPTV stable pour sport et cinema en Belgique (sans coupure)",
      keyword: "IPTV stable sport cinema Belgique sans coupure",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les foyers qui veulent un seul parcours pour le sport et le cinema sans coupure",
      supportAngle: "un maillage plus court entre usages quotidiens, page Belgique et tarifs"
    }),
    problem({
      slug: "configuration-iptv-facile-belgique-guide-complet",
      title: "Configuration IPTV facile en Belgique (guide complet)",
      keyword: "configuration IPTV facile Belgique guide complet",
      problemName: "les doutes autour de la configuration IPTV en Belgique",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les visiteurs qui veulent une checklist concrete pour configurer correctement le service"
    }),
    hi({
      slug: "iptv-pour-foyers-francophones-belgique-solution-complete",
      title: "IPTV pour foyers francophones en Belgique (solution complete)",
      keyword: "IPTV foyers francophones Belgique solution complete",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les foyers francophones qui veulent une solution complete pour le salon, le sport et le cinema",
      supportAngle: "une reponse locale plus forte pour les familles et foyers francophones en Belgique"
    })
  ],
  gcc: [
    event({
      slug: "how-to-watch-champions-league-live-saudi-uae-without-cable",
      title: "How to Watch Champions League Live in Saudi Arabia & UAE Without Cable (2026 Guide)",
      keyword: "watch Champions League live Saudi Arabia UAE without cable",
      eventName: "Champions League live nights in Saudi Arabia and the UAE",
      deviceSlugs: ["apple-tv", "firestick"],
      angle: "premium viewers who want a cable-free route before major Champions League nights"
    }),
    event({
      slug: "how-to-watch-nfl-games-saudi-uae-firestick-smart-tv",
      title: "How to Watch NFL Games in Saudi Arabia & UAE on Firestick & Smart TV (Full Setup Guide)",
      keyword: "watch NFL games Saudi Arabia UAE Firestick Smart TV",
      eventName: "NFL game nights in Saudi Arabia and the UAE",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "buyers who want a full setup path for NFL streaming on the most common living-room devices"
    }),
    event({
      slug: "where-to-watch-ufc-live-saudi-dubai-abu-dhabi",
      title: "Where to Watch UFC Live in Saudi Arabia, Dubai & Abu Dhabi (4K Streaming Guide)",
      keyword: "watch UFC live Saudi Arabia Dubai Abu Dhabi 4K streaming",
      eventName: "UFC live events across Saudi Arabia, Dubai, and Abu Dhabi",
      deviceSlugs: ["firestick", "apple-tv"],
      angle: "fight fans looking for premium 4K viewing before the event starts"
    }),
    hi({
      slug: "best-way-to-watch-hbo-shows-saudi-uae-high-quality",
      title: "Best Way to Watch HBO Shows in Saudi Arabia & UAE in High Quality (No Buffering)",
      keyword: "watch HBO shows Saudi Arabia UAE high quality no buffering",
      deviceSlugs: ["apple-tv", "smart-tv"],
      angle: "premium households that want cleaner HBO playback with fewer buffering issues",
      supportAngle: "a better route from premium content research into regional pricing and support"
    }),
    hi({
      slug: "best-iptv-apps-saudi-uae-guide",
      title: "Best IPTV Apps in Saudi Arabia & UAE (Firestick, Smart TV & Android Guide)",
      keyword: "best IPTV apps Saudi Arabia UAE Firestick Smart TV Android",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "buyers comparing the best apps for Firestick, Smart TV, and Android before they subscribe",
      supportAngle: "a clearer handoff from app research into device pages and the GCC funnel"
    }),
    event({
      slug: "where-to-watch-wwe-wrestlemania-live-saudi-uae",
      title: "Where to Watch WWE WrestleMania Live in Saudi Arabia & UAE (Full Guide)",
      keyword: "watch WWE WrestleMania live Saudi Arabia UAE",
      eventName: "WWE WrestleMania live in Saudi Arabia and the UAE",
      deviceSlugs: ["apple-tv", "firestick"],
      angle: "big-event search traffic from viewers who want a direct full guide before WrestleMania starts"
    }),
    hi({
      slug: "best-iptv-for-4k-streaming-dubai-abu-dhabi-saudi",
      title: "Best IPTV for 4K Streaming in Dubai, Abu Dhabi & Saudi Arabia (Premium Guide)",
      keyword: "best IPTV for 4K streaming Dubai Abu Dhabi Saudi Arabia",
      deviceSlugs: ["apple-tv", "smart-tv"],
      angle: "premium households that compare 4K picture quality, polish, and living-room fit",
      supportAngle: "a short route from premium 4K intent into the GCC pricing flow"
    }),
    event({
      slug: "how-to-watch-ssc-sports-channels-saudi-uae",
      title: "How to Watch SSC Sports Channels in Saudi Arabia & UAE (Complete Guide)",
      keyword: "watch SSC Sports channels Saudi Arabia UAE complete guide",
      eventName: "SSC Sports viewing across Saudi Arabia and the UAE",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "sports-first traffic that wants a complete guide for SSC channels without extra friction"
    }),
    hi({
      slug: "best-iptv-setup-apple-tv-dubai-saudi",
      title: "Best IPTV Setup for Apple TV in Dubai & Saudi Arabia (Luxury Streaming Guide)",
      keyword: "best IPTV setup Apple TV Dubai Saudi Arabia luxury streaming",
      deviceSlugs: ["apple-tv", "firestick"],
      angle: "luxury streaming buyers who want an Apple TV-first setup with cleaner premium playback",
      supportAngle: "a cleaner handoff from Apple TV research into support and checkout"
    }),
    hi({
      slug: "premium-iptv-guide-home-streaming-saudi-uae",
      title: "Premium IPTV Guide for Home Streaming in Saudi Arabia & UAE (4K & 8K Ready)",
      keyword: "premium IPTV guide home streaming Saudi Arabia UAE 4K 8K",
      deviceSlugs: ["apple-tv", "firestick"],
      angle: "buyers who want a premium home setup built for 4K and 8K-ready screens",
      supportAngle: "a broader premium entry point into home streaming, device pages, and pricing"
    })
  ]
};

function isFrenchRegion(region) {
  return frenchRegions.has(region.slug);
}

function regionFor(slug) {
  return regionCatalog.find((region) => region.slug === slug);
}

function devicesFor(slugs) {
  return slugs.map((slug) => deviceMap[slug]).filter(Boolean);
}

function categoryLabel(region, categorySlug) {
  const category = categoryMap[categorySlug];
  return isFrenchRegion(region) ? category.frenchLabel : category.label;
}

function categoryDescription(region, categorySlug) {
  const category = categoryMap[categorySlug];
  return isFrenchRegion(region) ? category.frenchDescription : category.description;
}

function deviceSummary(devices) {
  return devices.map((device) => device.name).join(", ");
}

function comparisonDevices(primary, secondary, french) {
  if (!secondary) {
    return french
      ? `${primary.name} reste le point d'entree le plus simple car ${primary.comparison.toLowerCase()}`
      : `${primary.name} is usually the cleanest starting point because ${primary.comparison.toLowerCase()}`;
  }

  return french
    ? `${primary.name} ouvre la voie la plus simple, alors que ${secondary.name} prend le relais quand l'utilisateur veut ${secondary.bestFor.toLowerCase()}.`
    : `${primary.name} is the simplest starting point, while ${secondary.name} becomes stronger when the buyer wants ${secondary.bestFor.toLowerCase()}.`;
}

function buildHighIntentGuide(region, blueprint) {
  const french = isFrenchRegion(region);
  const devices = devicesFor(blueprint.deviceSlugs);
  const [primary, secondary] = devices;
  const provider = region.providerFocus?.[0] ?? region.coverageSummary;
  const pricingHref = `/${region.slug}#pricing`;
  const description = french
    ? `Guide ${region.shortName} pour ${blueprint.keyword}, avec liens vers ${deviceSummary(devices)}, la page ${region.shortName} et la section tarifs.`
    : `${blueprint.title} guide for ${region.name} buyers comparing ${deviceSummary(devices)} with direct links into the ${region.shortName} page and pricing.`;
  const intro = french
    ? `${blueprint.keyword} correspond a une recherche tres proche de la commande. Les visiteurs veulent surtout ${blueprint.angle}. Ce guide montre quels appareils prioriser, quoi verifier autour de ${provider}, et comment passer rapidement vers la page ${region.shortName} puis ${pricingHref}.`
    : `${blueprint.keyword} is a high-intent query because buyers already know the device path they want. They mainly want ${blueprint.angle}. This guide shows which devices to shortlist, what to verify around ${provider} viewing windows, and how to move into the ${region.shortName} page and pricing without extra clicks.`;

  return {
    region: region.slug,
    slug: blueprint.slug,
    title: blueprint.title,
    keyword: blueprint.keyword,
    description,
    intro,
    category: blueprint.kind,
    categoryLabel: categoryLabel(region, blueprint.kind),
    categoryDescription: categoryDescription(region, blueprint.kind),
    deviceSlugs: blueprint.deviceSlugs,
    sections: french
      ? [
          {
            kicker: "Appareils",
            heading: "Commencer par l'appareil qui correspond vraiment au salon",
            body: `En ${region.name}, beaucoup de visiteurs comparent trop vite le volume de chaines et pas assez la facon dont le flux se comporte sur l'ecran principal. ${blueprint.title} devient plus credible quand l'appareil correspond a l'usage reel du foyer.`,
            subsections: [
              {
                heading: `${primary.name} pour aller vite`,
                body: comparisonDevices(primary, secondary, true)
              },
              secondary
                ? {
                    heading: `${secondary.name} pour aller plus loin`,
                    body: `${secondary.comparison} Cela aide les visiteurs qui veulent un peu plus de controle sans casser le parcours de conversion.`
                  }
                : null
            ].filter(Boolean)
          },
          {
            kicker: "Verification",
            heading: "Ce qu'il faut valider avant de payer",
            body: `Les acheteurs les plus qualifies veulent une checklist courte: tester la fluidite, verifier le player prioritaire, puis garder support et tarifs visibles avant l'achat.`,
            bullets: [
              `Comparer la lecture pendant un moment fort autour de ${provider}.`,
              `Verifier que ${region.currencyLabel} et le contexte local restent clairs pour le visiteur.`,
              `Conserver un lien direct vers la page ${region.shortName}, la page appareil et la section tarifs.`
            ]
          },
          {
            kicker: "Conversion",
            heading: "La meilleure suite pour cette recherche",
            body: `${blueprint.supportAngle}. Le bon enchainement reste simple: page regionale, guide appareil, puis tarifs ou support selon le niveau de confiance.`
          }
        ]
      : [
          {
            kicker: "Device fit",
            heading: "Start with the device that matches the room",
            body: `Across ${region.city} and ${region.secondaryCity}, buyers often over-focus on channel count and under-focus on how the stream behaves on the main screen. ${blueprint.title} works better when the device matches the room, the remote habits, and the kind of viewing the household actually does.`,
            subsections: [
              {
                heading: `${primary.name} for the fastest path`,
                body: comparisonDevices(primary, secondary, false)
              },
              secondary
                ? {
                    heading: `${secondary.name} when flexibility matters more`,
                    body: `${secondary.comparison} That makes it useful for buyers who want more control without losing a clear route to conversion.`
                  }
                : null
            ].filter(Boolean)
          },
          {
            kicker: "Validation",
            heading: "What to verify before you pay",
            body: "High-intent device queries convert best when the page reduces uncertainty quickly. The buyer wants a short checklist that confirms playback quality, app direction, and where to go next.",
            bullets: [
              `Test playback during a meaningful ${provider} viewing window.`,
              `Keep ${region.currencyLabel} or local pricing context easy to understand.`,
              `Hold a direct path to the ${region.shortName} landing page, the device page, and pricing.`
            ]
          },
          {
            kicker: "Next step",
            heading: "Move from device research into the regional buying path",
            body: `${blueprint.supportAngle}. The strongest path stays short: regional page, device page, then pricing or support once the device choice feels right.`
          }
        ],
    faqs: french
      ? [
          {
            question: `Quel appareil convient le mieux pour ${blueprint.keyword} ?`,
            answer: `${primary.name} reste souvent le plus simple pour commencer, puis ${secondary?.name ?? primary.name} prend le relais si le visiteur veut plus de marge de reglage.`
          },
          {
            question: "Pourquoi garder la page regionale et les tarifs si proches ?",
            answer: `Parce qu'une recherche a forte intention doit passer tres vite de l'information a la conversion sans perdre le contexte ${region.shortName}.`
          },
          {
            question: "Le support doit-il intervenir avant l'achat ?",
            answer: "Oui, surtout quand le visiteur hesite entre deux appareils ou veut confirmer le meilleur player avant activation."
          }
        ]
      : [
          {
            question: `Which device is the best starting point for ${blueprint.keyword}?`,
            answer: `${primary.name} is usually the simplest first step, with ${secondary?.name ?? primary.name} becoming stronger when the buyer wants more playback control.`
          },
          {
            question: "Why keep the regional page and pricing so close to the article?",
            answer: `Because high-intent research should move into the ${region.shortName} commercial path quickly instead of ending on an informational dead end.`
          },
          {
            question: "Should support step in before checkout?",
            answer: "Yes, especially when the buyer is deciding between two devices or wants the cleanest app recommendation first."
          }
        ]
  };
}

function buildEventGuide(region, blueprint) {
  const french = isFrenchRegion(region);
  const devices = devicesFor(blueprint.deviceSlugs);
  const [primary, secondary] = devices;
  const provider = region.providerFocus?.[1] ?? region.providerFocus?.[0] ?? region.coverageSummary;

  return {
    region: region.slug,
    slug: blueprint.slug,
    title: blueprint.title,
    keyword: blueprint.keyword,
    description: french
      ? `Guide ${region.shortName} pour ${blueprint.eventName}, avec appareil conseille, maillage interne et sortie directe vers tarifs et support.`
      : `${blueprint.title} guide for ${region.name} traffic spikes, including the best device route, internal links, and direct pricing or support access.`,
    intro: french
      ? `${blueprint.eventName} font grimper les recherches parce que le visiteur veut une reponse pratique avant le direct. Cette page organise le trafic autour de l'appareil le plus logique, de la page ${region.shortName} et des tarifs pour garder une intention commerciale visible.`
      : `${blueprint.eventName} create a sharper search spike than generic IPTV queries because buyers want a practical answer before the event starts. This guide channels that traffic into the right device path, the ${region.shortName} page, and pricing so urgency stays connected to conversion.`,
    category: blueprint.kind,
    categoryLabel: categoryLabel(region, blueprint.kind),
    categoryDescription: categoryDescription(region, blueprint.kind),
    deviceSlugs: blueprint.deviceSlugs,
    sections: french
      ? [
          {
            kicker: "Pic de trafic",
            heading: `Pourquoi ${blueprint.eventName} convertissent mieux qu'une requete generique`,
            body: `Le visiteur ne cherche pas seulement une liste de chaines. Il veut surtout savoir si la lecture tiendra pendant ${provider} et quel appareil donnera la reponse la plus propre.`
          },
          {
            kicker: "Parcours appareil",
            heading: "Les appareils a prioriser avant le direct",
            body: `${primary.name} reste le chemin le plus simple pour aller vite, alors que ${secondary?.name ?? primary.name} sert mieux les visiteurs qui veulent plus de marge sur le player ou l'image.`,
            subsections: [
              {
                heading: `${primary.name} pour la rapidite`,
                body: `${primary.comparison} Cela colle bien a un trafic de derniere minute.`
              },
              secondary
                ? {
                    heading: `${secondary.name} pour un usage plus exigeant`,
                    body: `${secondary.comparison} Ce choix aide quand la qualite d'image ou le confort d'usage prend plus de place.`
                  }
                : null
            ].filter(Boolean)
          },
          {
            kicker: "Suite logique",
            heading: "Le bon tunnel apres cette page",
            body: `La meilleure sequence reste: page ${region.shortName}, guide appareil, puis tarifs ou support. Cela garde la recherche evenementielle dans un tunnel court et rentable.`
          }
        ]
      : [
          {
            kicker: "Traffic spike",
            heading: `Why ${blueprint.eventName} convert faster than generic IPTV queries`,
            body: `The searcher is not only looking for channel access. They want to know whether playback will hold up during ${provider} viewing windows and which device route gets them there with the least friction.`
          },
          {
            kicker: "Device route",
            heading: "Which devices to prioritize before the event starts",
            body: `${primary.name} is usually the fastest path for urgent setup, while ${secondary?.name ?? primary.name} suits buyers who care more about tuning, interface comfort, or premium playback polish.`,
            subsections: [
              {
                heading: `${primary.name} for a fast pre-event setup`,
                body: `${primary.comparison} That makes it ideal for traffic that arrives late and wants answers quickly.`
              },
              secondary
                ? {
                    heading: `${secondary.name} for a more premium setup`,
                    body: `${secondary.comparison} It works better when the buyer is comparing picture quality and everyday comfort too.`
                  }
                : null
            ].filter(Boolean)
          },
          {
            kicker: "Conversion path",
            heading: "Where this guide should send buyers next",
            body: `The best sequence is simple: ${region.shortName} landing page, device guide, then pricing or support. That keeps event-driven traffic inside a commercial path instead of leaving it as one-off informational traffic.`
          }
        ],
    faqs: french
      ? [
          {
            question: `Quel appareil choisir pour ${blueprint.eventName} ?`,
            answer: `${primary.name} reste le plus rapide a mettre en place, puis ${secondary?.name ?? primary.name} prend le relais pour un usage plus exigeant.`
          },
          {
            question: "Pourquoi relier ce contenu aux tarifs ?",
            answer: "Parce qu'une recherche evenementielle est souvent tres proche de la commande une fois que le doute sur l'appareil est leve."
          },
          {
            question: "Le guide doit-il renvoyer vers la page regionale ?",
            answer: `Oui, pour garder les signaux locaux, la preuve sociale et la FAQ ${region.shortName} dans le meme tunnel.`
          }
        ]
      : [
          {
            question: `Which device is best for ${blueprint.eventName}?`,
            answer: `${primary.name} is usually the fastest setup path, while ${secondary?.name ?? primary.name} becomes useful for buyers who want more tuning headroom.`
          },
          {
            question: "Why should an event guide link into pricing?",
            answer: "Because event-driven traffic is often close to purchase once the device route feels safe and the support path is visible."
          },
          {
            question: "Should this guide link back to the regional page?",
            answer: `Yes. That keeps local trust signals, FAQs, and pricing inside the same ${region.shortName} funnel.`
          }
        ]
  };
}

function buildComparisonGuide(region, blueprint) {
  const french = isFrenchRegion(region);
  const devices = devicesFor(blueprint.deviceSlugs);
  const [primary, secondary] = devices;
  const provider = region.providerFocus?.[0] ?? region.coverageSummary;

  return {
    region: region.slug,
    slug: blueprint.slug,
    title: blueprint.title,
    keyword: blueprint.keyword,
    description: french
      ? `Comparatif ${region.shortName} entre IPTV et ${blueprint.compareTarget}, avec angles de confiance, appareils lies et sortie vers page locale et tarifs.`
      : `${blueprint.title} comparison for ${region.name}, with local trust angles, linked devices, and a direct route back to the regional page and pricing.`,
    intro: french
      ? `Comparer IPTV a ${blueprint.compareTarget} aide les visiteurs a replacer l'offre dans un cadre qu'ils connaissent deja. Cette page n'a pas pour role de denigrer ${blueprint.compareTarget}, mais de montrer comment un acheteur ${region.shortName} peut comparer souplesse, confort et prochain clic utile.`
      : `Comparing IPTV with ${blueprint.compareTarget} gives buyers a frame of reference they already understand. The goal is not to dismiss ${blueprint.compareTarget}, but to help ${region.shortName} searchers compare flexibility, viewing comfort, and the next step that makes commercial sense.`,
    category: blueprint.kind,
    categoryLabel: categoryLabel(region, blueprint.kind),
    categoryDescription: categoryDescription(region, blueprint.kind),
    deviceSlugs: blueprint.deviceSlugs,
    sections: french
      ? [
          {
            kicker: "Forces",
            heading: `La ou IPTV prend l'avantage face a ${blueprint.compareTarget}`,
            body: `Dans ${region.name}, les visiteurs voient vite la difference quand ils comparent la souplesse des appareils, le volume de contenus, et la possibilite de garder sport, cinema et usage famille dans un meme parcours.`,
            bullets: [
              `Compatibilite plus large autour de ${deviceSummary(devices)}.`,
              `Passage plus direct vers support et activation que dans un tunnel trop ferme.`,
              `Un maillage interne qui relie comparaison, page ${region.shortName} et tarifs.`
            ]
          },
          {
            kicker: "Limites",
            heading: `La ou ${blueprint.compareTarget} peut sembler plus simple`,
            body: `${blueprint.compareTarget} garde parfois un avantage de clarte pour les utilisateurs qui veulent une marque deja connue. La bonne strategie SEO consiste donc a rassurer avec des preuves locales, des guides appareil et un pricing visible.`
          },
          {
            kicker: "Decision",
            heading: "Comment comparer sans perdre l'intention commerciale",
            body: `${primary.name} et ${secondary?.name ?? primary.name} servent ici de ponts techniques. Le visiteur doit pouvoir lire ce comparatif puis aller directement vers la page ${region.shortName}, les guides appareil et les tarifs.`
          }
        ]
      : [
          {
            kicker: "Strengths",
            heading: `Where IPTV wins against ${blueprint.compareTarget}`,
            body: `In ${region.name}, buyers see the difference fastest when they compare device flexibility, catalog breadth, and how easily one setup can cover sports, family viewing, and everyday entertainment.`,
            bullets: [
              `Wider device coverage around ${deviceSummary(devices)}.`,
              "A shorter path into support and activation instead of a closed subscription flow.",
              `Internal links that connect comparison intent to the ${region.shortName} page and pricing.`
            ]
          },
          {
            kicker: "Trade-offs",
            heading: `Where ${blueprint.compareTarget} can still feel simpler`,
            body: `${blueprint.compareTarget} can feel clearer to buyers who are used to a familiar brand. That is why the better SEO play is to respond with local proof, device guides, and a visible pricing path instead of vague claims.`
          },
          {
            kicker: "Decision",
            heading: "How to compare honestly and still move toward action",
            body: `${primary.name} and ${secondary?.name ?? primary.name} act as the technical bridge in this comparison. The reader should be able to finish this guide, then move directly into the ${region.shortName} page, device guides, and pricing.`
          }
        ],
    faqs: french
      ? [
          {
            question: `Pourquoi comparer IPTV a ${blueprint.compareTarget} ?`,
            answer: `Parce que ${blueprint.compareTarget} est deja un repere pour beaucoup de visiteurs ${region.shortName}, et le comparatif rend la decision plus concrete.`
          },
          {
            question: "Ce type de page doit-il pointer vers les appareils ?",
            answer: `Oui, car la comparaison devient plus credible quand elle debouche sur ${primary.name}, ${secondary?.name ?? primary.name} et un chemin technique clair.`
          },
          {
            question: "Ou doit aller le visiteur ensuite ?",
            answer: `Vers la page ${region.shortName}, les guides appareil et la section tarifs, selon son niveau de confiance.`
          }
        ]
      : [
          {
            question: `Why compare IPTV with ${blueprint.compareTarget}?`,
            answer: `${blueprint.compareTarget} is already a known reference for many ${region.shortName} buyers, so the comparison makes the decision more concrete.`
          },
          {
            question: "Should this kind of article link into device pages?",
            answer: `Yes. The comparison becomes more believable when it points into ${primary.name}, ${secondary?.name ?? primary.name}, and a real technical path.`
          },
          {
            question: "Where should the reader go next?",
            answer: `Toward the ${region.shortName} page, regional device guides, and pricing depending on how ready they are to act.`
          }
        ]
  };
}

function buildProblemGuide(region, blueprint) {
  const french = isFrenchRegion(region);
  const devices = devicesFor(blueprint.deviceSlugs);
  const [primary, secondary] = devices;
  const provider = region.providerFocus?.[0] ?? region.coverageSummary;

  return {
    region: region.slug,
    slug: blueprint.slug,
    title: blueprint.title,
    keyword: blueprint.keyword,
    description: french
      ? `Guide de depannage ${region.shortName} pour ${blueprint.problemName}, avec checklist, appareils relies et sortie directe vers support ou tarifs.`
      : `${blueprint.title} troubleshooting guide for ${region.name}, with a practical checklist, linked device pages, and a direct route into support or pricing.`,
    intro: french
      ? `${blueprint.problemName} sont parmi les requetes qui convertissent le plus vite quand la page apporte une solution claire. Le visiteur veut comprendre la cause, verifier son appareil, puis savoir s'il doit aller vers la page ${region.shortName}, les tarifs ou le support.`
      : `${blueprint.problemName} often convert quickly when the page gives a clear answer. The buyer wants to understand the cause, check the device path, and know whether the next click should be the ${region.shortName} page, pricing, or support.`,
    category: blueprint.kind,
    categoryLabel: categoryLabel(region, blueprint.kind),
    categoryDescription: categoryDescription(region, blueprint.kind),
    deviceSlugs: blueprint.deviceSlugs,
    sections: french
      ? [
          {
            kicker: "Cause",
            heading: "Commencer par la cause la plus probable",
            body: `Dans ${region.name}, beaucoup de visiteurs accusent l'offre trop vite alors que le blocage vient souvent du player, du reseau ou d'un mauvais ordre de test. Il faut d'abord isoler le probleme autour de ${provider} et du device principal.`
          },
          {
            kicker: "Checklist",
            heading: "Checklist courte avant de demander de l'aide",
            body: `${primary.name} puis ${secondary?.name ?? primary.name} servent ici de references pratiques. L'objectif est d'eliminer les causes frequentes avant de basculer vers le support.`,
            bullets: [
              `Verifier l'appareil principal: ${primary.name}.`,
              `Tester ensuite ${secondary?.name ?? primary.name} si un deuxieme device est disponible.`,
              "Garder un lien visible vers support et tarifs pour ne pas casser l'intention d'achat."
            ]
          },
          {
            kicker: "Sortie",
            heading: "Quand renvoyer vers support, appareils ou page regionale",
            body: `Si la checklist ne suffit pas, la page doit renvoyer vers le guide ${primary.name}, la page ${region.shortName} et le support. C'est ce maillage qui transforme une requete probleme en lead reel.`
          }
        ]
      : [
          {
            kicker: "Cause",
            heading: "Start with the most likely cause",
            body: `Across ${region.name}, many buyers blame the offer too early when the issue often comes from the player, the network path, or a poor testing order. The first step is to isolate the problem around ${provider} and the main device.`
          },
          {
            kicker: "Checklist",
            heading: "A short checklist before you contact support",
            body: `${primary.name} and ${secondary?.name ?? primary.name} act as the practical references here. The goal is to eliminate the common causes before escalating into support.`,
            bullets: [
              `Check the primary device first: ${primary.name}.`,
              `Test ${secondary?.name ?? primary.name} next if a second screen is available.`,
              "Keep support and pricing visible so troubleshooting does not break the buying path."
            ]
          },
          {
            kicker: "Exit path",
            heading: "When to route the reader into support, devices, or the regional page",
            body: `If the checklist does not solve it, the page should send the reader toward the ${primary.name} guide, the ${region.shortName} page, and support. That linking logic is what turns a problem query into real conversion intent.`
          }
        ],
    faqs: french
      ? [
          {
            question: `Quel appareil verifier d'abord pour ${blueprint.problemName} ?`,
            answer: `${primary.name} doit etre teste en premier, puis ${secondary?.name ?? primary.name} si un second appareil est disponible.`
          },
          {
            question: "Quand faut-il contacter le support ?",
            answer: "Quand la checklist de base n'a rien change ou quand le visiteur veut confirmer le bon player avant de commander."
          },
          {
            question: "Pourquoi relier un guide de probleme aux tarifs ?",
            answer: "Parce qu'un visiteur rassure sur la stabilite ou le device peut redevenir tres proche de la conversion."
          }
        ]
      : [
          {
            question: `Which device should be checked first for ${blueprint.problemName}?`,
            answer: `${primary.name} should be tested first, then ${secondary?.name ?? primary.name} if a second device is available.`
          },
          {
            question: "When should the buyer contact support?",
            answer: "When the basic checklist changes nothing or when they want the cleanest player advice before they subscribe."
          },
          {
            question: "Why link a problem-solving guide into pricing?",
            answer: "Because a buyer who regains confidence in stability or device fit can quickly return to purchase intent."
          }
        ]
  };
}

function buildGuide(region, blueprint) {
  switch (blueprint.kind) {
    case "high-intent":
      return buildHighIntentGuide(region, blueprint);
    case "event-based":
      return buildEventGuide(region, blueprint);
    case "comparison":
      return buildComparisonGuide(region, blueprint);
    case "problem-solving":
      return buildProblemGuide(region, blueprint);
    default:
      return null;
  }
}

export const guideCatalog = Object.entries(regionGuideBlueprints).flatMap(([regionSlug, blueprints]) => {
  const region = regionFor(regionSlug);
  return blueprints.map((blueprint) => buildGuide(region, blueprint)).filter(Boolean);
});

export function getGuidesByRegion(regionSlug) {
  return guideCatalog.filter((post) => post.region === regionSlug);
}

export function getGuidePost(regionSlug, slug) {
  return guideCatalog.find((post) => post.region === regionSlug && post.slug === slug);
}

export function getGuidesGroupedByCategory(regionSlug) {
  return guideCategories.map((category) => ({
    ...category,
    posts: getGuidesByRegion(regionSlug).filter((post) => post.category === category.slug)
  }));
}
