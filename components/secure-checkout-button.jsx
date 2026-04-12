"use client";

import { useEffect, useId, useRef, useState } from "react";
import { collectBrowserFingerprint, ensureTurnstileLoaded } from "@/lib/security/client-runtime";

export function SecureCheckoutButton({ className, fallbackUrl, label, planId }) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
  const widgetIdRef = useRef(null);
  const pendingTokenResolver = useRef(null);
  const containerRef = useRef(null);
  const turnstileContainerId = useId().replace(/:/g, "");

  const [fingerprint, setFingerprint] = useState("");
  const [botSignals, setBotSignals] = useState(null);
  const [loading, setLoading] = useState(false);

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
          if (pendingTokenResolver.current) {
            pendingTokenResolver.current(token);
            pendingTokenResolver.current = null;
          }
        },
        "error-callback": () => {
          if (pendingTokenResolver.current) {
            pendingTokenResolver.current("");
            pendingTokenResolver.current = null;
          }
        }
      });
    }

    mountTurnstile();

    return () => {
      cancelled = true;
    };
  }, [siteKey]);

  async function ensureChallengeToken() {
    if (!siteKey || !widgetIdRef.current || !window.turnstile) {
      return "";
    }

    return new Promise((resolve) => {
      pendingTokenResolver.current = resolve;
      window.turnstile.execute(widgetIdRef.current);
    });
  }

  async function handleClick() {
    setLoading(true);

    try {
      const turnstileToken = await ensureChallengeToken();
      const response = await fetch("/api/checkout/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          planId,
          fingerprint,
          botSignals,
          turnstileToken,
          honeypot: ""
        })
      });

      const payload = await response.json();

      const nextUrl = payload.url ?? payload.fallbackUrl ?? fallbackUrl;
      window.location.href = nextUrl;
    } catch {
      window.location.href = fallbackUrl;
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button className={className} type="button" onClick={handleClick} disabled={loading}>
        {loading ? "Securing checkout..." : label}
      </button>
      {siteKey ? <div className="turnstile-shell" id={`pricing-turnstile-${turnstileContainerId}`} ref={containerRef} /> : null}
    </>
  );
}
