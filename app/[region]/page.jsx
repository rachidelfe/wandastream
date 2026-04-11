import { RegionPage } from "@/components/market-pages";
import { getRegionBySlug, regionCatalog } from "@/lib/market-data";
import { createMetadata, getRegionLanguageAlternates } from "@/lib/seo";

export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  return regionCatalog.map((region) => ({
    region: region.slug
  }));
}

export async function generateMetadata({ params }) {
  const { region: regionSlug } = await params;
  const region = getRegionBySlug(regionSlug);

  return createMetadata({
    title: `Best IPTV Service in ${region.shortName} | ${region.shortName} IPTV Subscription`,
    description: `${region.heroIntro} Compare device compatibility, local trust signals, pricing, and support for ${region.name} buyers.`,
    path: `/${region.slug}`,
    locale: region.ogLocale,
    alternates: getRegionLanguageAlternates(region),
    keywords: [
      `${region.shortName.toLowerCase()} iptv`,
      `best iptv service ${region.shortName.toLowerCase()}`,
      `buy iptv ${region.shortName.toLowerCase()}`,
      `iptv subscription ${region.shortName.toLowerCase()}`
    ]
  });
}

export default async function RegionEntryPage({ params }) {
  const { region: regionSlug } = await params;
  const region = getRegionBySlug(regionSlug);

  return <RegionPage region={region} />;
}
