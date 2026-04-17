"use client";

import { faqItems, plans } from "@/components/site-data";
import { siteConfig } from "@/lib/site";

export function StructuredData() {
  const highlightedPlan = plans.find((plan) => plan.popular) ?? plans[0];

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WandaStream",
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/assets/img/iptv-france-wandastream-iptv-logo.svg`,
    description:
      "Abonnement IPTV France avec chaînes françaises, sport, films et séries. Compatible Smart TV, Firestick, Android TV, iPhone et PC.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.supportPhone,
      contactType: "Service client",
      areaServed: "FR",
      availableLanguage: "French"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WandaStream",
    url: siteConfig.siteUrl,
    hasPart: [
      {
        "@type": "WebPage",
        name: "Guides IPTV France",
        url: `${siteConfig.siteUrl}/guides`,
        description: "Guides simples pour l'installation et l'utilisation"
      },
      {
        "@type": "WebPage",
        name: "Appareils compatibles",
        url: `${siteConfig.siteUrl}/devices`,
        description: "Smart TV, Firestick, Android TV et Apple TV"
      },
      {
        "@type": "WebPage",
        name: "Tarifs abonnement IPTV",
        url: `${siteConfig.siteUrl}/#pricing`,
        description: "Choisir la durée la plus adaptée"
      },
      {
        "@type": "WebPage",
        name: "Films et séries",
        url: `${siteConfig.siteUrl}/#library`,
        description: "Films, séries et contenus à la demande"
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `WandaStream ${highlightedPlan.title} - Abonnement IPTV ${highlightedPlan.duration}`,
    image: [`${siteConfig.siteUrl}/iptv-france-hero.webp`],
    description:
      "Abonnement IPTV France avec chaînes françaises, sport, films et séries. Compatible Smart TV, Firestick, Android TV, iPhone et PC.",
    sku: highlightedPlan.sku,
    brand: { "@type": "Brand", name: "WandaStream" },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.siteUrl}/#pricing`,
      price: String(highlightedPlan.price).replace(/\s|€/g, "").replace(",", "."),
      priceCurrency: "EUR",
      priceValidUntil: highlightedPlan.priceValidUntil,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        ...highlightedPlan.hasMerchantReturnPolicy
      }
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Abonnement IPTV France",
    provider: { "@type": "Organization", name: "WandaStream" },
    areaServed: { "@type": "Country", name: "France" },
    serviceType: "Télévision en direct, sport, films et séries",
    termsOfService: `${siteConfig.siteUrl}/terms`
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "WandaStream | IPTV France, sport, films et séries",
    url: siteConfig.siteUrl,
    description:
      "Abonnement IPTV France avec chaînes françaises, sport, films et séries en HD / 4K. Compatible Smart TV, Firestick, Android TV, iPhone et PC.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteConfig.siteUrl
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
    </>
  );
}
