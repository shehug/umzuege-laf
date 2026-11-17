import { useState, useEffect } from "react";
import { company } from "../data/company";

export default function GoogleMapLocation() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("laf_cookie_consent");
      if (consent === "accepted") {
        setHasConsent(true);
      }
      const handleConsent = () => setHasConsent(true);
      window.addEventListener("laf_cookie_consent_accepted", handleConsent);
      return () => window.removeEventListener("laf_cookie_consent_accepted", handleConsent);
    }
  }, []);

  const handleGrantConsent = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("laf_cookie_consent", "accepted");
      if (typeof (window as any).gtag === "function") {
        (window as any).gtag("consent", "update", {
          ad_storage: "granted",
          analytics_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
          functionality_storage: "granted",
          security_storage: "granted",
        });
      }
      window.dispatchEvent(new CustomEvent("laf_cookie_consent_accepted"));
      setHasConsent(true);
    }
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=Umz%C3%BCge+LAF,+${encodeURIComponent(company.address.street + ", " + company.address.postalCode + " " + company.address.city)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=Umz%C3%BCge+LAF,+${encodeURIComponent(company.address.street + ", " + company.address.postalCode + " " + company.address.city)}`;
  const openMapUrl = `https://www.google.com/maps/search/?api=1&query=Umz%C3%BCge+LAF+${encodeURIComponent(company.address.street + " " + company.address.postalCode + " " + company.address.city)}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full flex flex-col justify-between">
      <div className="relative min-h-[300px] sm:min-h-[350px] lg:min-h-[410px] w-full bg-slate-100 flex-1 flex items-center justify-center">
        {hasConsent ? (
          <iframe
            title="Umzüge LAF Standort Landshut"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full grayscale-[10%] contrast-[105%]"
          />
        ) : (
          <div className="p-6 text-center max-w-md mx-auto flex flex-col items-center justify-center h-full">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xl mb-3">
              📍
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-1">
              Google Maps Karte aktivieren
            </h4>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Aus Datenschutzgründen wird die interaktive Karte von Google Maps erst nach Ihrer Einwilligung geladen. Dabei können personenbezogene Daten (z. B. IP-Adresse) an Google übertragen werden.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={handleGrantConsent}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f59e0b] px-4 py-2.5 text-xs font-bold text-slate-950 shadow-xs hover:bg-amber-400 active:scale-95 transition cursor-pointer"
              >
                <span>Karte jetzt laden</span>
              </button>
              <a
                href={openMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95 transition"
              >
                Direkt in Maps öffnen →
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 bg-white">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Offizieller Unternehmensstandort
              </p>
            </div>
            <p className="mt-1 text-base font-black text-slate-900">
              {company.name} ({company.legalOwner})
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-700">
              {company.address.street}, {company.address.postalCode} {company.address.city}
            </p>
            <div className="mt-2 space-y-0.5 text-xs text-slate-600">
              <p>Telefon: <a href={company.phoneHref} className="font-bold text-slate-900 hover:text-amber-600">{company.phoneDisplay}</a></p>
              <p>E-Mail: <a href={`mailto:${company.email}`} className="font-medium text-slate-900 hover:text-amber-600">{company.email}</a></p>
              <p className="text-slate-600 font-medium pt-1">
                Öffnungszeiten: {company.openingHours}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-col gap-2.5">
            <a
              href={routeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f59e0b] px-4 py-2.5 text-xs font-black text-slate-950 shadow-xs transition hover:bg-amber-400 active:scale-95"
            >
              <span>🧭</span>
              <span>Route berechnen</span>
            </a>

            <a
              href={openMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-800 transition hover:bg-white active:scale-95"
            >
              <span>In Maps öffnen →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}