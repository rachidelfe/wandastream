import {
  BoltIcon,
  GlobeIcon,
  PhoneIcon,
  PlayIcon,
  ShieldIcon,
  SparkIcon,
  SupportIcon,
  TvIcon
} from "@/components/icons";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Avantages", href: "#benefits" },
  { label: "Films & séries", href: "#library" },
  { label: "Tarifs", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export const heroDevices = [
  { label: "Smart TV", icon: TvIcon },
  { label: "Firestick", icon: TvIcon },
  { label: "Android TV", icon: TvIcon },
  { label: "iPhone", icon: PhoneIcon }
];

export const trustItems = [
  { value: "TF1 à Canal+", label: "chaînes françaises et sport" },
  { value: "HD / 4K", label: "selon la chaîne et l'appareil" },
  { value: "Smart TV", label: "Samsung, LG, Android TV, Firestick" },
  { value: "7j/7", label: "aide simple sur WhatsApp" },
  { value: "Rapide", label: "mise en route sans détour" }
];

export const bentoCards = [
  {
    title: "Chaînes françaises et sport en direct",
    text: "Retrouvez TF1, France 2, M6, Canal+, beIN Sports et d'autres chaînes dans une offre claire.",
    icon: PlayIcon,
    className: "is-large"
  },
  {
    title: "Films et séries à regarder quand vous voulez",
    text: "Passez du direct aux films, aux séries et aux programmes famille sans changer d'application.",
    icon: SparkIcon,
    className: "is-tall"
  },
  {
    title: "Compatible avec les appareils les plus utilisés",
    text: "Smart TV Samsung et LG, Firestick, Android TV, iPhone, Android, PC et Mac.",
    icon: TvIcon,
    className: "is-wide"
  },
  {
    title: "Activation rapide avec aide sur WhatsApp",
    text: "On vous aide à choisir l'offre et l'application adaptée à votre appareil avant de commencer.",
    icon: SupportIcon
  }
];

export const logoItems = [
  {
    name: "Netflix",
    alt: "Logo Netflix",
    src: "/brands/iptv-france-netflix-wordmark.svg",
    width: 164,
    height: 40
  },
  {
    name: "beIN SPORTS",
    alt: "Logo beIN Sports",
    src: "/brands/iptv-france-bein-sports-wordmark.svg",
    width: 182,
    height: 42
  },
  {
    name: "Disney+",
    alt: "Logo Disney Plus",
    src: "/brands/iptv-france-disney-plus-wordmark.svg",
    width: 170,
    height: 42
  },
  {
    name: "HBO Max",
    alt: "Logo HBO Max",
    src: "/brands/iptv-france-hbo-max-wordmark.svg",
    width: 178,
    height: 40
  },
  {
    name: "Prime Video",
    alt: "Logo Prime Video",
    src: "/brands/iptv-france-prime-video-wordmark.svg",
    width: 188,
    height: 42
  },
  {
    name: "ESPN",
    alt: "Logo ESPN",
    src: "/brands/iptv-france-espn-wordmark.svg",
    width: 144,
    height: 40
  },
  {
    name: "Canal+",
    alt: "Logo Canal Plus",
    src: "/brands/iptv-france-canal-plus-wordmark.svg",
    width: 154,
    height: 40
  },
  {
    name: "DAZN",
    alt: "Logo DAZN",
    src: "/brands/iptv-france-dazn-wordmark.svg",
    width: 138,
    height: 40
  }
];

export const posters = [
  {
    title: "Soirée Ligue des Champions",
    meta: "Sport",
    image: "/assets/img/portfolio/iptv-france-abonnement-iptv-subscription-sport-direct.webp"
  },
  {
    title: "Grandes sorties cinéma",
    meta: "Films",
    image: "/assets/img/portfolio/iptv-france-abonnement-iptv-subscription-sport-films.webp"
  },
  {
    title: "Séries à suivre",
    meta: "Séries",
    image: "/assets/img/portfolio/iptv-france-abonnement-iptv-subscription-sport-series.webp"
  },
  {
    title: "Programme famille",
    meta: "Famille",
    image: "/assets/img/portfolio/iptv-france-abonnement-iptv-subscription-sport-famille.webp"
  },
  {
    title: "Blockbusters du week-end",
    meta: "4K",
    image: "/assets/img/portfolio/iptv-france-abonnement-iptv-subscription-sport-4k.webp"
  },
  {
    title: "Documentaires et découvertes",
    meta: "À la demande",
    image: "/assets/img/portfolio/iptv-france-abonnement-iptv-subscription-sport-vod.webp"
  }
];

export const statistics = [
  { value: 5, label: "familles d'appareils" },
  { value: 4, label: "durées d'abonnement" },
  { value: 7, label: "jours sur 7" },
  { value: 1, label: "WhatsApp pour aller vite" }
];

export const plans = [
  {
    title: "Test",
    duration: "1 mois",
    price: "12,99 €",
    paymentLabel: "Paiement unique",
    popular: false,
    sku: "WS-TEST-1M",
    availability: "InStock",
    priceValidUntil: "2026-12-31",
    hasMerchantReturnPolicy: {
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 7,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn"
    },
    cta: "Choisir cette offre",
    summary: "Pour essayer sans engagement.",
    features: [
      "Chaînes françaises, sport et divertissement",
      "Films et séries à la demande",
      "Qualité HD selon la chaîne",
      "Compatible Smart TV, Firestick et Android TV",
      "Support WhatsApp 7j/7"
    ]
  },
  {
    title: "Découverte",
    duration: "3 mois",
    price: "22,99 €",
    paymentLabel: "Paiement unique",
    popular: false,
    sku: "WS-DECOUVERTE-3M",
    availability: "InStock",
    priceValidUntil: "2026-12-31",
    hasMerchantReturnPolicy: {
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 7,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn"
    },
    cta: "Choisir cette offre",
    summary: "Pour commencer simplement.",
    features: [
      "Chaînes françaises, sport et divertissement",
      "Films et séries à la demande",
      "Qualité HD / 4K selon la chaîne",
      "Compatible Smart TV, Firestick et Android TV",
      "Support WhatsApp 7j/7"
    ]
  },
  {
    title: "Confort",
    duration: "6 mois",
    price: "34,99 €",
    paymentLabel: "Paiement unique",
    popular: true,
    badge: "Le plus choisi",
    sku: "WS-CONFORT-6M",
    availability: "InStock",
    priceValidUntil: "2026-12-31",
    hasMerchantReturnPolicy: {
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 7,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn"
    },
    cta: "Choisir cette offre",
    summary: "Le bon équilibre pour plusieurs mois.",
    features: [
      "Chaînes françaises, sport et films",
      "Séries et programmes à la demande",
      "Qualité HD / 4K selon la chaîne",
      "Compatible Smart TV, Firestick, Android TV, iPhone et PC",
      "Support WhatsApp 7j/7"
    ]
  },
  {
    title: "Premium",
    duration: "Annuel",
    price: "44,99 €",
    paymentLabel: "Paiement unique",
    popular: false,
    sku: "WS-PREMIUM-12M",
    availability: "InStock",
    priceValidUntil: "2026-12-31",
    hasMerchantReturnPolicy: {
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 7,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn"
    },
    cta: "Choisir cette offre",
    summary: "Le meilleur prix sur l'année.",
    features: [
      "Chaînes françaises, sport, films et séries",
      "Qualité HD / 4K selon la chaîne",
      "Compatible Smart TV, Samsung, LG, Firestick, Android TV, iPhone et PC",
      "Installation simple avec aide avant activation",
      "Support WhatsApp 7j/7"
    ]
  }
];

export const featureCards = [
  {
    title: "Activation rapide",
    text: "Vous recevez vos accès rapidement pour commencer sans attendre.",
    icon: BoltIcon
  },
  {
    title: "Support 7j/7",
    text: "Une réponse simple sur WhatsApp avant l'achat comme après l'installation.",
    icon: SupportIcon
  },
  {
    title: "Multi-appareils",
    text: "Smart TV, Firestick, Android TV, iPhone, Android, PC et Mac.",
    icon: TvIcon
  },
  {
    title: "Qualité HD / 4K",
    text: "Une image propre selon la chaîne, votre appareil et votre connexion.",
    icon: SparkIcon
  },
  {
    title: "Installation simple",
    text: "Nous vous indiquons l'application à utiliser et les étapes à suivre.",
    icon: ShieldIcon
  },
  {
    title: "Chaînes, sport, films et séries",
    text: "Une offre pensée pour regarder facilement dans le salon ou sur mobile.",
    icon: GlobeIcon
  }
];

export const deviceBadges = [
  "Smart TV Samsung",
  "Smart TV LG",
  "Android Box",
  "Android TV",
  "Firestick",
  "Apple TV",
  "iPhone / iPad",
  "Android",
  "PC / Mac"
];

export const faqItems = [
  {
    question: "Quelles chaînes peut-on regarder ?",
    answer:
      "Vous retrouvez les chaînes françaises les plus recherchées comme TF1, France 2, M6, Canal+, ainsi que du sport, des films et des séries."
  },
  {
    question: "Est-ce que cela fonctionne sur Smart TV et Firestick ?",
    answer:
      "Oui. L'abonnement fonctionne sur Smart TV Samsung et LG, Firestick, Android TV, Apple TV, iPhone, Android, PC et Mac."
  },
  {
    question: "Combien de temps faut-il pour commencer ?",
    answer:
      "En général, tout va vite. Une fois vos accès reçus, l'installation prend seulement quelques minutes sur la plupart des appareils."
  },
  {
    question: "Est-ce difficile à installer ?",
    answer:
      "Non. Nous vous guidons avec des étapes simples et nous pouvons vous aider sur WhatsApp si vous avez le moindre doute."
  },
  {
    question: "Quelle qualité d'image est proposée ?",
    answer:
      "La qualité dépend de la chaîne, de l'appareil et de votre connexion, avec de nombreuses chaînes disponibles en HD et 4K."
  },
  {
    question: "Que contient l'offre ?",
    answer:
      "Vous avez accès aux chaînes françaises, au sport, aux films et aux séries dans une seule offre, sur plusieurs types d'appareils."
  },
  {
    question: "Puis-je demander conseil avant de commander ?",
    answer:
      "Oui. Vous pouvez nous écrire sur WhatsApp ou via le formulaire pour vérifier votre appareil et choisir la durée la plus adaptée."
  },
  {
    question: "Quelle formule choisir ?",
    answer:
      "La formule 1 mois permet de tester sans engagement, 3 mois pour commencer simplement, 6 mois pour un bon équilibre, et l'annuel pour profiter du prix le plus intéressant sur la durée."
  }
];

export const helpTopics = [
  {
    title: "Installation sur vos appareils",
    text: "Guides simples pour Smart TV, Firestick, Android TV et Apple TV.",
    href: "/devices",
    icon: BoltIcon,
    items: ["Étapes simples", "Applications conseillées", "Aide avant de commencer"]
  },
  {
    title: "Choisir son offre",
    text: "Comparez les durées et trouvez la formule qui vous convient le mieux.",
    href: "/pricing",
    icon: GlobeIcon,
    items: ["1 mois", "3 mois", "6 mois", "Annuel"]
  },
  {
    title: "Aide et stabilité",
    text: "Conseils pratiques si l'image coupe ou si vous hésitez sur l'installation.",
    href: "/guides/comment-ameliorer-stabilite-iptv-france",
    icon: SupportIcon,
    items: ["Qualité d'image", "Connexion", "Support WhatsApp"]
  }
];

export const testimonials = [
  {
    name: "Nicolas",
    country: "Lille",
    avatar: "/assets/img/person/iptv-france-person-m-2.webp",
    quote:
      "Installation faite sur Firestick en quelques minutes. J'ai retrouvé les chaînes françaises et le sport sans prise de tête."
  },
  {
    name: "Sonia",
    country: "Lyon",
    avatar: "/assets/img/person/iptv-france-person-f-1.webp",
    quote:
      "J'utilise surtout la Smart TV du salon. L'installation était simple et le support m'a répondu rapidement sur WhatsApp."
  },
  {
    name: "Karim",
    country: "Bruxelles",
    avatar: "/assets/img/person/iptv-france-person-m-4.webp",
    quote:
      "Pratique pour regarder les chaînes françaises, le foot et quelques films sur Android TV et sur téléphone."
  },
  {
    name: "Élodie",
    country: "Marseille",
    avatar: "/assets/img/person/iptv-france-person-f-3.webp",
    quote:
      "Le site est clair, les tarifs sont simples et j'ai pu choisir l'offre adaptée à ma TV sans tourner en rond."
  }
];

export const paymentBadges = ["Carte bancaire", "Visa", "Mastercard", "PayPal", "Support WhatsApp"];

export const heroSignals = [
  { label: "TF1, M6, Canal+", icon: ShieldIcon },
  { label: "HD / 4K", icon: PlayIcon },
  { label: "Activation rapide", icon: SparkIcon }
];

export const whatsappLink = createWhatsAppLink();
