import { GuidesHubPage } from "@/components/france-pages";
import { createMetadata } from "@/lib/seo";

export const revalidate = 3600;

export async function generateMetadata() {
  return createMetadata({
    title: "Guides IPTV France | Installation simple et conseils utiles",
    description:
      "Guides IPTV France pour Smart TV, Firestick, Android TV et Apple TV. Installation simple, choix de l'offre et conseils utiles.",
    path: "/guides",
    locale: "fr_FR",
    keywords: ["guides iptv france", "installation iptv france", "aide iptv france"]
  });
}

export default function GuidesPage() {
  return <GuidesHubPage />;
}
