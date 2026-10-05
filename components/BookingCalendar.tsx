"use client";

import { useState } from "react";

export default function BookingCalendar() {
  const [loaded, setLoaded] = useState(false);
  const calEmbedUrl = "https://cal.com/fahrush-kalludra-2scjtx/termin?embed=true&layout=month_view&theme=dark";
  const calDirectUrl = "https://cal.com/fahrush-kalludra-2scjtx/termin";

  return (
    <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/95 p-4 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-extrabold text-amber-300">
          <span>📅</span>
          <span>Online-Kalender · Sofortbestätigung</span>
        </div>
        <h3 className="mt-3 text-2xl sm:text-3xl font-black text-white">
          Wunschtermin für Besichtigung wählen
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          Kostenlose &amp; unverbindliche Vor-Ort-Besichtigung in Landshut und Umgebung (ca. 45 Min.).
          Wählen Sie einfach einen freien Tag und eine passende Uhrzeit direkt im Kalender aus.
        </p>

        {/* Direkt-Aktionen & Fallbacks */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href={calDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-track="booking"
            data-track-loc="Kalender externer Tab"
            className="inline-flex items-center gap-1.5 rounded-xl border border-amber-400/40 bg-amber-400/10 hover:bg-amber-400/20 px-3.5 py-2 text-xs font-bold text-amber-300 transition shadow-sm"
          >
            <span>↗</span>
            <span>Kalender in neuem Tab öffnen</span>
          </a>
          <a
            href="tel:+491629007565"
            data-track="phone"
            data-track-loc="Kalender Anruf Button"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 px-3.5 py-2 text-xs font-bold text-slate-200 transition"
          >
            <span>📞</span>
            <span>Lieber anrufen: 0162 9007565</span>
          </a>
        </div>
      </div>

      <div className="relative w-full min-h-[650px] sm:min-h-[720px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
        {/* Loading Spinner / Skeleton */}
        {!loaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950 p-6 text-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-amber-400 border-t-transparent mb-4"></div>
            <p className="text-sm font-bold text-white">Online-Terminkalender wird geladen...</p>
            <p className="mt-1.5 text-xs text-slate-400 max-w-sm">
              Sollte Ihr Browser oder Werbeblocker das Einbetten verhindern, öffnen Sie den Kalender bitte direkt:
            </p>
            <a
              href={calDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-black text-slate-950 shadow-md hover:bg-amber-300 transition"
            >
              <span>Terminkalender auf Cal.com öffnen ↗</span>
            </a>
          </div>
        )}

        <iframe
          src={calEmbedUrl}
          title="Online-Terminbuchung für Besichtigung - Umzüge LAF"
          className="w-full h-full min-h-[650px] sm:min-h-[720px] border-0"
          loading="lazy"
          allow="camera; microphone; autoplay; fullscreen"
          onLoad={() => setLoaded(true)}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-amber-300 text-center">
        <span>✓ 100% kostenlos &amp; unverbindlich</span>
        <span>✓ Persönlich vor Ort in Landshut &amp; Landkreis</span>
        <span>✓ Verbindliches Festpreis-Angebot</span>
        <span>✓ Sofortbestätigung per E-Mail &amp; SMS</span>
      </div>
    </div>
  );
}
