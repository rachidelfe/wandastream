import { CheckIcon } from "@/components/icons";
import { plans, whatsappLink } from "@/components/site-data";

export function FullPricing({ titleAs: TitleTag = "h2" }) {
  return (
    <>
      <div className="guide-shell">
        <span className="eyebrow">Pricing</span>
        <TitleTag>Tarifs VantaStream pour un abonnement IPTV Premium 4K.</TitleTag>
        <p>
          Comparez les durees, les reductions et les options de support avant activation. La formule Gold reste la plus populaire pour un usage
          quotidien stable.
        </p>
      </div>

      <div className="pricing-grid route-pricing-grid">
        {plans.map((plan) => (
          <article className={`pricing-card${plan.popular ? " is-popular" : ""}`} key={plan.title}>
            <div className="pricing-head">
              <span className="save-pill">{plan.discount}</span>
              {plan.popular ? <span className="popular-pill">{plan.badge}</span> : <span className="duration-pill">{plan.duration}</span>}
            </div>
            <div className="pricing-plan-copy">
              <h3>{plan.title}</h3>
              <p>{plan.duration}</p>
            </div>
            <div className="price-stack">
              <span className="old-price">{plan.oldPrice}</span>
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
            <a className={`button ${plan.popular ? "button-primary" : "button-secondary"}`} href={whatsappLink} target="_blank" rel="noreferrer">
              {plan.cta}
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
