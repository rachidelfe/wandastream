import Link from "next/link";
import { LandingTemplate } from "@/components/landing-template";
import {
  bentoCards,
  deviceBadges,
  faqItems,
  featureCards,
  heroDevices,
  heroSignals,
  statistics,
  trustItems,
  whatsappLink
} from "@/components/site-data";
import { deviceComparisonRows, homepageAuthoritySections, regionCatalog, useCaseCards } from "@/lib/market-data";

function globalContent() {
  return {
    hero: {
      badge: "Serving customers since 2021",
      title: "Access 40,000+ channels in 4K without interruption.",
      intro:
        "Premium IPTV built for sports fans, movie lovers, and households that want stable streaming, instant activation, secure checkout, and a cleaner experience across every device.",
      devices: heroDevices,
      signals: heroSignals
    },
    benefits: {
      eyebrow: "Benefits",
      title: "A SaaS-style bento grid that makes the technical value easier to trust.",
      text: "Instead of generic feature blocks, the key strengths now land in a cleaner product-grid format with glass panels, glow, and stronger hierarchy.",
      cards: bentoCards
    },
    platforms: {
      eyebrow: "Included Platforms",
      title: "Two cinematic logo rails that keep the page moving without feeling noisy.",
      text: "Mirrored motion and subtle hover brightening keep the ecosystem feeling premium while reinforcing mainstream content access."
    },
    trust: {
      items: trustItems
    },
    authority: {
      header: {
        eyebrow: "Global Authority Hub",
        title: "A homepage that explains IPTV, devices, and buying logic in one place.",
        text: "This pillar layer targets broad searches like IPTV subscription, best IPTV service, and buy IPTV while pushing visitors toward the right next step."
      },
      cards: homepageAuthoritySections
    },
    library: {
      eyebrow: "Movies & Series",
      title: "Curated rows that feel closer to a streaming product than a reseller landing page.",
      text: "The browsing rail stays lightweight, responsive, and keeps the library in a single visible row like a premium streaming interface."
    },
    comparison: {
      header: {
        eyebrow: "Device Comparison",
        title: "Compare Firestick, Smart TV, Android TV, MAG, and Apple TV before you choose a setup path.",
        text: "This table helps the homepage rank for comparison intent while staying focused on compatibility rather than setup."
      },
      columns: [
        { key: "device", label: "Device" },
        { key: "bestFor", label: "Best for" },
        { key: "strengths", label: "Main strengths" },
        { key: "idealFor", label: "Best-fit audience" }
      ],
      rows: deviceComparisonRows.map((row) => ({ ...row, id: row.device }))
    },
    coverage: {
      header: {
        eyebrow: "Available In Your Country",
        title: "Regional landing pages for the UK, France, Morocco, Belgium, and the GCC.",
        text: "Each market page carries its own local trust signals and conversion flow while keeping the global homepage clean and broad."
      },
      regions: regionCatalog
    },
    stats: {
      header: {
        eyebrow: "Statistics",
        title: "Real numbers that reinforce scale, stability, and confidence.",
        text: "The service story combines product polish with hard performance signals and stronger operational positioning."
      },
      items: statistics
    },
    useCases: {
      header: {
        eyebrow: "Use Cases",
        title: "Built for sports fans, families, and expats who compare reliability before everything else.",
        text: "These use-case blocks strengthen topical depth on the homepage while matching the personas that drive IPTV conversions across markets."
      },
      items: useCaseCards
    },
    reliability: {
      header: {
        eyebrow: "Reliability Layer",
        title: "Professional benefits phrased like a serious software product.",
        text: "This keeps the trust messaging consistent with the cinematic SaaS style while making the service promise easy to scan."
      },
      cards: featureCards
    },
    devices: {
      header: {
        eyebrow: "Supported Devices",
        title: "Ready for the screens your customers already use.",
        text: "Compatibility stays easy to scan and sits inside the same premium glass-and-glow system as the rest of the product."
      },
      badges: deviceBadges
    },
    faq: {
      header: {
        eyebrow: "FAQ",
        title: "Answering broad IPTV questions without pushing technical setup onto the homepage.",
        text: "The authority page should clarify subscriptions, compatibility, activation, and trust signals while leaving deep setup flows to device pages."
      },
      items: faqItems
    },
    contact: {
      eyebrow: "Need Help Choosing?",
      title: "Have questions? Contact us and get activated today.",
      text: "Speak to the team, confirm device compatibility, and get the right plan for your setup without delays."
    },
    footer: {
      text: "WandaStream now includes a global pillar homepage, regional landing pages, device setup routes, and content clusters built to rank and convert together.",
      showRegionLinks: true
    }
  };
}

export function HomePage() {
  return <LandingTemplate content={globalContent()} contactHref={whatsappLink} regions={regionCatalog} />;
}
