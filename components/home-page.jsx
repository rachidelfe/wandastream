import { LandingTemplate } from "@/components/landing-template";
import {
  bentoCards,
  deviceBadges,
  faqItems,
  featureCards,
  heroDevices,
  heroSignals,
  trustItems,
  whatsappLink
} from "@/components/site-data";
import { useCaseCards } from "@/lib/france-data";

function franceContent() {
  return {
    hero: {
      title: "IPTV France simple pour chaînes, sport, films et séries en HD / 4K.",
      intro:
        "Regardez TF1, M6, Canal+, beIN Sports, des films et des séries sur Smart TV, Firestick, Android TV, iPhone, Android, PC et Mac. Activation rapide et aide sur WhatsApp.",
      devices: heroDevices,
      signals: heroSignals
    },
    benefits: {
      eyebrow: "Avantages",
      title: "Tout ce qu'il faut pour regarder simplement.",
      text: "Des chaînes françaises, du sport, des films et des séries, avec une installation claire et une aide rapide si besoin.",
      cards: bentoCards
    },
    platforms: {
      eyebrow: "Contenu",
      title: "Quelques univers souvent recherchés en France.",
      text: "Sport, cinéma, séries et grandes chaînes françaises, dans une offre pensée pour le quotidien."
    },
    trust: {
      items: trustItems
    },
    authority: null,
    library: {
      eyebrow: "Films & séries",
      title: "Des films, des séries et les grands rendez-vous du sport au même endroit.",
      text: "Le but est simple : retrouver vite ce que vous aimez regarder, sur la TV du salon comme sur mobile."
    },
    comparison: null,
    stats: null,
    useCases: {
      header: {
        eyebrow: "Pour qui",
        title: "Une offre pensée pour le salon, le sport et le quotidien.",
        text: "Que vous regardiez surtout les matchs, les chaînes françaises ou les films du soir, l'essentiel reste facile à comprendre."
      },
      items: useCaseCards
    },
    reliability: {
      header: {
        eyebrow: "Pourquoi choisir WandaStream",
        title: "Les points qui comptent vraiment avant de commencer.",
        text: "Compatibilité, qualité d'image, aide rapide et installation simple, sans jargon inutile."
      },
      cards: featureCards
    },
    devices: {
      header: {
        eyebrow: "Appareils",
        title: "Compatible avec les appareils du quotidien.",
        text: "Smart TV Samsung et LG, Android Box, Firestick, iPhone, Android, Apple TV, PC et Mac."
      },
      badges: deviceBadges
    },
    faq: {
      header: {
        eyebrow: "FAQ",
        title: "Les réponses utiles avant de choisir votre abonnement IPTV.",
        text: "Chaînes, appareils, qualité d'image, installation et aide : tout est résumé simplement."
      },
      updateBadge: "Mise à jour : Avril 2026",
      items: faqItems
    },
    contact: {
      eyebrow: "Contact",
      title: "Besoin d'aide pour choisir l'offre ou vérifier votre appareil ?",
      text: "Parlez-nous de votre Smart TV, Firestick, Android TV, iPhone ou PC. Nous vous aidons à commencer rapidement."
    },
    explorer: {
      title: "Aller directement à l'essentiel",
      links: [
        {
          href: "/guides",
          title: "Guides",
          text: "Installation simple et conseils utiles"
        },
        {
          href: "/devices",
          title: "Appareils",
          text: "Smart TV, Firestick, Android TV et plus"
        },
        {
          href: "/#pricing",
          title: "Tarifs",
          text: "1 mois, 3 mois, 6 mois ou annuel"
        },
        {
          href: "/#contact",
          title: "Contact",
          text: "WhatsApp ou formulaire pour aller vite"
        }
      ]
    },
    footer: {
      text: "IPTV France avec chaînes françaises, sport, films et séries. Activation rapide et aide sur WhatsApp.",
      note:
        "Support disponible, installation simple et compatibilité Smart TV, Firestick, Android TV, iPhone, Android, PC et Mac. Abonnement IPTV pensé pour la France, avec qualité HD / 4K selon la chaîne."
    }
  };
}

export function HomePage() {
  return <LandingTemplate content={franceContent()} contactHref={whatsappLink} />;
}
