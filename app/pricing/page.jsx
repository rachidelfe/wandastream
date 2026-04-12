import { FullPricing } from "@/components/full-pricing";
import { siteConfig } from "@/lib/site";

export async function generateMetadata() {
  return {
    title: "Tarifs IPTV Premium 4K",
    description:
      "Comparez les offres Bronze, Silver, Gold et Diamond de WandaStream pour un abonnement IPTV Premium 4K sans coupure.",
    alternates: {
      canonical: `${siteConfig.siteUrl}/pricing`
    }
  };
}

export default function PricingPage() {
  return (
    <main className="guide-page">
      <section className="section">
        <div className="container">
          <FullPricing titleAs="h1" />
        </div>
      </section>
    </main>
  );
}
