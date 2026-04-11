import { RegionDevicePage } from "@/components/market-pages";
import { deviceCatalog, getDeviceBySlug, getRegionBySlug, regionCatalog } from "@/lib/market-data";
import { createMetadata, getRegionLanguageAlternates } from "@/lib/seo";

export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  return regionCatalog.flatMap((region) =>
    deviceCatalog.map((device) => ({
      region: region.slug,
      device: device.slug
    }))
  );
}

export async function generateMetadata({ params }) {
  const { region: regionSlug, device: deviceSlug } = await params;
  const region = getRegionBySlug(regionSlug);
  const device = getDeviceBySlug(deviceSlug);

  return createMetadata({
    title: `${device.name} IPTV Setup in ${region.shortName}`,
    description: `${device.name} setup guide for ${region.name} buyers with app recommendations, internal links, and direct access to pricing and support.`,
    path: `/${region.slug}/${device.slug}`,
    locale: region.ogLocale,
    alternates: getRegionLanguageAlternates(region, `/${device.slug}`),
    keywords: [
      `${device.slug} iptv ${region.slug}`,
      `iptv ${device.name.toLowerCase()} ${region.shortName.toLowerCase()}`,
      `${device.name.toLowerCase()} setup guide ${region.shortName.toLowerCase()}`
    ]
  });
}

export default async function RegionDeviceEntryPage({ params }) {
  const { region: regionSlug, device: deviceSlug } = await params;
  const region = getRegionBySlug(regionSlug);
  const device = getDeviceBySlug(deviceSlug);

  return <RegionDevicePage region={region} device={device} />;
}
