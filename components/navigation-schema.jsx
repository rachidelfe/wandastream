"use client";

import { siteConfig } from "@/lib/site";

export function NavigationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SiteNavigationElement",
        name: "Guides IPTV France",
        url: `${siteConfig.siteUrl}/guides`,
        description: "Guides simples pour installer et utiliser le service"
      },
      {
        "@type": "SiteNavigationElement",
        name: "Appareils compatibles",
        url: `${siteConfig.siteUrl}/devices`,
        description: "Smart TV, Firestick, Android TV et Apple TV"
      },
      {
        "@type": "SiteNavigationElement",
        name: "Tarifs abonnement IPTV",
        url: `${siteConfig.siteUrl}/#pricing`,
        description: "Choisir la durée qui vous convient"
      },
      {
        "@type": "SiteNavigationElement",
        name: "Films et séries",
        url: `${siteConfig.siteUrl}/#library`,
        description: "Films, séries et contenus à la demande"
      },
      {
        "@type": "SiteNavigationElement",
        name: "Contact WhatsApp",
        url: `${siteConfig.siteUrl}/#contact`,
        description: "Poser une question avant de commencer"
      }
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
