import { RegionGuidePostPage } from "@/components/market-pages";
import { getRegionBySlug } from "@/lib/market-data";
import { getGuidePost, guideCatalog } from "@/lib/regional-guides";
import { createMetadata, getRegionLanguageAlternates } from "@/lib/seo";

export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  return guideCatalog.map((post) => ({
    region: post.region,
    slug: post.slug
  }));
}

export async function generateMetadata({ params }) {
  const { region: regionSlug, slug } = await params;
  const region = getRegionBySlug(regionSlug);
  const post = getGuidePost(regionSlug, slug);

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/${region.slug}/blog/${post.slug}`,
    locale: region.ogLocale,
    alternates: getRegionLanguageAlternates(region, `/blog/${post.slug}`),
    keywords: [
      post.keyword,
      `best iptv ${region.shortName.toLowerCase()}`,
      `iptv ${region.shortName.toLowerCase()} guide`,
      `${region.shortName.toLowerCase()} long tail iptv`
    ]
  });
}

export default async function RegionBlogPostRoute({ params }) {
  const { region: regionSlug, slug } = await params;
  const region = getRegionBySlug(regionSlug);
  const post = getGuidePost(regionSlug, slug);

  return <RegionGuidePostPage region={region} post={post} />;
}
