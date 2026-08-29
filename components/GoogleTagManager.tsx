"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-55B3P6B6";
const GOOGLE_ADS_TAG_ID = "AW-11459071355";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleTagManager() {
  useEffect(() => {
    // Setup dataLayer and stub gtag immediately
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      if (window.dataLayer) {
        window.dataLayer.push(args);
      }
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("consent", "default", {
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      functionality_storage: "granted",
      security_storage: "granted",
    });
    gtag("config", GOOGLE_ADS_TAG_ID);

    let loaded = false;
    function loadScripts() {
      if (loaded) return;
      loaded = true;

      // 1. Google Ads Tag
      const adsScript = document.createElement("script");
      adsScript.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_TAG_ID}`;
      adsScript.async = true;
      document.head.appendChild(adsScript);

      // 2. Google Tag Manager
      const win = window as unknown as Record<string, unknown[]>;
      win["dataLayer"] = win["dataLayer"] || [];
      win["dataLayer"].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

      const gtmScript = document.createElement("script");
      gtmScript.async = true;
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      const firstScript = document.getElementsByTagName("script")[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(gtmScript, firstScript);
      } else {
        document.head.appendChild(gtmScript);
      }

      // Cleanup event listeners
      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("touchstart", loadScripts);
      window.removeEventListener("mousemove", loadScripts);
      window.removeEventListener("keydown", loadScripts);
      window.removeEventListener("click", loadScripts);
    }

    // Trigger on first user interaction or fallback after 3.5s
    window.addEventListener("scroll", loadScripts, { passive: true });
    window.addEventListener("touchstart", loadScripts, { passive: true });
    window.addEventListener("mousemove", loadScripts, { passive: true });
    window.addEventListener("keydown", loadScripts, { passive: true });
    window.addEventListener("click", loadScripts, { passive: true });

    const timeout = setTimeout(loadScripts, 3500);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("touchstart", loadScripts);
      window.removeEventListener("mousemove", loadScripts);
      window.removeEventListener("keydown", loadScripts);
      window.removeEventListener("click", loadScripts);
    };
  }, []);

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
