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
      className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-6 shadow-[0_30px_100px_rgba(0,0,0,0.12)] md:p-8"
    >
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#f6c21a]/25 blur-3xl" />

      <div className="relative">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-black text-black">
              Name *
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Ihr Name"
              className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black text-black">
              Telefon *
            </label>
            <input
              name="phone"
              type="tel"
              required
              placeholder="Ihre Telefonnummer"
              className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black text-black">
              E-Mail
            </label>
            <input
              name="email"
              type="email"
              placeholder="Ihre E-Mail"
              className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black text-black">
              Anfrageart
            </label>
            <select
              name="requestType"
              className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none transition focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
            >
              {requestTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-black text-black">
              Startort
            </label>
            <input
              name="startLocation"
              type="text"
              placeholder="z. B. Landshut"
              className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black text-black">
              Zielort
            </label>
            <input
              name="targetLocation"
              type="text"
              placeholder="z. B. München"
              className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-black text-black">
            Nachricht *
          </label>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Beschreiben Sie kurz Ihr Anliegen, gewünschtes Datum, Etage, Möbelumfang oder besondere Hinweise."
            className="w-full resize-none rounded-2xl border border-black/10 bg-[#f7f7f2] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-[#f6c21a] focus:bg-white focus:ring-4 focus:ring-[#f6c21a]/20"
          />
        </div>

        {statusMessage && (
          <div
            className={`mt-5 rounded-2xl p-4 text-sm font-bold ${
              status === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {statusMessage}
          </div>
        )}

        <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="text-sm leading-6 text-black/50">
            Pflichtfelder sind mit * markiert.
          </p>

          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-[#f6c21a] px-8 py-4 font-black text-black shadow-[0_18px_60px_rgba(246,194,26,0.25)] transition hover:-translate-y-1 hover:bg-black hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Wird gesendet..." : "Anfrage senden"}
          </button>
        </div>
      </div>
    </form>
  );
}
