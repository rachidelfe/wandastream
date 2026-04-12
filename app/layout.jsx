import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { getRootLanguageAlternates } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { assertZeroLeakEnvironment } from "@/lib/dal/env";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export async function generateMetadata() {
  const title = "Best IPTV Service, Regional Setup Guides, and Premium 4K Streaming | WandaStream";

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: title,
      template: "%s | WandaStream"
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: "/",
      languages: getRootLanguageAlternates()
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      title,
      description: siteConfig.description,
      url: siteConfig.siteUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: "/hero.webp",
          width: 1440,
          height: 820,
          alt: "Abonnement IPTV Premium WandaStream avec streaming 4K sans coupure"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: siteConfig.description,
      images: ["/hero.webp"]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}

export default function RootLayout({ children }) {
  assertZeroLeakEnvironment();

  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
