"use client";

import { useEffect, useId, useRef, useState } from "react";
import { collectBrowserFingerprint, ensureTurnstileLoaded } from "@/lib/security/client-runtime";

export function LeadCaptureForm({ regionSlug = "france", fallbackUrl }) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
  const widgetIdRef = useRef(null);
  const pendingTokenResolver = useRef(null);
  const containerRef = useRef(null);
  const turnstileContainerId = useId().replace(/:/g, "");

  const [fingerprint, setFingerprint] = useState("");
  const [botSignals, setBotSignals] = useState(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    device: "",
    message: "",
    website: ""
  });

  useEffect(() => {
    const details = collectBrowserFingerprint();
    setFingerprint(details.fingerprint);
    setBotSignals(details.signals);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function mountTurnstile() {
      if (!siteKey || !containerRef.current) {
        return;
      }

      const isReady = await ensureTurnstileLoaded();

      if (!isReady || cancelled || !window.turnstile || widgetIdRef.current !== null) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        size: "invisible",
        callback: (token) => {
          setTurnstileToken(token);
          if (pendingTokenResolver.current) {
            pendingTokenResolver.current(token);
            pendingTokenResolver.current = null;
          }
        },
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => {
          if (pendingTokenResolver.current) {
            pendingTokenResolver.current("");
            pendingTokenResolver.current = null;
          }
          setFeedback({
            type: "error",
            message: "Nous n'avons pas pu envoyer votre demande pour le moment. Réessayez dans un instant."
          });
        }
      });
    }

    mountTurnstile();

    return () => {
      cancelled = true;
    };
  }, [siteKey]);

  function updateField(field, value) {
    setFormState((current) => ({
      ...current,
      [field]: value
    }));
  }

  async function ensureChallengeToken() {
    if (!siteKey || !widgetIdRef.current || !window.turnstile) {
      return "";
    }

    if (turnstileToken) {
      return turnstileToken;
    }

    return new Promise((resolve) => {
      pendingTokenResolver.current = resolve;
      window.turnstile.execute(widgetIdRef.current);
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    try {
      const token = await ensureChallengeToken();
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formState,
          regionSlug,
          honeypot: formState.website,
          fingerprint,
          botSignals,
          turnstileToken: token
        })
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message ?? "Votre demande n'a pas pu être envoyée.");
      }

      setFeedback({
        type: "success",
        message: payload.message ?? "Message envoyé. Ouvrez WhatsApp pour continuer rapidement.",
        nextActionUrl: payload.nextActionUrl ?? fallbackUrl
      });

      if (payload.nextActionUrl ?? fallbackUrl) {
        window.location.href = payload.nextActionUrl ?? fallbackUrl;
      }

      setFormState({
        name: "",
        email: "",
        device: "",
        message: "",
        website: ""
      });

      setTurnstileToken("");

      if (siteKey && widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.message
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="lead-form-shell guide-card contact-section">
      <div className="section-heading">
        <span className="eyebrow">Contact</span>
        <h2>Parlez-nous de votre appareil.</h2>
        <p>Dites-nous si vous utilisez une Smart TV, Firestick, Android TV, iPhone ou autre. Nous vous aidons à choisir la bonne offre.</p>
      </div>

      <form className="lead-form contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="input-shell form-group">
            <span>Nom</span>
            <input
              className="form-input"
              required
              value={formState.name}
              onChange={(event) => updateField("name", event.target.value)}
              name="name"
              autoComplete="name"
            />
          </label>

          <label className="input-shell form-group">
            <span>E-mail</span>
            <input
              className="form-input"
              required
              type="email"
              value={formState.email}
              onChange={(event) => updateField("email", event.target.value)}
              name="email"
              autoComplete="email"
            />
          </label>
        </div>

        <label className="input-shell form-group full-width">
          <span>Appareil</span>
          <input
            className="form-input"
            value={formState.device}
            onChange={(event) => updateField("device", event.target.value)}
            name="device"
            placeholder="Smart TV Samsung, LG, Firestick, Android TV, iPhone..."
          />
        </label>

        <label className="input-shell form-group full-width">
          <span>Votre message</span>
          <textarea
            className="form-textarea"
            required
            rows={5}
            value={formState.message}
            onChange={(event) => updateField("message", event.target.value)}
            name="message"
            placeholder="Dites-nous ce que vous cherchez : chaînes françaises, sport, films et séries, ou aide pour l'installation."
          />
        </label>

        <label className="honeypot-field" htmlFor={`website-${turnstileContainerId}`}>
          <span>Laissez ce champ vide</span>
          <input
            id={`website-${turnstileContainerId}`}
            tabIndex={-1}
            autoComplete="off"
            value={formState.website}
            onChange={(event) => updateField("website", event.target.value)}
            name="website"
          />
        </label>

        <div className="lead-form-actions form-actions">
          <button className="button button-primary btn-primary" disabled={submitting} type="submit">
            {submitting ? "Envoi..." : "Envoyer ma demande"}
          </button>
          <a className="button button-secondary btn-secondary" href={fallbackUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        {siteKey ? <div className="turnstile-shell" id={`turnstile-${turnstileContainerId}`} ref={containerRef} /> : null}

        {feedback ? (
          <div className={`form-feedback is-${feedback.type}`}>
            <p>{feedback.message}</p>
            {feedback.nextActionUrl ? (
              <a className="button button-secondary btn-secondary" href={feedback.nextActionUrl} target="_blank" rel="noreferrer">
                Ouvrir WhatsApp
              </a>
            ) : null}
          </div>
        ) : null}
      </form>
    </div>
  );
}
