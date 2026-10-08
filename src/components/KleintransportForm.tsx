"use client";

import { useState } from "react";
import { trackContactFormSubmit } from "@/lib/gtmEvents";

const COMMON_ITEMS = [
  "Sofa / Couch",
  "Waschmaschine / Trockner",
  "Kühlschrank / E-Gerät",
  "Bett & Matratze",
  "Kleiderschrank (zerlegt)",
  "Esstisch & Stühle",
  "IKEA / Möbelhaus-Pakete",
  "Baumarkt-Einkauf",
  "Kleinanzeigen-Kauf",
];

export default function KleintransportForm() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [customItem, setCustomItem] = useState("");
  const [pickupLocation, setPickupLocation] = useState("Landshut");
  const [deliveryLocation, setDeliveryLocation] = useState("Landshut");
  const [helpersCount, setHelpersCount] = useState<"1" | "2">("2");
  const [preferredTime, setPreferredTime] = useState("Spontan / heute oder morgen");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const toggleItem = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setStatus("error");
      setStatusMsg("Bitte mindestens Name und Telefonnummer angeben.");
      return;
    }

    setStatus("loading");
    setStatusMsg("");

    const allItems = [...selectedItems, customItem.trim()].filter(Boolean).join(", ");

    const formattedMessage = `
--- ANFRAGE KLEINTRANSPORT LANDSHUT ---
Transportgüter: ${allItems || "Nicht spezifiziert / Einzeltransport"}
Abholort: ${pickupLocation}
Lieferort: ${deliveryLocation}
Träger-Team: ${helpersCount === "2" ? "2 Mann + Transporter (inkl. Tragen)" : "1 Fahrer (mit Mithilfe des Kunden)"}
Wunschzeitpunkt: ${preferredTime}
Kunde: ${name}
Telefon: ${phone}
E-Mail: ${email || "Keine"}
    `.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          requestType: "Kleintransport",
          startLocation: pickupLocation,
          targetLocation: deliveryLocation,
          message: formattedMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Absenden");
      }

      trackContactFormSubmit("Kleintransport_Formular");
      setStatus("success");
      setStatusMsg("Vielen Dank! Wir rufen Sie für die Express-Bestätigung sofort an.");
      window.location.href = "/danke";
    } catch {
      setStatus("error");
      setStatusMsg(
        "Fehler beim Senden. Rufen Sie uns bitte direkt an: 0162 900 75 65"
      );
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-2xl">
      <div className="border-b border-slate-100 pb-5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-900">
          <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
          Express-Buchung & Spontanservice
        </span>
        <h3 className="mt-2 text-xl font-black text-slate-900 sm:text-2xl">
          Kleintransport in Landshut anfragen
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-600">
          Transportdaten übermitteln und ein individuelles Angebot anfordern. Kurzfristige Termine sind nach Verfügbarkeit möglich.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        {/* Quick Item Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
            Was soll transportiert werden?
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {COMMON_ITEMS.map((item) => {
              const isSelected = selectedItems.includes(item);
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleItem(item)}
                  className={`rounded-xl border px-3 py-1.5 text-xs font-bold transition ${
                    isSelected
                      ? "border-amber-400 bg-amber-400 text-slate-950 font-black shadow-sm"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {isSelected ? "✓ " : "+ "}
                  {item}
                </button>
              );
            })}
          </div>

          <input
            type="text"
            value={customItem}
            onChange={(e) => setCustomItem(e.target.value)}
            placeholder="Oder anderes Möbelstück / Beschreibung eintragen..."
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
          />
        </div>

        {/* Pickup and Delivery Locations */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Abholort (z.B. IKEA Eching, Möbelhaus oder Adresse)
            </label>
            <input
              type="text"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              placeholder="z.B. Landshut Nikola oder IKEA Eching"
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Lieferort (Zieladresse)
            </label>
            <input
              type="text"
              value={deliveryLocation}
              onChange={(e) => setDeliveryLocation(e.target.value)}
              placeholder="z.B. Landshut Altstadt, Ergolding etc."
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
            />
          </div>
        </div>

        {/* Helpers & Timing */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Tragehilfe gewünscht?
            </label>
            <div className="mt-1 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setHelpersCount("2")}
                className={`rounded-xl border py-2 text-xs font-bold transition text-center ${
                  helpersCount === "2"
                    ? "border-amber-400 bg-amber-400 text-slate-950 font-black shadow-sm"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                2 Mann (Full Service)
              </button>
              <button
                type="button"
                onClick={() => setHelpersCount("1")}
                className={`rounded-xl border py-2 text-xs font-bold transition text-center ${
                  helpersCount === "1"
                    ? "border-amber-400 bg-amber-400 text-slate-950 font-black shadow-sm"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                1 Mann (Fahrer hilft)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Wann soll der Transport stattfinden?
            </label>
            <select
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
            >
              <option value="Sofort / Heute Express">Sofort / Heute Express</option>
              <option value="Morgen">Morgen</option>
              <option value="In den nächsten Tagen">In den nächsten Tagen</option>
              <option value="Am Wochenende">Am Wochenende</option>
              <option value="Bestimmtes Datum nach Absprache">Bestimmtes Datum nach Absprache</option>
            </select>
          </div>
        </div>

        {/* Contact Details */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                Ihr Name <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Vor- & Nachname"
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-400 focus:outline-none"
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
                placeholder="Für Blitz-Bestätigung"
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                E-Mail (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@beispiel.de"
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>
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
            <span>Prüfe Verfügbarkeit...</span>
          ) : (
            <>
              <span>Kleintransport jetzt anfragen</span>
              <span>→</span>
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-6 text-[11px] font-bold text-slate-500">
          <span>⚡ Blitz-Rückmeldung</span>
          <span>🔒 Verbindlicher Festpreis</span>
          <span>🛡️ Voller Versicherungsschutz</span>
        </div>
      </form>
    </div>
  );
}
