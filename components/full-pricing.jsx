import { CheckIcon } from "@/components/icons";
import { SecureCheckoutButton } from "@/components/secure-checkout-button";
import { plans, whatsappLink } from "@/components/site-data";

export function FullPricing({ titleAs: TitleTag = "h2" }) {
  return (
    <>
      <div className="guide-shell">
        <span className="eyebrow">Tarifs</span>
        <TitleTag>Choisissez la durée qui vous convient.</TitleTag>
        <p>
          Le contenu reste simple sur toutes les offres : chaînes françaises, sport, films et séries, qualité HD / 4K selon la chaîne, et
          assistance WhatsApp si besoin.
        </p>
        <span className="update-badge">Tarifs mis à jour - Avril 2026</span>
      </div>

      <div className="pricing-grid route-pricing-grid">
        {plans.map((plan) => (
          <article className={`pricing-card${plan.popular ? " is-popular" : ""}`} key={plan.title}>
            <div className="pricing-head">
              <span className="duration-pill">{plan.duration}</span>
              {plan.popular ? <span className="popular-pill">{plan.badge}</span> : null}
            </div>
            <div className="pricing-plan-copy">
              <h3>{plan.title}</h3>
              <p>{plan.summary ?? plan.duration}</p>
            </div>
            <div className="price-stack">
              {plan.oldPrice ? <span className="old-price">{plan.oldPrice}</span> : null}
              <div className="price-line">
                <strong>{plan.price}</strong>
              </div>
              <span className="payment-copy">{plan.paymentLabel}</span>
            </div>
            <ul className="feature-list">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span className="check-badge">
                    <CheckIcon />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <SecureCheckoutButton
              className="button button-primary"
              fallbackUrl={whatsappLink}
              label={plan.cta}
              planId={plan.title}
            />
          </article>
        ))}
      </div>
    </>
  );
}
