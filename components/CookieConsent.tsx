"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentChoice = "accepted" | "rejected";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function updateGoogleConsent(choice: ConsentChoice) {
  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }

  if (choice === "accepted") {
    window.gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      functionality_storage: "granted",
      security_storage: "granted",
    });

    window.dataLayer.push({
      event: "cookie_consent_accepted",
    });
  } else {
    window.gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      functionality_storage: "granted",
      security_storage: "granted",
    });

    window.dataLayer.push({
      event: "cookie_consent_rejected",
    });
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedChoice = localStorage.getItem("laf_cookie_consent") as
      | ConsentChoice
      | null;

    if (!savedChoice) {
      setVisible(true);
      return;
    }

    updateGoogleConsent(savedChoice);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("laf_cookie_consent", "accepted");
    updateGoogleConsent("accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("laf_cookie_consent", "rejected");
    updateGoogleConsent("rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[#050505]/95 p-5 text-white shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-6">
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f6c21a]">
            Cookies & Tracking
          </p>

          <h3 className="mt-2 text-2xl font-black">
            Wir nutzen Cookies für Analyse und Werbung.
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/65">
            Mit Ihrer Zustimmung verwenden wir Google Tag Manager, Google
            Analytics und Google Ads, um Anfragen zu messen und unsere Website
            zu verbessern. Sie können die Nutzung ablehnen oder später über den
            Browser ändern.
          </p>

          <Link
            href="/datenschutz"
            className="mt-3 inline-flex text-sm font-bold text-[#f6c21a] underline underline-offset-4"
          >
            Datenschutzerklärung ansehen
          </Link>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <button
            onClick={handleAccept}
            className="rounded-full bg-[#f6c21a] px-6 py-3 text-sm font-black text-black shadow-[0_0_30px_rgba(246,194,26,0.35)] transition hover:scale-105 hover:bg-white"
          >
            Alle akzeptieren
          </button>

          <button
            onClick={handleReject}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:border-[#f6c21a] hover:text-[#f6c21a]"
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
