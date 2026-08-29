"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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
      message: formData.get("message") || "Anfrage über Schnellformular",
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

      trackContactFormSubmit("Website_Formular");

      setStatus("success");
      setStatusMessage("Vielen Dank! Ihre Anfrage wird weitergeleitet...");
      form.reset();

      // Redirect to thank you page
      setTimeout(() => {
        router.push("/danke");
      }, 500);
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
          <label htmlFor="contact-name" className="mb-1 block text-xs font-bold text-slate-900">
            Ihr Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="z. B. Max Mustermann"
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-amber-500 focus:bg-white focus:ring-3 focus:ring-amber-500/20"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-1 block text-xs font-bold text-slate-900">
            Telefonnummer *
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            placeholder="z. B. 0170 1234567"
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-amber-500 focus:bg-white focus:ring-3 focus:ring-amber-500/20"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1 block text-xs font-bold text-slate-900">
            E-Mail-Adresse
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="ihre.mail@beispiel.de"
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-amber-500 focus:bg-white focus:ring-3 focus:ring-amber-500/20"
          />
        </div>

        <div>
          <label htmlFor="contact-requestType" className="mb-1 block text-xs font-bold text-slate-900">
            Art der Leistung
          </label>
          <select
            id="contact-requestType"
            name="requestType"
            aria-label="Art der Leistung"
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-3 focus:ring-amber-500/20"
          >
            {requestTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-startLocation" className="mb-1 block text-xs font-bold text-slate-900">
            Von (Startort / Etage)
          </label>
          <input
            id="contact-startLocation"
            name="startLocation"
            type="text"
            placeholder="z. B. Landshut, 2. OG"
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-amber-500 focus:bg-white focus:ring-3 focus:ring-amber-500/20"
          />
        </div>

        <div>
          <label htmlFor="contact-targetLocation" className="mb-1 block text-xs font-bold text-slate-900">
            Nach (Zielort / Etage)
          </label>
          <input
            id="contact-targetLocation"
            name="targetLocation"
            type="text"
            placeholder="z. B. Ergolding, EG"
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-amber-500 focus:bg-white focus:ring-3 focus:ring-amber-500/20"
          />
        </div>
      </div>

      <div className="mt-3.5 sm:mt-4">
        <label htmlFor="contact-message" className="mb-1 block text-xs font-bold text-slate-900">
          Ihre Nachricht / Details (optional)
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          placeholder="Gewünschter Termin, besondere Möbel, Aufzug vorhanden etc."
          className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-amber-500 focus:bg-white focus:ring-3 focus:ring-amber-500/20"
        />
      </div>

      {/* Response Promise Banner */}
      <div className="mt-3.5 flex items-center gap-2 rounded-lg bg-amber-50 border border-amber-300 px-3 py-2 text-xs font-bold text-amber-950">
        <span className="text-sm">⏱️</span>
        <span>Antwort-Garantie: Rückmeldung innerhalb von 4 Stunden (Mo–Sa)</span>
      </div>

      {statusMessage && (
        <div
          className={`mt-4 rounded-xl p-3.5 text-xs font-bold sm:p-4 sm:text-sm ${
            status === "success"
              ? "bg-green-50 border border-green-300 text-green-950"
              : "bg-red-50 border border-red-300 text-red-950"
          }`}
        >
          {statusMessage}
        </div>
      )}

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-[11px] text-slate-600 font-medium">
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
