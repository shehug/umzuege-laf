"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookingCalendar() {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", {
          theme: "dark",
          styles: {
            branding: {
              brandColor: "#f59e0b", // LAF Amber-Farbton
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (e) {
        console.error("Cal.com initialization error:", e);
      }
    })();
  }, []);

  return (
    <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 p-4 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-extrabold text-amber-300">
          <span>📅</span>
          <span>Online-Kalender · Sofortbestätigung</span>
        </div>
        <h3 className="mt-3 text-2xl sm:text-3xl font-black text-white">
          Wunschtermin für Besichtigung wählen
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          Kostenlose &amp; unverbindliche Vor-Ort-Besichtigung in Landshut und Umgebung. 
          Wählen Sie einfach einen freien Tag und eine Uhrzeit im Kalender aus.
        </p>
      </div>

      <div className="w-full min-h-[620px] rounded-2xl overflow-hidden bg-slate-950/60 border border-slate-800">
        <Cal
          calLink="fahrush-kalludra-2scjtx/termin"
          style={{ width: "100%", height: "100%", minHeight: "620px" }}
          config={{ layout: "month_view", theme: "dark" }}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-amber-300 text-center">
        <span>✓ 100% kostenlos &amp; unverbindlich</span>
        <span>✓ Persönlich vor Ort</span>
        <span>✓ Verbindliches Festpreis-Angebot</span>
      </div>
    </div>
  );
}
