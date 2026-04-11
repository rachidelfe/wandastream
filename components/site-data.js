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

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Benefits", href: "#benefits" },
  { label: "Library", href: "#library" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export const heroDevices = [
  { label: "Smart TV", icon: TvIcon },
  { label: "Android", icon: PhoneIcon },
  { label: "iOS", icon: PhoneIcon }
];

export const trustItems = [
  { value: "+7,000", label: "active users" },
  { value: "99.99%", label: "uptime" },
  { value: "<5 min", label: "instant activation" },
  { value: "24/7", label: "support team" }
];

export const bentoCards = [
  {
    title: "4K streaming tuned for prime-time reliability",
    text: "Optimized playback keeps premium sports, movies, and live channels crisp across the busiest viewing windows.",
    icon: SparkIcon,
    className: "is-large"
  },
  {
    title: "24/7 human support",
    text: "Fast setup help, renewals, and troubleshooting handled by a real support workflow.",
    icon: SupportIcon,
    className: "is-small"
  },
  {
    title: "Multi-device access",
    text: "Smart TV, mobile, desktop, MAG, Fire TV, and browser players all covered in one ecosystem.",
    icon: TvIcon,
    className: "is-tall"
  },
  {
    title: "Anti-freeze delivery",
    text: "Stability layers are designed to reduce buffering and protect the viewing experience during peak hours.",
    icon: ShieldIcon,
    className: "is-wide"
  }
];

export const logoItems = [
  {
    name: "Netflix",
    alt: "Netflix wordmark",
    src: "/brands/netflix-wordmark.svg",
    width: 164,
    height: 40
  },
  {
    name: "beIN SPORTS",
    alt: "beIN Sports wordmark",
    src: "/brands/bein-sports-wordmark.svg",
    width: 182,
    height: 42
  },
  {
    name: "Disney+",
    alt: "Disney Plus wordmark",
    src: "/brands/disney-plus-wordmark.svg",
    width: 170,
    height: 42
  },
  {
    name: "HBO Max",
    alt: "HBO Max wordmark",
    src: "/brands/hbo-max-wordmark.svg",
    width: 178,
    height: 40
  },
  {
    name: "Prime Video",
    alt: "Prime Video wordmark",
    src: "/brands/prime-video-wordmark.svg",
    width: 188,
    height: 42
  },
  {
    name: "ESPN",
    alt: "ESPN wordmark",
    src: "/brands/espn-wordmark.svg",
    width: 144,
    height: 40
  },
  {
    name: "Canal+",
    alt: "Canal Plus wordmark",
    src: "/brands/canal-plus-wordmark.svg",
    width: 154,
    height: 40
  },
  {
    name: "DAZN",
    alt: "DAZN wordmark",
    src: "/brands/dazn-wordmark.svg",
    width: 138,
    height: 40
  }
];

export const posters = [
  {
    title: "Match Night Live",
    meta: "Sports",
    image: "/assets/img/portfolio/portfolio-2.webp"
  },
  {
    title: "Cinema Premieres",
    meta: "Movies",
    image: "/assets/img/portfolio/portfolio-4.webp"
  },
  {
    title: "Top Crime Series",
    meta: "Series",
    image: "/assets/img/portfolio/portfolio-5.webp"
  },
  {
    title: "Kids & Family",
    meta: "Family",
    image: "/assets/img/portfolio/portfolio-6.webp"
  },
  {
    title: "Weekend Blockbusters",
    meta: "4K",
    image: "/assets/img/portfolio/portfolio-7.webp"
  },
  {
    title: "Documentary Picks",
    meta: "On-demand",
    image: "/assets/img/portfolio/portfolio-10.webp"
  }
];

export const statistics = [
  { value: 40000, label: "channels worldwide" },
  { value: 7000, label: "active clients" },
  { value: 1500, label: "sports channels" },
  { value: 50000, label: "movies & series" }
];

export const plans = [
  {
    title: "Bronze",
    duration: "3 mois",
    oldPrice: "39.99€",
    price: "22.99€",
    discount: "-43%",
    paymentLabel: "Paiement unique",
    popular: false,
    cta: "Commander Maintenant",
    features: [
      "+22 000 chaînes",
      "+60 000 films et séries",
      "Qualité 4K/HD/SD",
      "Compatibilité IPTV Smarters",
      "Mises à jour gratuites",
      "Netflix, Apple et plus",
      "AntiFreeze 10.0",
      "TV en Replay",
      "Assistance 24/7"
    ]
  },
  {
    title: "Silver",
    duration: "6 mois",
    oldPrice: "54.99€",
    price: "34.99€",
    discount: "-36%",
    paymentLabel: "Paiement unique",
    popular: false,
    cta: "Commander Maintenant",
    features: [
      "+22 000 chaînes",
      "+100 000 films et séries",
      "Qualité SD/HD/4K",
      "Compatibilité totale",
      "Mises à jour gratuites",
      "Netflix, Disney, Apple et plus",
      "AntiFreeze 10.0",
      "TV en Replay",
      "Assistance 24/7"
    ]
  },
  {
    title: "Gold",
    duration: "12 mois",
    oldPrice: "64.99€",
    price: "44.99€",
    discount: "-31%",
    paymentLabel: "Paiement unique",
    popular: true,
    badge: "Le Plus Populaire",
    cta: "Commander Maintenant",
    features: [
      "+22 000 chaînes",
      "+160 000 films et séries",
      "Qualité SD/HD/4K/8K",
      "Compatibilité totale",
      "Mises à jour gratuites",
      "Netflix, Disney, Apple et plus",
      "AntiFreeze 10.0",
      "TV en Replay",
      "Assistance 24/7"
    ]
  },
  {
    title: "Diamond",
    duration: "24 mois",
    oldPrice: "89.99€",
    price: "74.99€",
    discount: "-17%",
    paymentLabel: "Paiement unique",
    popular: false,
    cta: "Commander Maintenant",
    features: [
      "+22 000 chaînes",
      "+160 000 films et séries",
      "Qualité SD/HD/4K/8K",
      "Compatibilité totale",
      "Mises à jour gratuites",
      "Netflix, Disney, Apple et plus",
      "AntiFreeze 10.0",
      "TV en Replay",
      "Assistance VIP 24/7"
    ]
  }
];

export const featureCards = [
  {
    title: "99.99% uptime with anti-freeze technology",
    text: "Built for stable evenings, match days, and peak-hour streaming without the frustrating drop-offs common on low-end services.",
    icon: ShieldIcon
  },
  {
    title: "4K / Full HD quality with zero-buffering focus",
    text: "Optimized delivery and balanced streams keep playback sharp and responsive across live TV, sports, and on-demand content.",
    icon: SparkIcon
  },
  {
    title: "Compatible with every major device",
    text: "Watch on Smart TV, Android TV, Fire TV, iPhone, iPad, MAG, Windows, macOS, and browser-based players.",
    icon: TvIcon
  },
  {
    title: "Instant activation and guided setup",
    text: "Most subscriptions are ready within minutes, with simple instructions available for first-time IPTV users.",
    icon: BoltIcon
  },
  {
    title: "Global content, local support experience",
    text: "International channels, regional favorites, and premium sports are paired with responsive help when you need it.",
    icon: GlobeIcon
  },
  {
    title: "24/7 assistance from a real team",
    text: "Questions around installation, playback, or renewals are handled quickly so you can get back to watching.",
    icon: SupportIcon
  }
];

export const deviceBadges = [
  "Android",
  "iPhone / iPad",
  "Android TV",
  "Smart TV",
  "Fire TV Stick",
  "MAG",
  "Apple TV",
  "Windows",
  "macOS",
  "Web Player"
];

export const faqItems = [
  {
    question: "How long does activation take?",
    answer:
      "Most orders are activated in under 5 minutes after payment confirmation. During peak periods, setup can take a little longer, but it is usually completed the same day."
  },
  {
    question: "What is your refund policy?",
    answer:
      "We include a money-back guarantee for eligible cases where the service cannot be activated or configured on a supported device. Trial or short-term plans may have different conditions."
  },
  {
    question: "Which devices are supported?",
    answer:
      "The service works across Smart TVs, Android and iOS devices, Fire TV, MAG boxes, Windows, macOS, and most IPTV player apps that support Xtream Codes or M3U playlists."
  },
  {
    question: "How many connections can I use?",
    answer:
      "That depends on the plan you choose. Entry plans are ideal for a single screen, while selected plans include extra simultaneous connections for home use."
  }
];

export const helpTopics = [
  {
    title: "Setup guide",
    text: "Get online quickly with a clean setup checklist for Fire Stick, Smart TV, mobile devices, and desktop players.",
    href: "/iptv-firestick-setup",
    icon: BoltIcon,
    items: ["Device checklist", "Activation steps", "Recommended apps"]
  },
  {
    title: "Payment",
    text: "Understand plan durations, secure checkout, renewal timing, and what to expect after subscription activation.",
    href: "#pricing",
    icon: GlobeIcon,
    items: ["Plan comparisons", "Secure payment", "Refund guidance"]
  },
  {
    title: "Troubleshooting",
    text: "Resolve buffering, connection drops, or player issues with practical fixes before contacting support.",
    href: "/fix-iptv-buffering",
    icon: SupportIcon,
    items: ["Buffering fixes", "Network tips", "Playback recovery"]
  }
];

export const testimonials = [
  {
    name: "Daniel R.",
    country: "United Kingdom",
    avatar: "/assets/img/person/person-m-2.webp",
    quote:
      "Setup was fast, the interface feels polished, and live sports have been far more stable than the providers I used before."
  },
  {
    name: "Nora B.",
    country: "France",
    avatar: "/assets/img/person/person-f-1.webp",
    quote:
      "The channel selection is massive, but what stood out most was the clean activation process and how quickly support answered."
  },
  {
    name: "Karim A.",
    country: "Morocco",
    avatar: "/assets/img/person/person-m-4.webp",
    quote:
      "I use it across Smart TV and mobile when I travel. Playback quality has been excellent and the service feels trustworthy."
  },
  {
    name: "Melissa T.",
    country: "Canada",
    avatar: "/assets/img/person/person-f-3.webp",
    quote:
      "It finally feels like a premium streaming product instead of a cluttered reseller page. Smooth experience from start to finish."
  }
];

export const paymentBadges = ["Visa", "Mastercard", "PayPal", "Secure checkout", "7-day guarantee"];

export const heroSignals = [
  { label: "Serving customers since 2021", icon: ShieldIcon },
  { label: "4K live sports and cinema", icon: PlayIcon },
  { label: "Stable on every major platform", icon: SparkIcon }
];

export const whatsappLink =
  "https://wa.me/212600000000?text=Hi%2C%20I%20want%20to%20activate%20my%20subscription";
