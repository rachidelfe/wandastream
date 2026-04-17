export const franceMarket = {
  slug: "france",
  name: "France",
  shortName: "France",
  locale: "fr-FR",
  ogLocale: "fr_FR",
  languageLabel: "Français",
  currencyCode: "EUR",
  currencyLabel: "EUR (€)",
  city: "Paris",
  secondaryCity: "Lyon",
  heroTitle: "IPTV France simple pour chaînes, sport, films et séries.",
  heroIntro:
    "WandaStream propose une offre claire pour regarder les chaînes françaises, le sport en direct et les contenus à la demande sur les appareils les plus utilisés en France.",
  coverageSummary: "Chaînes françaises, sport, films et séries avec installation simple et aide sur WhatsApp.",
  proofPoints: ["Activation rapide", "Support WhatsApp", "Compatible Smart TV et Firestick"],
  audiences: ["Sport", "Famille", "Films et séries"],
  providerFocus: ["TF1", "M6", "Canal+", "beIN Sports"],
  trustSignals: ["Support disponible", "Installation simple", "Qualité HD / 4K"],
  serverLocation: "Service pensé pour les clients en France et dans les pays francophones.",
  supportBase: "Support disponible sur WhatsApp",
  paymentMethods: ["Carte bancaire", "PayPal"],
  channelHighlights: ["TF1", "France 2", "M6", "Canal+", "beIN Sports", "RMC Sport"],
  complianceNote: "Consultez les conditions et la politique de confidentialité avant de commander.",
  testimonial: {
    name: "Sonia",
    location: "Lyon",
    quote: "J'ai surtout aimé la simplicité. J'ai pu choisir l'offre adaptée à ma TV et commencer rapidement."
  }
};

export const deviceCatalog = [
  {
    id: "firestick",
    slug: "firestick",
    routeSlug: "firestick-france",
    name: "Firestick",
    image: "/devices/iptv-france-firestick-step1.webp",
    setupTime: "5-8 minutes",
    difficulty: "Facile",
    bestFor: "Commencer rapidement sur la TV",
    apps: ["IPTV Smarters", "TiviMate"],
    comparison: "Très simple à installer et pratique pour regarder les chaînes françaises, le sport, les films et les séries dans le salon.",
    steps: [
      {
        title: "Installez l'application",
        description: "Téléchargez l'application recommandée sur votre Firestick depuis la boutique Amazon ou via Downloader si besoin.",
        image: "/devices/iptv-france-firestick-step1.webp"
      },
      {
        title: "Ajoutez vos accès",
        description: "Renseignez les informations reçues après votre commande pour activer le direct et les contenus à la demande.",
        image: "/devices/iptv-france-firestick-step2.webp"
      },
      {
        title: "Vérifiez quelques chaînes",
        description: "Testez TF1, M6, Canal+ ou un match pour confirmer que tout fonctionne correctement.",
        image: "/devices/iptv-france-firestick-step3.webp"
      }
    ]
  },
  {
    id: "smart-tv",
    slug: "smart-tv",
    routeSlug: "smart-tv-france",
    name: "Smart TV",
    image: "/devices/iptv-france-smart-tv-step1.webp",
    setupTime: "6-10 minutes",
    difficulty: "Facile",
    bestFor: "Utiliser uniquement la TV du salon",
    apps: ["IPTV Smarters", "OTT Navigator"],
    comparison: "Le bon choix si vous voulez regarder directement sur votre télévision, sans appareil supplémentaire.",
    steps: [
      {
        title: "Ouvrez le store de la TV",
        description: "Téléchargez l'application recommandée depuis la boutique de votre Smart TV Samsung ou LG.",
        image: "/devices/iptv-france-smart-tv-step1.webp"
      },
      {
        title: "Connectez vos accès",
        description: "Ajoutez les informations reçues après la commande dans l'application.",
        image: "/devices/iptv-france-smart-tv-step2.webp"
      },
      {
        title: "Lancez chaînes et films",
        description: "Vérifiez le direct, un film et une série pour confirmer que tout est prêt.",
        image: "/devices/iptv-france-smart-tv-step3.webp"
      }
    ]
  },
  {
    id: "android-tv",
    slug: "android-tv",
    routeSlug: "android-tv-france",
    name: "Android TV",
    image: "/devices/iptv-france-android-tv-step1.webp",
    setupTime: "6-9 minutes",
    difficulty: "Facile",
    bestFor: "Avoir plus de souplesse dans l'application",
    apps: ["TiviMate", "IPTV Smarters"],
    comparison: "Très pratique si vous aimez Android TV et que vous voulez une application facile à régler au quotidien.",
    steps: [
      {
        title: "Installez l'application",
        description: "Téléchargez TiviMate ou IPTV Smarters depuis Google Play sur votre Android TV.",
        image: "/devices/iptv-france-android-tv-step1.webp"
      },
      {
        title: "Entrez vos accès",
        description: "Ajoutez les informations reçues après la commande et laissez l'application charger vos catégories.",
        image: "/devices/iptv-france-android-tv-step2.webp"
      },
      {
        title: "Réglez l'image si besoin",
        description: "Testez le direct et ajustez simplement la qualité si votre connexion ou votre TV le demande.",
        image: "/devices/iptv-france-android-tv-step3.webp"
      }
    ]
  },
  {
    id: "apple-tv",
    slug: "apple-tv",
    routeSlug: "apple-tv-france",
    name: "Apple TV",
    image: "/devices/iptv-france-apple-tv-step1.webp",
    setupTime: "5-8 minutes",
    difficulty: "Facile",
    bestFor: "Une navigation fluide sur Apple TV",
    apps: ["IPTVX", "Smarters Player"],
    comparison: "Une solution confortable pour les foyers Apple qui veulent regarder facilement sur grand écran.",
    steps: [
      {
        title: "Téléchargez l'application",
        description: "Installez IPTVX ou l'application conseillée depuis l'App Store de votre Apple TV.",
        image: "/devices/iptv-france-apple-tv-step1.webp"
      },
      {
        title: "Ajoutez vos informations",
        description: "Entrez les accès reçus après la commande pour charger les chaînes et la partie films et séries.",
        image: "/devices/iptv-france-apple-tv-step2.webp"
      },
      {
        title: "Vérifiez que tout est prêt",
        description: "Ouvrez une chaîne, un film et une série pour confirmer que la lecture est fluide.",
        image: "/devices/iptv-france-apple-tv-step3.webp"
      }
    ]
  },
  {
    id: "samsung-tizen",
    slug: "samsung-tizen",
    routeSlug: "samsung-tizen-france",
    name: "Samsung Tizen",
    image: "/devices/iptv-france-samsung-tizen-step1.webp",
    setupTime: "6-10 minutes",
    difficulty: "Facile",
    bestFor: "Regarder directement sur une TV Samsung",
    apps: ["IPTV Smarters", "SmartOne IPTV"],
    comparison: "Pratique pour profiter du service sur une Smart TV Samsung sans boîtier externe.",
    steps: [
      {
        title: "Installez l'application",
        description: "Téléchargez l'application recommandée depuis le Samsung Store.",
        image: "/devices/iptv-france-samsung-tizen-step1.webp"
      },
      {
        title: "Ajoutez vos accès",
        description: "Renseignez les informations reçues après la commande pour afficher les chaînes et les contenus à la demande.",
        image: "/devices/iptv-france-samsung-tizen-step2.webp"
      },
      {
        title: "Regardez vos premiers contenus",
        description: "Testez quelques chaînes françaises, puis un film ou une série pour valider l'installation.",
        image: "/devices/iptv-france-samsung-tizen-step3.webp"
      }
    ]
  },
  {
    id: "lg-webos",
    slug: "lg-webos",
    routeSlug: "lg-webos-france",
    name: "LG webOS",
    image: "/devices/iptv-france-lg-webos-step1.webp",
    setupTime: "6-10 minutes",
    difficulty: "Facile",
    bestFor: "Regarder directement sur une TV LG",
    apps: ["IPTV Smarters", "OTT Navigator"],
    comparison: "Un parcours simple pour regarder sur une Smart TV LG, avec une installation accessible et rapide.",
    steps: [
      {
        title: "Téléchargez l'application",
        description: "Installez l'application recommandée depuis la boutique LG webOS.",
        image: "/devices/iptv-france-lg-webos-step1.webp"
      },
      {
        title: "Entrez vos accès",
        description: "Ajoutez les informations reçues après la commande pour charger vos chaînes, films et séries.",
        image: "/devices/iptv-france-lg-webos-step2.webp"
      },
      {
        title: "Testez le direct et la VOD",
        description: "Ouvrez plusieurs contenus pour confirmer que tout fonctionne bien sur votre TV LG.",
        image: "/devices/iptv-france-lg-webos-step3.webp"
      }
    ]
  }
];

