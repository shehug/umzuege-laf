"use client";

import { useState } from "react";
import { trackContactFormSubmit } from "@/lib/gtmEvents";

const requestTypes = [
  "Privatumzug",
  "Firmenumzug",
  "Entrümpelung",
  "Möbelmontage",
  "Einpackservice",
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
      setStatusMessage("Ihre Anfrage wurde erfolgreich gesendet.");
      form.reset();
    } catch {
      setStatus("error");
      setStatusMessage(
        "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-4.5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:rounded-[2.2rem] sm:p-7 md:p-8"
    >
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#f6c21a]/25 blur-3xl" />

      <div className="relative">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          <div>
            <label className="mb-1.5 block text-xs font-black text-black sm:mb-2 sm:text-sm">
              Name *
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Ihr Name"
              className="w-full rounded-xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-black text-black sm:mb-2 sm:text-sm">
              Telefon *
            </label>
            <input
              name="phone"
              type="tel"
              required
              placeholder="Ihre Telefonnummer"
              className="w-full rounded-xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-black text-black sm:mb-2 sm:text-sm">
              E-Mail
            </label>
            <input
              name="email"
              type="email"
              placeholder="Ihre E-Mail"
              className="w-full rounded-xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-black text-black sm:mb-2 sm:text-sm">
              Anfrageart
            </label>
            <select
              name="requestType"
              className="w-full rounded-xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-sm text-black outline-none transition focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
            >
              {requestTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-black text-black sm:mb-2 sm:text-sm">
              Startort
            </label>
            <input
              name="startLocation"
              type="text"
              placeholder="z. B. Landshut"
              className="w-full rounded-xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-black text-black sm:mb-2 sm:text-sm">
              Zielort
            </label>
            <input
              name="targetLocation"
              type="text"
              placeholder="z. B. München"
              className="w-full rounded-xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
            />
          </div>
        </div>

        <div className="mt-4 sm:mt-5">
          <label className="mb-1.5 block text-xs font-black text-black sm:mb-2 sm:text-sm">
            Nachricht *
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Beschreiben Sie kurz Ihr Anliegen, gewünschtes Datum, Etage, Möbelumfang oder besondere Hinweise."
            className="w-full resize-none rounded-xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
          />
        </div>

        {statusMessage && (
          <div
            className={`mt-4 rounded-xl p-3.5 text-xs font-bold sm:mt-5 sm:rounded-2xl sm:p-4 sm:text-sm ${
              status === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {statusMessage}
          </div>
        )}

        <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="text-xs leading-5 text-black/50 sm:text-sm">
            Pflichtfelder sind mit * markiert.
          </p>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full bg-[#f6c21a] px-6 py-3.5 text-center text-sm font-black text-black shadow-[0_15px_40px_rgba(246,194,26,0.25)] transition hover:-translate-y-1 hover:bg-black hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            {status === "loading" ? "Wird gesendet..." : "Anfrage senden"}
          </button>
        </div>
      </div>
    </form>
  );
}
