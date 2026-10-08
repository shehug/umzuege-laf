"use client";

import { useState } from "react";
import { trackContactFormSubmit } from "@/lib/gtmEvents";

export default function SeniorenumzugForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"senior" | "angehoerige">("senior");
  const [moveType, setMoveType] = useState("Seniorenresidenz / Barrierefreie Wohnung");
  const [hasPflegegrad, setHasPflegegrad] = useState("ja");
  const [preferredContact, setPreferredContact] = useState("telefon");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setStatus("error");
      setStatusMsg("Bitte geben Sie Ihren Namen und Ihre Telefonnummer an.");
      return;
    }

    setStatus("loading");
    setStatusMsg("");

    const roleLabel = role === "senior" ? "Senior/in selbst" : "Angehörige/r (Sohn/Tochter/Betreuer)";

    const formattedMessage = `
--- ANFRAGE SENIORENUMZUG LANDSHUT ---
Anfragende Person: ${roleLabel}
Name: ${name}
Telefon: ${phone}
E-Mail: ${email || "Keine"}
Geplanter Umzug nach: ${moveType}
Liegt ein Pflegegrad vor: ${hasPflegegrad.toUpperCase()} (Pflegekassenzuschuss nach Prüfung möglich)
Bevorzugte Kontaktaufnahme: ${preferredContact === "telefon" ? "Telefonischer Rückruf" : "E-Mail"}
Nachricht / Wünsche: ${message || "Wünscht kostenlose & unverbindliche Beratung vor Ort"}
    `.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          requestType: "Seniorenumzug Beratung",
          startLocation: "Landshut & Umgebung",
          targetLocation: moveType,
          message: formattedMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden");
      }

      trackContactFormSubmit("Seniorenumzug_Formular");
      setStatus("success");
      setStatusMsg("Vielen Dank! Wir rufen Sie zeitnah und verständnisvoll an.");
      window.location.href = "/danke";
    } catch {
      setStatus("error");
      setStatusMsg(
        "Es gab ein Problem. Bitte rufen Sie uns direkt persönlich unter 0162 900 75 65 an."
      );
    }
  };

  return (
    <div className="rounded-3xl border border-amber-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xl">
      <div className="border-b border-slate-100 pb-5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-900">
          Kostenlose & persönliche Beratung
        </span>
        <h3 className="mt-2 text-xl font-black text-slate-900 sm:text-2xl">
          Rückruf oder Vor-Ort-Besichtigung anfordern
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-600">
          Wir nehmen uns Zeit für Sie und Ihre Angehörigen. Völlig unverbindlich und stressfrei.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {/* Role Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
            Wer stellt die Anfrage?
          </label>
          <div className="mt-1.5 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setRole("senior")}
              className={`rounded-xl border py-2.5 px-3 text-xs sm:text-sm font-bold transition text-center ${
                role === "senior"
                  ? "border-amber-400 bg-amber-400 text-slate-950 font-black shadow-sm"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
            >
              Ich ziehe selbst um
            </button>
            <button
              type="button"
              onClick={() => setRole("angehoerige")}
              className={`rounded-xl border py-2.5 px-3 text-xs sm:text-sm font-bold transition text-center ${
                role === "angehoerige"
                  ? "border-amber-400 bg-amber-400 text-slate-950 font-black shadow-sm"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
            >
              Angehörige / Kinder
            </button>
          </div>
        </div>

        {/* Name & Phone */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Ihr Name <span className="text-amber-600">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Vor- und Nachname"
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Telefonnummer <span className="text-amber-600">*</span>
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Für einen kurzen Rückruf"
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
            />
          </div>
        </div>

        {/* Email & Move Type */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              E-Mail-Adresse (Optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="z.B. für schriftliches Angebot"
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Art des neuen Zuhauses
            </label>
            <select
              value={moveType}
              onChange={(e) => setMoveType(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
            >
              <option value="Seniorenresidenz / Betreutes Wohnen">Betreutes Wohnen / Seniorenresidenz</option>
              <option value="Kleinere / barrierefreie Wohnung">Kleinere barrierefreie Wohnung</option>
              <option value="Pflegeheim / Altenheim">Senioren- oder Pflegeheim</option>
              <option value="Zu Angehörigen ins Haus">Einzug bei Kindern / Angehörigen</option>
              <option value="Noch in Klärung">Noch in Klärung</option>
            </select>
          </div>
        </div>

        {/* Pflegegrad question */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4">
          <label className="block text-xs font-black uppercase tracking-wider text-amber-950">
            Liegt ein Pflegegrad vor?
          </label>
          <p className="mt-0.5 text-xs text-amber-900 leading-relaxed">
            Bei einem Pflegegrad kann ein geeigneter Umzug als wohnumfeldverbessernde Maßnahme bezuschusst werden. Ob und in welcher Höhe eine Förderung möglich ist, entscheidet Ihre Pflegekasse.
          </p>
          <div className="mt-2.5 flex gap-3">
            {[
              { val: "ja", label: "Ja, Pflegegrad vorhanden" },
              { val: "nein", label: "Nein / nicht bekannt" },
              { val: "beantragt", label: "Gerade beantragt" },
            ].map((p) => (
              <label key={p.val} className="flex cursor-pointer items-center gap-1.5 text-xs font-bold text-slate-800">
                <input
                  type="radio"
                  name="pflegegrad"
                  checked={hasPflegegrad === p.val}
                  onChange={() => setHasPflegegrad(p.val)}
                  className="text-amber-500 focus:ring-amber-400"
                />
                <span>{p.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
            Ihre Wünsche oder besondere Fragen (Optional)
          </label>
          <textarea
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="z.B. Einpackservice gewünscht, Küchenaufbau, Wohnungsauflösung der alten Wohnung etc."
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
          ></textarea>
        </div>

        {status === "error" && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700">
            {statusMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-500 px-6 py-4 text-base font-black text-slate-950 shadow-xl shadow-amber-500/25 transition hover:bg-amber-400 disabled:opacity-50"
        >
          {status === "loading" ? (
            <span>Sende Anfrage...</span>
          ) : (
            <>
              <span>Kostenlose Seniorenumzug-Beratung anfordern</span>
              <span>→</span>
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-slate-500">
          Ihre Daten werden vertraulich behandelt. Keine Werbeanrufe, nur persönliche Abstimmung.
        </p>
      </form>
    </div>
  );
}
