import { deviceCatalog } from "@/lib/france-data";
import { guideCatalog } from "@/lib/france-guides";

export default function sitemap() {
  const baseUrl = "https://www.wandastream.com";
  const lastmod = new Date();

  const staticEntries = [
    { url: baseUrl, lastModified: lastmod, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/guides`, lastModified: lastmod, changeFrequency: "daily", priority: 0.95 },
    { url: `${baseUrl}/devices`, lastModified: lastmod, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/pricing`, lastModified: lastmod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/library`, lastModified: lastmod, changeFrequency: "weekly", priority: 0.85 }
  ];

  const deviceEntries = deviceCatalog.map((device) => ({
    url: `${baseUrl}/devices/${device.routeSlug}`,
    lastModified: lastmod,
    changeFrequency: "monthly",
    priority: ["firestick-france", "smart-tv-france"].includes(device.routeSlug) ? 0.85 : 0.8
  }));

  const guideEntries = guideCatalog.map((post) => ({
    url: `${baseUrl}/guides/${post.slug}`,
    lastModified: lastmod,
    changeFrequency: post.category === "events" ? "weekly" : "monthly",
    priority: post.category === "events" ? 0.85 : 0.8
  }));

  return [...staticEntries, ...deviceEntries, ...guideEntries];
}
