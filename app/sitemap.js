import { deviceCatalog, regionCatalog } from "@/lib/market-data";
import { guideCatalog } from "@/lib/regional-guides";
import { siteConfig } from "@/lib/site";

export default function sitemap() {
  const staticRoutes = ["", "/pricing", "/library", "/iptv-firestick-setup", "/fix-iptv-buffering", "/best-vpn-for-iptv"];
  const regionRoutes = regionCatalog.flatMap((region) => [
    `/${region.slug}`,
    `/${region.slug}/blog`,
    ...deviceCatalog.map((device) => `/${region.slug}/${device.slug}`)
  ]);
  const guideRoutes = guideCatalog.map((post) => `/${post.region}/blog/${post.slug}`);
  const routes = [...staticRoutes, ...regionRoutes, ...guideRoutes];

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === ""
        ? "weekly"
        : route.includes("/blog/")
          ? "monthly"
          : route.endsWith("/blog") || route === "/pricing" || route === "/library"
            ? "weekly"
            : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/pricing" || route === "/library"
          ? 0.88
          : regionCatalog.some((region) => route === `/${region.slug}`)
            ? 0.84
            : route.includes("/blog/")
              ? 0.68
              : 0.74
  }));
}
