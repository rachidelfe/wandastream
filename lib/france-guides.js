import { deviceCatalog } from "@/lib/france-data";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const guideCategories = [
  {
    slug: "high-intent",
    label: "Installation et choix",
    description: "Des guides simples pour choisir un appareil, une application et la bonne formule."
  },
  {
    slug: "events",
    label: "Sport en direct",
    description: "Des guides utiles pour regarder le sport, les grands matchs et les événements du moment."
  },
  {
    slug: "comparison",
    label: "Choisir son offre",
    description: "Des pages pour comparer, comprendre l'offre et avancer plus sereinement."
  },
  {
    slug: "fix-issues",
    label: "Aide et stabilité",
    description: "Des conseils simples si l'installation bloque ou si l'image n'est pas fluide."
  }
];

const deviceMap = Object.fromEntries(deviceCatalog.map((device) => [device.slug, device]));

const guideBlueprints = [
  {
    slug: "comment-regarder-ligue-des-champions-france-sans-cable",
    title: "Regarder la Ligue des Champions en France sur Smart TV ou Firestick",
    keyword: "ligue des champions france smart tv firestick",
    category: "events",
    deviceSlugs: ["smart-tv", "firestick"],
    intro:
      "Si vous cherchez surtout une solution simple pour regarder le match sur votre TV, le plus important est de choisir le bon appareil et d'installer l'application adaptée."
  },
  {
    slug: "comment-regarder-nfl-france-firestick-smart-tv",
    title: "Regarder la NFL en France sur Firestick ou Smart TV",
    keyword: "nfl france firestick smart tv",
    category: "events",
    deviceSlugs: ["firestick", "smart-tv"],
    intro:
      "Pour la NFL, le plus simple est de préparer votre appareil à l'avance afin de retrouver rapidement le direct, les chaînes sportives et les rediffusions."
  },
  {
    slug: "ou-regarder-ufc-direct-france",
    title: "Où regarder l'UFC en direct en France",
    keyword: "ufc direct france smart tv firestick",
    category: "events",
    deviceSlugs: ["firestick", "android-tv"],
    intro:
      "Avant l'événement, mieux vaut choisir un appareil facile à utiliser et vérifier l'application recommandée pour éviter toute perte de temps."
  },
  {
    slug: "meilleure-facon-regarder-hbo-france-haute-qualite",
    title: "Regarder films et séries HBO en bonne qualité en France",
    keyword: "films series hbo france smart tv",
    category: "high-intent",
    deviceSlugs: ["smart-tv", "firestick"],
    intro:
      "Si vous cherchez surtout des films et des séries sur votre TV, le plus utile est de choisir un appareil simple et une installation rapide."
  },
  {
    slug: "meilleures-applications-iptv-france",
    title: "Quelles applications choisir sur Smart TV, Firestick ou Android TV",
    keyword: "applications iptv france smart tv firestick android tv",
    category: "high-intent",
    deviceSlugs: ["firestick", "android-tv"],
    intro:
      "Le choix de l'application change surtout la simplicité d'installation et le confort d'utilisation au quotidien."
  },
  {
    slug: "iptv-vs-canal-plus-france-quelle-solution-choisir",
    title: "Canal+ ou abonnement IPTV : que choisir en France",
    keyword: "canal plus ou abonnement iptv france",
    category: "comparison",
    deviceSlugs: ["smart-tv", "android-tv"],
    intro:
      "Quand on compare les offres, on veut surtout savoir ce qu'on peut regarder, sur quels appareils, et à quel prix."
  },
  {
    slug: "meilleur-iptv-smart-tv-france-installation-rapide-stable",
    title: "Choisir une offre simple pour Smart TV en France",
    keyword: "smart tv france installation simple",
    category: "high-intent",
    deviceSlugs: ["smart-tv", "android-tv"],
    intro:
      "Sur Smart TV, l'objectif est clair : installer l'application rapidement, retrouver les chaînes françaises et commencer sans complication."
  },
  {
    slug: "comment-ameliorer-stabilite-iptv-france",
    title: "Améliorer la stabilité et la qualité d'image",
    keyword: "ameliorer stabilite iptv france",
    category: "fix-issues",
    deviceSlugs: ["smart-tv", "android-tv"],
    intro:
      "Quand l'image coupe ou que la lecture manque de fluidité, quelques vérifications simples suffisent souvent à améliorer la situation."
  },
  {
    slug: "iptv-pour-sport-et-cinema-france",
    title: "Une seule offre pour le sport, le cinéma et les séries",
    keyword: "sport cinema series france smart tv",
    category: "high-intent",
    deviceSlugs: ["smart-tv", "firestick"],
    intro:
      "Si vous voulez réunir chaînes françaises, sport, films et séries dans une seule offre, le plus important est de vérifier la compatibilité avec votre appareil."
  },
  {
    slug: "configuration-iptv-simple-android-tv-france",
    title: "Installation simple sur Android TV en France",
    keyword: "android tv france installation simple",
    category: "fix-issues",
    deviceSlugs: ["android-tv", "firestick"],
    intro:
      "Android TV est un bon choix si vous voulez une installation simple et une application facile à utiliser au quotidien."
  }
];

