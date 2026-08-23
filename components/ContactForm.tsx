"use client";

import { useState } from "react";
import { trackContactFormSubmit } from "@/lib/gtmEvents";

const requestTypes = [
  "Privatumzug",
  "Firmenumzug",
  "Möbelmontage",
  "Einpackservice",
  "Entrümpelung",
  "Sonstige Anfrage",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      requestType: formData.get("requestType"),
      startLocation: formData.get("startLocation"),
      targetLocation: formData.get("targetLocation"),
      message: formData.get("message"),
    };

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(
          result.message || "Die Anfrage konnte nicht gesendet werden."
        );
        return;
      }

      trackContactFormSubmit("Kontaktseite");

      setStatus("success");
      setStatusMessage("Vielen Dank! Ihre Anfrage ist eingegangen. Wir melden uns in Kürze mit Ihrem Angebot.");
      form.reset();
    } catch {
      setStatus("error");
      setStatusMessage(
        "Es ist ein Fehler aufgetreten. Bitte rufen Sie uns einfach direkt unter 0162 900 75 65 an."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        <div>
          <label className="mb-1 block text-xs font-bold text-slate-800">
            Ihr Name *
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="z. B. Max Mustermann"
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-3 focus:ring-amber-500/20"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-bold text-slate-800">
            Telefonnummer *
          </label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="z. B. 0170 1234567"
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-3 focus:ring-amber-500/20"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-bold text-slate-800">
            E-Mail-Adresse
          </label>
          <input
            name="email"
            type="email"
            placeholder="ihre.mail@beispiel.de"
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-3 focus:ring-amber-500/20"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-bold text-slate-800">
            Art der Leistung
          </label>
          <select
            name="requestType"
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-3 focus:ring-amber-500/20"
          >
            {requestTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-bold text-slate-800">
            Von (Startort / Etage)
          </label>
          <input
            name="startLocation"
            type="text"
            placeholder="z. B. Landshut, 2. OG"
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-3 focus:ring-amber-500/20"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-bold text-slate-800">
            Nach (Zielort / Etage)
          </label>
          <input
            name="targetLocation"
            type="text"
            placeholder="z. B. Ergolding, EG"
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-3 focus:ring-amber-500/20"
          />
        </div>
      </div>

      <div className="mt-3.5 sm:mt-4">
        <label className="mb-1 block text-xs font-bold text-slate-800">
          Ihre Nachricht / Details (optional)
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Gewünschter Termin, besondere Möbel, Aufzug vorhanden etc."
          className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-3 focus:ring-amber-500/20"
        />
      </div>

      {statusMessage && (
        <div
          className={`mt-4 rounded-xl p-3.5 text-xs font-bold sm:p-4 sm:text-sm ${
            status === "success"
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          {statusMessage}
        </div>
      )}

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-[11px] text-slate-500">
          🔒 100% kostenlos & unverbindlich.
        </p>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto rounded-xl bg-[#f59e0b] px-7 py-3.5 text-center text-sm font-black text-slate-950 shadow-md transition hover:bg-[#d97706] hover:text-white active:scale-95 disabled:opacity-60"
        >
          {status === "loading" ? "Wird gesendet..." : "Angebot jetzt anfordern →"}
        </button>
      </div>
    </form>
  );
}
