import Link from "next/link";
import { FranceShell } from "@/components/france-pages";

export const metadata = {
  title: "Conditions et confidentialité",
  description: "Conditions d'utilisation et politique de confidentialité WandaStream pour la France."
};

const sections = [
  {
    id: "conditions",
    title: "Conditions d'utilisation",
    body:
      "WandaStream propose un service destiné à un usage personnel. Avant de commander, vérifiez que votre appareil est compatible et que votre connexion internet est adaptée à votre usage."
  },
  {
    id: "commande",
    title: "Commande et activation",
    body:
      "Après validation de la commande, les informations nécessaires à l'installation sont envoyées pour vous permettre de commencer rapidement. En cas de question, le support WhatsApp reste disponible."
  },
  {
    id: "confidentialite",
    title: "Confidentialité",
    body:
      "Les informations transmises via le formulaire ou pendant la commande servent uniquement à répondre à votre demande, vous accompagner et traiter votre achat. Elles ne sont pas destinées à un usage public."
  }
];

export default function TermsPage() {
  return (
    <FranceShell ctaHref="/#pricing" ctaLabel="Voir les offres">
      <main className="guide-page market-page">
        <section className="section guide-hero">
          <div className="container">
            <div className="guide-shell market-copy guide-hero-single">
              <span className="eyebrow">Légal</span>
              <h1>Conditions et confidentialité</h1>
              <p>Retrouvez ici les informations utiles avant de commander : utilisation du service, activation et confidentialité.</p>
              <span className="update-badge">Mise à jour : Avril 2026</span>
              <div className="hero-actions guide-hero-actions">
                <Link className="button button-primary" href="/">
                  Retour à l'accueil
                </Link>
                <Link className="button button-secondary" href="/#pricing">
                  Voir les offres
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section deferred-section">
          <div className="container guide-grid">
            {sections.map((section) => (
              <article className="guide-card" id={section.id} key={section.id}>
                <span className="eyebrow">Information</span>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </FranceShell>
  );
}
