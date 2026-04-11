import { siteConfig } from "@/lib/site";

export default function robots() {
  return {
    rules: [
      {
        allow: "/"
      }
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`
  };
}
