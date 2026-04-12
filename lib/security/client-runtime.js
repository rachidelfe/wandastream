function hashString(value) {
  let hash = 5381;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 33) ^ value.charCodeAt(index);
  }

  return (hash >>> 0).toString(16);
}

function getCanvasFingerprint() {
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      return "canvas-unavailable";
    }

    context.textBaseline = "top";
    context.font = "16px sans-serif";
    context.fillStyle = "#1a1d29";
    context.fillRect(0, 0, 180, 40);
    context.fillStyle = "#ff4d00";
    context.fillText("WandaStream fingerprint", 12, 12);

    return canvas.toDataURL();
  } catch {
    return "canvas-error";
  }
}

function getWebGlFingerprint() {
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!context) {
      return "webgl-unavailable";
    }

    const debugInfo = context.getExtension("WEBGL_debug_renderer_info");

    if (!debugInfo) {
      return "webgl-no-debug";
    }

    const vendor = context.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    const renderer = context.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

    return `${vendor}:${renderer}`;
  } catch {
    return "webgl-error";
  }
}

export function collectBrowserFingerprint() {
  const signals = {
    webdriver: Boolean(navigator.webdriver),
    languages: navigator.languages?.join(",") ?? navigator.language ?? "unknown",
    platform: navigator.platform ?? "unknown",
    hardwareConcurrency: navigator.hardwareConcurrency ?? 0,
    deviceMemory: navigator.deviceMemory ?? 0,
    touchPoints: navigator.maxTouchPoints ?? 0,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone ?? "unknown",
    canvas: getCanvasFingerprint(),
    webgl: getWebGlFingerprint()
  };

  const suspicionScore = [
    signals.webdriver,
    signals.hardwareConcurrency === 0,
    signals.languages === "unknown",
    signals.canvas === "canvas-error",
    signals.webgl === "webgl-error"
  ].filter(Boolean).length;

  return {
    fingerprint: hashString(JSON.stringify(signals)),
    signals: {
      ...signals,
      suspicionScore
    }
  };
}

let turnstileScriptPromise;

export async function ensureTurnstileLoaded() {
  if (typeof window === "undefined") {
    return false;
  }

  if (window.turnstile) {
    return true;
  }

  if (!turnstileScriptPromise) {
    turnstileScriptPromise = new Promise((resolve, reject) => {
      const existing = document.getElementById("cf-turnstile-script");

      if (existing) {
        existing.addEventListener("load", () => resolve(true), { once: true });
        existing.addEventListener("error", () => reject(new Error("Turnstile script failed to load")), { once: true });
        return;
      }

      const script = document.createElement("script");
      script.id = "cf-turnstile-script";
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error("Turnstile script failed to load"));
      document.head.append(script);
    });
  }

  try {
    await turnstileScriptPromise;
    return Boolean(window.turnstile);
  } catch {
    return false;
  }
}
