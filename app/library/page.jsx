import Image from "next/image";
import Link from "next/link";
import { posters } from "@/components/site-data";
import { siteConfig } from "@/lib/site";

export async function generateMetadata() {
  return {
    title: "Bibliotheque IPTV Films et Series",
    description:
      "Explorez la bibliotheque WandaStream avec cinema, sport, series et contenu familial en streaming IPTV Premium 4K.",
    alternates: {
      canonical: `${siteConfig.siteUrl}/library`
    }
  };
}

export default function LibraryPage() {
  return (
    <main className="guide-page">
      <section className="section">
        <div className="container">
          <div className="guide-shell">
            <span className="eyebrow">Library</span>
            <h1>Bibliotheque WandaStream: films, series, sport et contenu familial.</h1>
            <p>
              Une vitrine dediee a la bibliotheque permet a Google et aux visiteurs de comprendre plus vite la richesse du catalogue et la qualite du
              streaming.
            </p>
          </div>

          <div className="poster-rail route-poster-grid">
            {posters.map((poster) => (
              <article className="poster-card" key={poster.title}>
                <div className="poster-image">
                  <Image src={poster.image} alt={poster.title} fill sizes="(max-width: 768px) 74vw, 300px" loading="lazy" />
                </div>
                <div className="poster-copy">
                  <span>{poster.meta}</span>
                  <h3>{poster.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="guide-cta">
            <Link className="button button-primary" href="/pricing">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
