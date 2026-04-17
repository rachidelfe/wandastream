import { DevicesHubPage } from "@/components/france-pages";
import { deviceCatalog } from "@/lib/france-data";
import { createMetadata } from "@/lib/seo";

export const revalidate = 3600;

export async function generateMetadata() {
  return createMetadata({
    title: "Appareils compatibles IPTV France | Smart TV, Firestick, Android TV",
    description:
      "Retrouvez les appareils compatibles avec votre abonnement IPTV France : Smart TV Samsung et LG, Firestick, Android TV, Apple TV, iPhone et plus.",
    path: "/devices",
    locale: "fr_FR",
    keywords: ["appareils iptv france", "firestick france iptv", "smart tv france iptv"]
  });
}

export default function DevicesPage() {
  return <DevicesHubPage devices={deviceCatalog} />;
}