export const homepageAuthoritySections = [
  {
    title: "Une offre claire dès la première visite.",
    body: "Le visiteur doit comprendre en quelques secondes qu'il peut regarder les chaînes françaises, le sport, les films et les séries sur ses appareils."
  },
  {
    title: "Des guides utiles pour aller plus vite.",
    body: "Les pages guides et appareils servent surtout à aider le client à installer le service simplement, sans jargon et sans détour."
  },
  {
    title: "Un parcours simple jusqu'au contact ou aux tarifs.",
    body: "L'idée est de garder les tarifs, WhatsApp et les appareils compatibles toujours faciles à trouver."
  }
];

export const deviceComparisonRows = [
  {
    device: "Firestick",
    routeSlug: "firestick-france",
    bestFor: "Commencer rapidement",
    strengths: "Simple à installer et très pratique dans le salon",
    idealFor: "Sport et usage quotidien"
  },
  {
    device: "Smart TV",
    routeSlug: "smart-tv-france",
    bestFor: "Regarder directement sur la TV",
    strengths: "Pas de boîtier externe et usage très simple",
    idealFor: "Famille et télévision principale"
  },
  {
    device: "Android TV",
    routeSlug: "android-tv-france",
    bestFor: "Avoir plus de souplesse",
    strengths: "Applications faciles à régler et lecture confortable",
    idealFor: "Utilisateurs Android TV"
  },
  {
    device: "Apple TV",
    routeSlug: "apple-tv-france",
    bestFor: "Navigation fluide",
    strengths: "Confort quotidien et interface agréable",
    idealFor: "Foyers Apple"
  },
  {
    device: "Samsung Tizen",
    routeSlug: "samsung-tizen-france",
    bestFor: "Téléviseurs Samsung",
    strengths: "Installation directe sur la TV",
    idealFor: "Smart TV Samsung"
  },
  {
    device: "LG webOS",
    routeSlug: "lg-webos-france",
    bestFor: "Téléviseurs LG",
    strengths: "Installation simple et accès rapide au direct",
    idealFor: "Smart TV LG"
  }
];

export const useCaseCards = [
  {
    title: "Sport",
    text: "Pour regarder les grands matchs, le football, les soirées Champions League et les chaînes sportives sans complication."
  },
  {
    title: "Famille",
    text: "Pour retrouver les chaînes françaises, les programmes du quotidien, les films et les séries sur la TV du salon."
  },
  {
    title: "Films et séries",
    text: "Pour passer facilement du direct aux films, aux séries et aux contenus à la demande sur Smart TV, Firestick ou mobile."
  }
];
