import { notFound } from "next/navigation";
import { DevicePage } from "@/components/france-pages";
import { deviceCatalog } from "@/lib/france-data";
import { createMetadata } from "@/lib/seo";
import { getDeviceByRouteSlug } from "@/lib/france-guides";

export const revalidate = 3600;

export function generateStaticParams() {
  return deviceCatalog.map((device) => ({ slug: device.routeSlug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const device = getDeviceByRouteSlug(slug);

  if (!device) {
    return createMetadata({
      title: "Installation IPTV sur appareil compatible",
      description: "Guide simple pour installer votre abonnement IPTV sur l'appareil de votre choix.",
      path: `/devices/${slug}`,
      locale: "fr_FR"
    });
  }

  return createMetadata({
    title: `${device.name} | Installation simple pour IPTV France`,
    description: `${device.name} : étapes simples, application recommandée et mise en route rapide pour votre abonnement IPTV France.`,
    path: `/devices/${device.routeSlug}`,
    locale: "fr_FR",
    keywords: [`${device.name} france iptv`, `installation ${device.name} france`, "abonnement iptv france"]
  });
}

export default async function DeviceDetailPage({ params }) {
  const { slug } = await params;
  const device = getDeviceByRouteSlug(slug);

  if (!device) {
    notFound();
  }

  return <DevicePage device={device} />;
}
