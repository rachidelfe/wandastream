import { notFound } from "next/navigation";
import { GuidePostPage } from "@/components/france-pages";
import { getGuidePost, guideCatalog } from "@/lib/france-guides";
import { createMetadata } from "@/lib/seo";

export const revalidate = 3600;

export function generateStaticParams() {
  return guideCatalog.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getGuidePost(slug);

  if (!post) {
    return createMetadata({
      title: "Guide IPTV France",
      description: "Guide simple pour choisir votre appareil et commencer rapidement en France.",
      path: `/guides/${slug}`,
      locale: "fr_FR"
    });
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/guides/${post.slug}`,
    locale: "fr_FR",
    keywords: [post.keyword, "iptv france", "abonnement iptv france"]
  });
}

export default async function GuideDetailPage({ params }) {
  const { slug } = await params;
  const post = getGuidePost(slug);

  if (!post) {
    notFound();
  }

  return <GuidePostPage post={post} />;
}