function getCategory(slug) {
  return guideCategories.find((category) => category.slug === slug);
}

function getDeviceRoute(slug) {
  return `/devices/${deviceMap[slug].routeSlug}`;
}

function buildSections(guide) {
  const devices = guide.deviceSlugs.map((slug) => deviceMap[slug]).filter(Boolean);
  const [primary, secondary] = devices;
  const secondaryName = secondary?.name ?? primary.name;

  if (guide.category === "comparison") {
    return [
      {
        kicker: "En pratique",
        heading: "Ce qu'il faut regarder avant de choisir",
        body: `Le plus utile est de regarder les chaînes proposées, les appareils compatibles et la simplicité d'installation sur ${primary.name} ou ${secondaryName}.`,
        bullets: [
          "Chaînes françaises, sport, films et séries",
          "Compatibilité Smart TV, Firestick ou Android TV",
          "Aide rapide si vous hésitez avant de commander"
        ]
      },
      {
        kicker: "Appareils",
        heading: "Quel appareil convient le mieux",
        body: `${primary.name} convient bien si vous voulez aller vite. ${secondaryName} peut être un meilleur choix si vous voulez une autre façon de regarder à la maison.`
      },
      {
        kicker: "Suite",
        heading: "Comment avancer rapidement",
        body: "Une fois votre besoin confirmé, vous pouvez soit ouvrir les tarifs, soit demander conseil sur WhatsApp pour choisir la bonne durée."
      }
    ];
  }

  if (guide.category === "fix-issues") {
    return [
      {
        kicker: "Vérifications",
        heading: "Les premiers points à contrôler",
        body: `Commencez par vérifier la connexion, l'application utilisée et l'appareil principal, en général ${primary.name} ou ${secondaryName}.`,
        bullets: [
          "Tester une chaîne française et un film",
          "Fermer puis relancer l'application",
          "Essayer si possible sur un second appareil"
        ]
      },
      {
        kicker: "Appareil",
        heading: "L'appareil ou l'application à essayer",
        body: `${primary.name} reste un bon point de départ. ${secondaryName} peut aussi aider à savoir si le souci vient de l'appareil ou simplement de l'application.`
      },
      {
        kicker: "Aide",
        heading: "Quand demander de l'aide",
        body: "Si l'image coupe encore après ces vérifications, le plus simple est de nous écrire sur WhatsApp avec votre appareil et le problème rencontré."
      }
    ];
  }

  if (guide.category === "events") {
    return [
      {
        kicker: "Avant le direct",
        heading: "La solution la plus simple pour regarder le match ou l'événement",
        body: `Pour aller vite, mieux vaut préparer ${primary.name} ou ${secondaryName} avant le début du direct et vérifier que l'application fonctionne bien.`,
        bullets: [
          "Installer l'application en avance",
          "Tester une chaîne avant le coup d'envoi",
          "Prévoir WhatsApp si vous avez besoin d'aide"
        ]
      },
      {
        kicker: "Appareil",
        heading: "Quel appareil choisir",
        body: `${primary.name} est souvent le choix le plus simple pour regarder sur la TV. ${secondaryName} reste une bonne alternative si c'est l'appareil que vous utilisez déjà à la maison.`
      },
      {
        kicker: "Conseil",
        heading: "Le bon réflexe avant de commencer",
        body: "Choisissez l'offre, installez l'application recommandée et testez quelques chaînes avant l'événement pour regarder plus sereinement."
      }
    ];
  }

  return [
    {
      kicker: "Choix simple",
      heading: "Par où commencer",
      body: `Le plus simple est de partir de votre appareil principal, souvent ${primary.name}, puis de voir si ${secondaryName} peut aussi convenir selon votre usage.`,
      bullets: [
        "Choisir l'appareil du salon ou du quotidien",
        "Installer l'application recommandée",
        "Tester chaînes, sport, films et séries"
      ]
    },
    {
      kicker: "Appareil",
      heading: "Quel appareil convient le mieux",
      body: `${primary.name} est un très bon choix pour commencer rapidement. ${secondaryName} peut être préférable si vous cherchez une autre façon de regarder chez vous.`
    },
    {
      kicker: "Contact",
      heading: "Comment avancer sans perdre de temps",
      body: "Si vous voulez une réponse rapide, le plus simple est d'ouvrir les tarifs ou de demander conseil sur WhatsApp avant de commander."
    }
  ];
}

