import { RegionGuidesIndexPage } from "@/components/market-pages";
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
    title: `${region.shortName} IPTV Guides`,
    description: `Regional IPTV guides for ${region.name} with high-intent device content, event coverage, comparisons, troubleshooting, and direct links into pricing and device pages.`,
    path: `/${region.slug}/blog`,
    locale: region.ogLocale,
    alternates: getRegionLanguageAlternates(region, "/blog"),
    keywords: [
      `${region.shortName.toLowerCase()} iptv guides`,
      `best iptv ${region.shortName.toLowerCase()} guide`,
      `iptv comparison ${region.shortName.toLowerCase()}`,
      `iptv troubleshooting ${region.shortName.toLowerCase()}`
    ]
  });
}

export default async function RegionBlogIndexRoute({ params }) {
  const { region: regionSlug } = await params;
  const region = getRegionBySlug(regionSlug);

  return <RegionGuidesIndexPage region={region} />;
}
