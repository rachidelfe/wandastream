import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { NavigationSchema } from "@/components/navigation-schema";
import { siteConfig } from "@/lib/site";
import { assertZeroLeakEnvironment } from "@/lib/dal/env";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "WandaStream | IPTV France, sport, films et séries en HD / 4K",
    template: "%s | WandaStream"
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "WandaStream" }],
  creator: "WandaStream",
  publisher: "WandaStream",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/", languages: { "fr-FR": "https://www.wandastream.com/" } },
  icons: {
    icon: [
      { url: "/assets/img/iptv-france-wandastream-fabicon.svg", type: "image/svg+xml" },
      { url: "/assets/img/iptv-france-wandastream-fabicon.png", type: "image/png", sizes: "512x512" }
    ],
    shortcut: ["/assets/img/iptv-france-wandastream-fabicon.png"],
    apple: [{ url: "/assets/img/iptv-france-wandastream-fabicon.png" }]
  },
  openGraph: {
    title: "WandaStream | IPTV France, sport, films et séries",
    description:
      "Abonnement IPTV France avec chaînes françaises, sport, films et séries en HD / 4K. Compatible Smart TV, Firestick, Android TV, iPhone et PC.",
    url: siteConfig.siteUrl,
    siteName: "WandaStream",
    images: [{ url: "/iptv-france-hero.webp", width: 1200, height: 630, alt: "WandaStream IPTV France sur Smart TV" }],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "WandaStream | IPTV France, sport, films et séries",
    description:
      "Chaînes françaises, sport, films et séries en HD / 4K. Compatible Smart TV, Firestick, Android TV, iPhone et PC.",
    images: ["/iptv-france-hero.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  category: "technology",
  classification: "Internet Television, Streaming Media"
};

export default function RootLayout({ children }) {
  assertZeroLeakEnvironment();

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://checkout.stripe.com" />
        <link rel="dns-prefetch" href="https://api.stripe.com" />
      </head>
      <body className={`${inter.variable} ${sora.variable}`}>
        <NavigationSchema />
        {children}
      </body>
    </html>
  );
}
