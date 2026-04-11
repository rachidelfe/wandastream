import { regionCatalog } from "@/lib/market-data";
import { siteConfig } from "@/lib/site";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

function imageObject(image) {
  const url = image.startsWith("http") ? image : absoluteUrl(image);
  return {
    url,
    width: 1440,
    height: 820,
    alt: siteConfig.name
  };
}

export function getRootLanguageAlternates() {
  const languages = {
    "x-default": "/"
  };

  for (const region of regionCatalog) {
    languages[region.locale] = `/${region.slug}`;
  }

  return languages;
}

export function getRegionLanguageAlternates(region, suffix = "") {
  return {
    [region.locale]: `/${region.slug}${suffix}`,
    "x-default": "/"
  };
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  locale = "en_US",
  alternates = { "x-default": "/" },
  images = ["/hero.webp"]
}) {
  const mergedKeywords = [...siteConfig.keywords, ...keywords];
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: path,
      languages: alternates
    },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      type: "website",
      locale,
      images: images.map(imageObject)
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images.map((image) => (image.startsWith("http") ? image : absoluteUrl(image)))
    }
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function buildFaqSchema(faqItems) {
  return {
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
}

export function buildHowToSchema({ name, description, path, steps }) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: absoluteUrl(path),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step
    }))
  };
}
