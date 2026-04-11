import { faqItems, plans, testimonials } from "@/components/site-data";
import { regionCatalog } from "@/lib/market-data";
import { siteConfig } from "@/lib/site";

function parsePrice(price) {
  return price.replace(/[^\d.]/g, "");
}

export function StructuredData() {
  const goldPlan = plans.find((plan) => plan.popular) ?? plans[0];
  const featuredReview = testimonials[1] ?? testimonials[0];
  const goldProductName = `${siteConfig.name} Gold - Abonnement IPTV Premium ${goldPlan.duration}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: goldProductName,
    description:
      "Abonnement IPTV Premium 12 mois avec streaming 4K sans coupure, anti-freeze 10.0, replay TV et assistance 24/7.",
    brand: {
      "@type": "Brand",
      name: siteConfig.name
    },
    category: "Abonnement IPTV Premium",
    image: [`${siteConfig.siteUrl}/hero.webp`, `${siteConfig.siteUrl}/pricing-showcase.webp`],
    sku: "VANTASTREAM-GOLD-12M",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.ratingValue,
      reviewCount: siteConfig.reviewCount,
      bestRating: "5",
      worstRating: "1"
    },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.siteUrl}/pricing`,
      price: parsePrice(goldPlan.price),
      priceCurrency: siteConfig.currency,
      availability: "https://schema.org/InStock",
      eligibleRegion: siteConfig.countries.map((country) => ({
        "@type": "Country",
        name: country
      }))
    }
  };

  const subscriptionSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${siteConfig.name} - Abonnement IPTV Premium`,
    serviceType: "Abonnement IPTV Premium",
    description:
      "Service IPTV Premium avec chaines 4K, cinema, sport, activation instantanee, assistance 24/7 et streaming sans coupure.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl
    },
    areaServed: siteConfig.countries.map((country) => ({
      "@type": "Country",
      name: country
    })),
    offers: {
      "@type": "Offer",
      url: `${siteConfig.siteUrl}/pricing`,
      price: parsePrice(goldPlan.price),
      priceCurrency: siteConfig.currency,
      availability: "https://schema.org/InStock"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: goldProductName,
      brand: {
        "@type": "Brand",
        name: siteConfig.name
      }
    },
    author: {
      "@type": "Person",
      name: featuredReview.name
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5"
    },
    reviewBody: featuredReview.quote
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description
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

  const areaServedSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "VantaStream regional landing pages",
    itemListElement: regionCatalog.map((region, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${region.shortName} IPTV`,
      url: `${siteConfig.siteUrl}/${region.slug}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subscriptionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaServedSchema) }}
      />
    </>
  );
}
