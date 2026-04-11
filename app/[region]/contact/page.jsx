import { redirect } from "next/navigation";
import { regionCatalog } from "@/lib/market-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return regionCatalog.map((region) => ({
    region: region.slug
  }));
}

export default async function RegionContactAliasPage({ params }) {
  const { region } = await params;

  redirect(`/${region}#contact`);
}
