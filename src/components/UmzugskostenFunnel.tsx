"use client";

import { useState } from "react";
import { trackContactFormSubmit } from "@/lib/gtmEvents";
import {
  ROOM_DATA,
  type RoomType,
  calculateMovingCost,
  CALCULATION_DISCLAIMER,
  MONTAGE_DISCLAIMER,
  STEP2_DISCLAIMER,
  STEP3_DISCLAIMER,
  BUSINESS_HOURS_PROMISE,
} from "@/lib/umzugskosten";

export default function UmzugskostenFunnel() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Step 1 State
  const [rooms, setRooms] = useState<RoomType>("2");
  const [sqm, setSqm] = useState<number>(ROOM_DATA["2"].defaultSqm);

  // Step 2 State
  const [startCity, setStartCity] = useState("Landshut");
  const [startFloor, setStartFloor] = useState("1. OG");
  const [startElevator, setStartElevator] = useState<"ja" | "nein">("nein");

  const [targetCity, setTargetCity] = useState("Landshut & Umgebung");
  const [targetFloor, setTargetFloor] = useState("EG");
  const [targetElevator, setTargetElevator] = useState<"ja" | "nein">("nein");

  // Step 3 State
  const [services, setServices] = useState<{
    montage: boolean;
    halteverbot: boolean;
    entruempelung: boolean;
  }>({
    montage: false,
    halteverbot: false,
    entruempelung: false,
  });

  const [preferredDate, setPreferredDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Dynamic calculation using the shared foundation
  const calc = calculateMovingCost(rooms, sqm);
  const { calculatedVolume, basicMin, basicMax, withMontageMin, withMontageMax } = calc;

  const handleRoomChange = (r: RoomType) => {
    setRooms(r);
    setSqm(ROOM_DATA[r].defaultSqm);
  };

  const handleServiceToggle = (key: keyof typeof services) => {
    setServices((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMessage("Bitte geben Sie Ihren Namen und Ihre Telefonnummer an.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const roomLabels: Record<RoomType, string> = {
      "1": "1-Zimmer-Wohnung",
      "2": "2-Zimmer-Wohnung",
      "3": "3-Zimmer-Wohnung",
      "4": "4-Zimmer-Wohnung",
      haus: "Haus / >4 Zimmer",
    };

    const selectedServicesList = [
      services.montage ? "Möbelmontage angefragt; Leistungsumfang und Preis noch abzustimmen" : null,
      services.halteverbot ? "Halteverbotszone Landshut (nach Aufwand)" : null,
      services.entruempelung ? "Zusätzl. Entrümpelung" : null,
    ]
      .filter(Boolean)
      .join(", ");

    const formattedMessage = `
--- DETAILS AUS UMZUGSKOSTEN-RECHNER ---
Wohnung: ${roomLabels[rooms]} (~${sqm} m²)
Geschätztes Volumen: ca. ${calculatedVolume} m³
Berechneter Richtwert Basis-Umzug: ${basicMin} € - ${basicMax} €
Berechneter Richtwert inkl. Möbelmontage: ${withMontageMin} € - ${withMontageMax} €

AUSZUGSORT:
Ort/Adresse: ${startCity}
Etage: ${startFloor} (Aufzug: ${startElevator.toUpperCase()})

EINZUGSORT:
Ort/Adresse: ${targetCity}
Etage: ${targetFloor} (Aufzug: ${targetElevator.toUpperCase()})

GEWÄHLTE ZUSATZLEISTUNGEN:
${selectedServicesList || "Keine Zusatzleistungen ausgewählt"}

Wunschtermin: ${preferredDate || "Flexibel / zeitnah"}
Kunden-Bemerkung: ${notes || "Keine"}
    `.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          requestType: `Umzugskosten-Rechner (${roomLabels[rooms]})`,
          startLocation: `${startCity} (${startFloor}, Aufzug: ${startElevator})`,
          targetLocation: `${targetCity} (${targetFloor}, Aufzug: ${targetElevator})`,
          message: formattedMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden der Anfrage");
      }

      trackContactFormSubmit("Umzugskosten_Rechner");
      window.location.href = "/danke";
    } catch {
      setErrorMessage(
        "Es gab ein Problem beim Übermitteln. Bitte rufen Sie uns direkt unter 0162 900 75 65 an."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="umzugskosten-rechner"
      className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl transition-all"
    >
      {/* Header Bar with Step Progress */}
      <div className="bg-slate-900 px-6 py-6 text-white sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
              Kostenschätzung &amp; Umzugsanfrage
            </span>
            <h3 className="mt-2 text-xl font-black tracking-tight text-white sm:text-2xl">
              Umzugskosten unverbindlich berechnen
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-black transition ${
                step >= 1 ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-400"
              }`}
            >
              1
            </span>
            <span className="hidden sm:inline">Größe</span>
            <span className="text-slate-600">→</span>
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-black transition ${
                step >= 2 ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-400"
              }`}
            >
              2
            </span>
            <span className="hidden sm:inline">Adressen</span>
            <span className="text-slate-600">→</span>
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-black transition ${
                step === 3 ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-400"
              }`}
            >
              3
            </span>
            <span className="hidden sm:inline">Angebot</span>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-6 sm:p-8 lg:p-10">
        {/* ================= STEP 1: ROOMS & SQM ================= */}
        {step === 1 && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <label className="block text-sm font-black uppercase tracking-wider text-slate-500">
                Schritt 1 von 3 · Wohnungsgröße wählen
              </label>
              <h4 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
                Wie viele Zimmer hat Ihr aktuelles Zuhause?
              </h4>
            </div>

            {/* Room Selector Buttons */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {[
                { key: "1", label: "1 Zimmer", sub: "ca. 30–45 m²" },
                { key: "2", label: "2 Zimmer", sub: "ca. 50–65 m²" },
                { key: "3", label: "3 Zimmer", sub: "ca. 70–90 m²" },
                { key: "4", label: "4 Zimmer", sub: "ca. 95–120 m²" },
                { key: "haus", label: "Haus / 5+", sub: "> 120 m²" },
              ].map((item) => {
                const isActive = rooms === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleRoomChange(item.key as RoomType)}
                    className={`flex flex-col items-center justify-center rounded-2xl border-2 p-4 text-center transition-all ${
                      isActive
                        ? "border-amber-400 bg-amber-50/70 shadow-md ring-2 ring-amber-400/40"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`text-base font-black ${
                        isActive ? "text-amber-950" : "text-slate-800"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="mt-1 text-xs text-slate-500">{item.sub}</span>
                  </button>
                );
              })}
            </div>

            {/* Quadratmeter Slider */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">Wohnfläche anpassen</span>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-sm font-black text-amber-300">
                  ca. {sqm} m²
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="220"
                step="5"
                value={sqm}
                onChange={(e) => setSqm(Number(e.target.value))}
                className="mt-4 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-amber-500"
              />
              <div className="mt-2 flex justify-between text-xs font-semibold text-slate-400">
                <span>20 m²</span>
                <span>80 m²</span>
                <span>140 m²</span>
                <span>220+ m²</span>
              </div>
            </div>

            {/* Live Volume & Price Guidance Box */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Geschätztes Umzugsvolumen
                </span>
                <div className="mt-2 text-3xl font-black text-slate-900">
                  ~ {calculatedVolume} <span className="text-lg font-bold text-amber-600">m³</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Richtwert für Möbel &amp; ca. {Math.round(calculatedVolume * 1.5)} Kartons
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Basis-Schätzung (Nahumzug)
                </span>
                <div className="mt-2 text-2xl font-black text-slate-900">
                  {basicMin} € – {basicMax} €
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Orientierungswert für Transport &amp; Tragen im Raum Landshut
                </p>
              </div>

              <div className="rounded-2xl border border-amber-300 bg-amber-50/60 p-5 text-center shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Mit geschätzter Möbelmontage
                </span>
                <div className="mt-2 text-2xl font-black text-amber-950">
                  {withMontageMin} € – {withMontageMax} €
                </div>
                <p className="mt-1 text-xs text-amber-800">
                  Transport + angenommene Möbelmontage (40–55 €/h)
                </p>
              </div>
            </div>

            {/* Visible Calculation Disclaimer */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-600 space-y-2">
              <p className="font-semibold text-slate-800">{CALCULATION_DISCLAIMER}</p>
              <p className="text-slate-500">{MONTAGE_DISCLAIMER}</p>
            </div>

            {/* Step 1 Actions */}
            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-3.5 text-base font-black text-slate-950 shadow-lg shadow-amber-500/25 transition hover:bg-amber-400 hover:shadow-xl"
              >
                <span>Weiter zu Schritt 2: Adressen &amp; Etagen</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: ADDRESSES & FLOORS ================= */}
        {step === 2 && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <label className="block text-sm font-black uppercase tracking-wider text-slate-500">
                Schritt 2 von 3 · Auszug &amp; Einzug
              </label>
              <h4 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
                Wo startet und endet Ihr Umzug?
              </h4>
            </div>

            {/* Step 2 Disclaimer */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-xs leading-relaxed text-amber-950">
              <p className="font-medium">{STEP2_DISCLAIMER}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Start Address Card */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-sm font-bold text-amber-600">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-xs font-black text-slate-900">
                    A
                  </span>
                  Auszugsort (Aktuelle Wohnung)
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Stadt / PLZ / Straße
                    </label>
                    <input
                      type="text"
                      value={startCity}
                      onChange={(e) => setStartCity(e.target.value)}
                      placeholder="z.B. Landshut Altstadt oder 84030"
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Etage
                      </label>
                      <select
                        value={startFloor}
                        onChange={(e) => setStartFloor(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
                      >
                        <option value="EG">Erdgeschoss</option>
                        <option value="1. OG">1. OG</option>
                        <option value="2. OG">2. OG</option>
                        <option value="3. OG">3. OG</option>
                        <option value="4.+ OG">4. OG oder höher</option>
                        <option value="Haus">Einfamilienhaus</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Aufzug vorhanden?
                      </label>
                      <div className="mt-1 flex gap-2">
                        <button
                          type="button"
                          onClick={() => setStartElevator("ja")}
                          className={`flex-1 rounded-xl border py-2 text-xs font-bold transition ${
                            startElevator === "ja"
                              ? "border-amber-400 bg-amber-400 text-slate-950 font-black"
                              : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          Ja
                        </button>
                        <button
                          type="button"
                          onClick={() => setStartElevator("nein")}
                          className={`flex-1 rounded-xl border py-2 text-xs font-bold transition ${
                            startElevator === "nein"
                              ? "border-amber-400 bg-amber-400 text-slate-950 font-black"
                              : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          Nein
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Target Address Card */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-black text-white">
                    B
                  </span>
                  Einzugsort (Neues Zuhause)
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Stadt / PLZ / Straße
                    </label>
                    <input
                      type="text"
                      value={targetCity}
                      onChange={(e) => setTargetCity(e.target.value)}
                      placeholder="z.B. Ergolding, Altdorf oder Landshut"
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Etage
                      </label>
                      <select
                        value={targetFloor}
                        onChange={(e) => setTargetFloor(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
                      >
                        <option value="EG">Erdgeschoss</option>
                        <option value="1. OG">1. OG</option>
                        <option value="2. OG">2. OG</option>
                        <option value="3. OG">3. OG</option>
                        <option value="4.+ OG">4. OG oder höher</option>
                        <option value="Haus">Einfamilienhaus</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Aufzug vorhanden?
                      </label>
                      <div className="mt-1 flex gap-2">
                        <button
                          type="button"
                          onClick={() => setTargetElevator("ja")}
                          className={`flex-1 rounded-xl border py-2 text-xs font-bold transition ${
                            targetElevator === "ja"
                              ? "border-amber-400 bg-amber-400 text-slate-950 font-black"
                              : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          Ja
                        </button>
                        <button
                          type="button"
                          onClick={() => setTargetElevator("nein")}
                          className={`flex-1 rounded-xl border py-2 text-xs font-bold transition ${
                            targetElevator === "nein"
                              ? "border-amber-400 bg-amber-400 text-slate-950 font-black"
                              : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          Nein
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 Actions */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-sm font-bold text-slate-600 transition hover:text-slate-900"
              >
                ← Zurück zu Schritt 1
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-3.5 text-base font-black text-slate-950 shadow-lg shadow-amber-500/25 transition hover:bg-amber-400 hover:shadow-xl"
              >
                <span>Weiter zu Schritt 3: Zusatzleistungen &amp; Anfrage</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 3: SERVICES & CONTACT ================= */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-8 animate-fadeIn">
            <div>
              <label className="block text-sm font-black uppercase tracking-wider text-slate-500">
                Schritt 3 von 3 · Zusatzleistungen &amp; Anfrage
              </label>
              <h4 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
                Benötigen Sie handwerkliche Unterstützung oder Zusatzleistungen?
              </h4>
            </div>

            {/* Step 3 Disclaimer */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-xs leading-relaxed text-amber-950">
              <p className="font-medium">{STEP3_DISCLAIMER}</p>
            </div>

            {/* Checkbox Options */}
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  key: "montage",
                  title: "Möbelmontage",
                  desc: "Demontage und Montage von Schränken und Betten. Leistungsumfang und Preis klären wir im individuellen Angebot. Küchenmontage gesondert auf Anfrage.",
                },
                {
                  key: "halteverbot",
                  title: "Halteverbotszone Landshut",
                  desc: "Behördliche Genehmigung & Schilder (Kosten nach Prüfung von Standort & Dauer)",
                },
                {
                  key: "entruempelung",
                  title: "Entrümpelung / Altmöbel",
                  desc: "Fachgerechte Entsorgung nicht mehr benötigter Möbel oder Kellerinhalte",
                },
              ].map((serviceItem) => {
                const isChecked = services[serviceItem.key as keyof typeof services];
                return (
                  <div
                    key={serviceItem.key}
                    onClick={() => handleServiceToggle(serviceItem.key as keyof typeof services)}
                    className={`cursor-pointer rounded-2xl border-2 p-4 transition-all ${
                      isChecked
                        ? "border-amber-400 bg-amber-50/70 shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-1 h-5 w-5 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                      />
                      <div>
                        <div className="text-sm font-black text-slate-900">
                          {serviceItem.title}
                        </div>
                        <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                          {serviceItem.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Fields */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <h5 className="text-sm font-black uppercase tracking-wider text-slate-700">
                Ihre Kontaktdaten für Ihr individuelles Angebot
              </h5>

              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {BUSINESS_HOURS_PROMISE}
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
                    placeholder="Für Rückfragen &amp; Terminabstimmung"
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Für Ihr individuelles Angebot"
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Wunschtermin (oder flexibel)
                  </label>
                  <input
                    type="text"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    placeholder="z.B. Ende des Monats oder TT.MM.JJJJ"
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Besondere Wünsche oder Fragen (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Besondere Möbelstücke (z.B. schweres Klavier, USM Haller), enger Hausflur etc."
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                {errorMessage}
              </div>
            )}

            {/* Trust Banner & Submit */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-amber-500/10 p-4 text-xs font-bold text-slate-700 border border-amber-300/40">
                <span className="flex items-center gap-1.5 text-amber-900">
                  <svg className="h-4 w-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Unverbindliche Kostenschätzung
                </span>
                <span className="flex items-center gap-1.5 text-amber-900">
                  <svg className="h-4 w-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Angebot innerhalb von 4 Stunden (Geschäftszeiten)
                </span>
                <span className="flex items-center gap-1.5 text-amber-900">
                  <svg className="h-4 w-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Kostenlos &amp; unverbindlich
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-sm font-bold text-slate-600 transition hover:text-slate-900"
                >
                  ← Zurück zu Schritt 2
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-black text-slate-950 shadow-xl shadow-amber-500/30 transition hover:bg-amber-400 sm:w-auto disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sende Anfrage...</span>
                  ) : (
                    <>
                      <span>Kostenloses Umzugsangebot anfordern</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