function buildFaqs(guide) {
  const devices = guide.deviceSlugs.map((slug) => deviceMap[slug]).filter(Boolean);
  const [primary, secondary] = devices;
  const secondaryName = secondary?.name ?? primary.name;

  return [
    {
      question: `Quel appareil choisir pour ${guide.title.toLowerCase()} ?`,
      answer: `${primary.name} reste souvent le choix le plus simple. ${secondaryName} convient aussi très bien si c'est déjà l'appareil que vous utilisez à la maison.`
    },
    {
      question: "Est-ce simple à installer ?",
      answer: "Oui. Dans la plupart des cas, il suffit d'installer l'application, d'ajouter vos accès et de tester quelques chaînes."
    },
    {
      question: "Puis-je demander de l'aide avant de commander ?",
      answer: "Oui, vous pouvez écrire sur WhatsApp pour vérifier votre appareil, l'application conseillée et la formule la plus adaptée."
    }
  ];
}

export const guideCatalog = guideBlueprints.map((guide) => {
  const category = getCategory(guide.category);

  return {
    ...guide,
    categoryLabel: category.label,
    categoryDescription: category.description,
    description: `${guide.title}. Guide simple pour choisir un appareil, installer l'application et commencer rapidement en France.`,
    sections: buildSections(guide),
    faqs: buildFaqs(guide)
  };
});

export function getGuidePost(slug) {
  return guideCatalog.find((post) => post.slug === slug);
}

export function getGuidesGroupedByCategory() {
  return guideCategories.map((category) => ({
    ...category,
    posts: guideCatalog.filter((post) => post.category === category.slug)
  }));
}

export function getDeviceByRouteSlug(routeSlug) {
  return deviceCatalog.find((device) => device.routeSlug === routeSlug);
}

export function getGuidesForDevice(deviceSlug) {
  return guideCatalog.filter((guide) => guide.deviceSlugs.includes(deviceSlug)).slice(0, 4);
}

export function getDeviceLinks(deviceSlugs) {
  return deviceSlugs.map((slug) => ({
    ...deviceMap[slug],
    href: getDeviceRoute(slug)
  }));
}

export function getPricingHref() {
  return "/pricing";
}

export function getContactHref() {
  return createWhatsAppLink();
}
