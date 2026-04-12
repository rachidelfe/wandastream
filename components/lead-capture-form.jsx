"use client";

import { useEffect, useId, useRef, useState } from "react";
import { collectBrowserFingerprint, ensureTurnstileLoaded } from "@/lib/security/client-runtime";

export function LeadCaptureForm({ regionSlug = "global", fallbackUrl }) {
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
            message: "Security verification could not be completed. Please try again."
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
        throw new Error(payload.message ?? "Secure contact request failed.");
      }

      setFeedback({
        type: "success",
        message: payload.message ?? "Verification complete. Continue to secure support.",
        nextActionUrl: payload.nextActionUrl ?? fallbackUrl
      });

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
    <div className="lead-form-shell guide-card">
      <div className="section-heading">
        <span className="eyebrow">Secure contact</span>
        <h2>Request a verified activation path.</h2>
        <p>Use the secure form for pricing, device validation, and support. Suspicious submissions are silently dropped.</p>
      </div>

      <form className="lead-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="input-shell">
            <span>Name</span>
            <input required value={formState.name} onChange={(event) => updateField("name", event.target.value)} name="name" autoComplete="name" />
          </label>

          <label className="input-shell">
            <span>Email</span>
            <input
              required
              type="email"
              value={formState.email}
              onChange={(event) => updateField("email", event.target.value)}
              name="email"
              autoComplete="email"
            />
          </label>
        </div>

        <label className="input-shell">
          <span>Device</span>
          <input
            value={formState.device}
            onChange={(event) => updateField("device", event.target.value)}
            name="device"
            placeholder="Firestick, Apple TV, Samsung Tizen, Android TV..."
          />
        </label>

        <label className="input-shell">
          <span>What do you need?</span>
          <textarea
            required
            rows={5}
            value={formState.message}
            onChange={(event) => updateField("message", event.target.value)}
            name="message"
            placeholder="Tell us the region, device, and whether you need pricing, setup, or support."
          />
        </label>

        <label className="honeypot-field" htmlFor={`website-${turnstileContainerId}`}>
          <span>Leave this field empty</span>
          <input
            id={`website-${turnstileContainerId}`}
            tabIndex={-1}
            autoComplete="off"
            value={formState.website}
            onChange={(event) => updateField("website", event.target.value)}
            name="website"
          />
        </label>

        <div className="security-pills" aria-label="Security protections">
          <span className="security-pill">Zero-trust form</span>
          <span className="security-pill">Honeypot enabled</span>
          <span className="security-pill">Bot fingerprinting</span>
          <span className="security-pill">Turnstile ready</span>
        </div>

        <div className="lead-form-actions">
          <button className="button button-primary" disabled={submitting} type="submit">
            {submitting ? "Verifying..." : "Send secure request"}
          </button>
          <a className="button button-secondary" href={fallbackUrl} target="_blank" rel="noreferrer">
            WhatsApp fallback
          </a>
        </div>

        <p className="field-note">Protected by region-aware rate limiting. Bots receive a silent success response and trigger no real action.</p>

        {siteKey ? <div className="turnstile-shell" id={`turnstile-${turnstileContainerId}`} ref={containerRef} /> : null}

        {feedback ? (
          <div className={`form-feedback is-${feedback.type}`}>
            <p>{feedback.message}</p>
            {feedback.nextActionUrl ? (
              <a className="button button-secondary" href={feedback.nextActionUrl} target="_blank" rel="noreferrer">
                Continue to support
              </a>
            ) : null}
          </div>
        ) : null}
      </form>
    </div>
  );
}
