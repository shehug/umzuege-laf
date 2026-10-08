export type RoomType = "1" | "2" | "3" | "4" | "haus";

export interface RoomPreset {
  key: RoomType;
  label: string;
  subLabel: string;
  typeLabel: string;
  defaultSqm: number;
  baseMin: number;
  baseMax: number;
  m3Factor: number;
}

export const ROOM_DATA: Record<RoomType, RoomPreset> = {
  "1": {
    key: "1",
    label: "1 Zimmer",
    subLabel: "ca. 30–45 m²",
    typeLabel: "1-Zimmer-Wohnung",
    defaultSqm: 35,
    baseMin: 350,
    baseMax: 550,
    m3Factor: 0.38,
  },
  "2": {
    key: "2",
    label: "2 Zimmer",
    subLabel: "ca. 50–65 m²",
    typeLabel: "2-Zimmer-Wohnung",
    defaultSqm: 60,
    baseMin: 550,
    baseMax: 850,
    m3Factor: 0.38,
  },
  "3": {
    key: "3",
    label: "3 Zimmer",
    subLabel: "ca. 70–90 m²",
    typeLabel: "3-Zimmer-Wohnung",
    defaultSqm: 80,
    baseMin: 850,
    baseMax: 1250,
    m3Factor: 0.38,
  },
  "4": {
    key: "4",
    label: "4 Zimmer",
    subLabel: "ca. 95–120 m²",
    typeLabel: "4-Zimmer-Wohnung",
    defaultSqm: 105,
    baseMin: 1250,
    baseMax: 1750,
    m3Factor: 0.40,
  },
  haus: {
    key: "haus",
    label: "Haus / 5+",
    subLabel: "> 120 m²",
    typeLabel: "Haus / 5+ Zimmer",
    defaultSqm: 140,
    baseMin: 1750,
    baseMax: 2600,
    m3Factor: 0.42,
  },
};

export interface CalculationResult {
  sqm: number;
  calculatedVolume: number;
  basicMin: number;
  basicMax: number;
  montageHoursMin: number;
  montageHoursMax: number;
  montageCostMin: number;
  montageCostMax: number;
  withMontageMin: number;
  withMontageMax: number;
}

export function calculateMovingCost(rooms: RoomType, sqm: number): CalculationResult {
  const currentData = ROOM_DATA[rooms];
  const calculatedVolume = Math.max(8, Math.round(sqm * currentData.m3Factor));

  const sqmRatio = sqm / currentData.defaultSqm;
  const scaleFactor = 0.4 + 0.6 * sqmRatio;

  const basicMin = Math.round((currentData.baseMin * scaleFactor) / 10) * 10;
  const basicMax = Math.round((currentData.baseMax * scaleFactor) / 10) * 10;

  const montageHoursMin = Math.max(2, Math.round(sqm * 0.05));
  const montageHoursMax = Math.max(3, Math.round(sqm * 0.075));
  const montageCostMin = montageHoursMin * 40;
  const montageCostMax = montageHoursMax * 55;

  const withMontageMin = basicMin + montageCostMin;
  const withMontageMax = basicMax + montageCostMax;

  return {
    sqm,
    calculatedVolume,
    basicMin,
    basicMax,
    montageHoursMin,
    montageHoursMax,
    montageCostMin,
    montageCostMax,
    withMontageMin,
    withMontageMax,
  };
}

export function formatEuro(val: number): string {
  return val.toLocaleString("de-DE") + " €";
}

export function formatRange(min: number, max: number): string {
  return `${min.toLocaleString("de-DE")} € – ${max.toLocaleString("de-DE")} €`;
}

export interface TableRowData {
  key: RoomType;
  type: string;
  area: string;
  volume: string;
  basicPrice: string;
  withMontagePrice: string;
  popular: boolean;
}

export const tableRows: TableRowData[] = (
  ["1", "2", "3", "4", "haus"] as RoomType[]
).map((key) => {
  const preset = ROOM_DATA[key];
  const calc = calculateMovingCost(key, preset.defaultSqm);
  return {
    key,
    type: preset.typeLabel,
    area: `Beispiel: ${preset.defaultSqm} m²`,
    volume: `ca. ${calc.calculatedVolume} m³`,
    basicPrice: formatRange(calc.basicMin, calc.basicMax),
    withMontagePrice: formatRange(calc.withMontageMin, calc.withMontageMax),
    popular: key === "2",
  };
});

export const CALCULATION_DISCLAIMER =
  "Die Beträge sind unverbindliche Modellschätzungen einschließlich Umsatzsteuer und keine verbindliche Preisliste von Umzüge LAF. Die Basis-Schätzung dient der Orientierung für einen Nahumzug im Raum Landshut. Entfernung, Etagen, Aufzug, Tragewege und zusätzliche Leistungen werden im angezeigten Betrag nicht individuell berücksichtigt. Ihr Angebot erstellen wir nach Prüfung Ihrer Angaben.";

export const MONTAGE_DISCLAIMER =
  "Der Montageanteil basiert auf angenommenen Personenstunden und einem Modellwert von 40–55 € je Monteurstunde einschließlich Umsatzsteuer. Der tatsächliche Aufwand hängt von Ihren Möbeln ab. Küchenmontage, Anpassungsarbeiten und Anschlüsse sind nicht Bestandteil dieser Schätzung.";

export const STEP2_DISCLAIMER =
  "Ihre Angaben zu Adressen, Etagen und Aufzug helfen uns bei der Angebotserstellung. Sie verändern die angezeigte Modellschätzung nicht.";

export const STEP3_DISCLAIMER =
  "Halteverbotszone und Entrümpelung sind nicht in der angezeigten Schätzung enthalten. Wir berücksichtigen diese Leistungen bei der Erstellung Ihres Angebots.";

export const BUSINESS_HOURS_PROMISE =
  "Bei vollständigen Angaben zu Ihrem Umzug erhalten Sie innerhalb von vier Stunden während unserer Geschäftszeiten ein Angebot. Geschäftszeiten: Montag bis Samstag, 08:00–18:00 Uhr. Gezählt werden ausschließlich Stunden innerhalb der Geschäftszeiten. Außerhalb dieser Zeiten beginnt die Frist mit dem nächsten Geschäftszeitbeginn.";

export const faqs = [
  {
    q: "Was kostet ein Umzug in Landshut?",
    a: "Die Kosten hängen unter anderem von Umzugsvolumen, Entfernung, Etagen, Tragewegen und gewünschten Zusatzleistungen ab. Die Beispiele auf dieser Seite dienen der Orientierung. Ihr individuelles Angebot erstellen wir nach Prüfung Ihrer Angaben.",
  },
  {
    q: "Was kostet der Umzug einer 1-Zimmer-Wohnung?",
    a: "Auch bei einer 1-Zimmer-Wohnung hängt der Aufwand von der Einrichtung, den Zugangsbedingungen und der Entfernung ab. Wählen Sie Ihre Wohnfläche im Rechner für eine erste Modellschätzung und senden Sie uns anschließend Ihre Umzugsdaten.",
  },
  {
    q: "Was kostet der Umzug einer 3-Zimmer-Wohnung?",
    a: "Die Zimmerzahl allein reicht für eine genaue Kalkulation nicht aus. Entscheidend sind auch Möbelmenge, Etagen, Tragewege und Zusatzleistungen. Der Rechner liefert eine unverbindliche Orientierung; das Angebot folgt nach Prüfung Ihrer Angaben.",
  },
  {
    q: "Kann ich einen Umzug von Landshut nach München anfragen?",
    a: "Ja, Sie können uns Start- und Zieladresse für Ihren Umzug mitteilen. Die tatsächliche Entfernung und die Bedingungen vor Ort berücksichtigen wir im individuellen Angebot. Sie werden in der angezeigten Modellschätzung nicht berechnet.",
  },
  {
    q: "Wird eine Halteverbotszone im Rechner berücksichtigt?",
    a: "Sie können eine Halteverbotszone in Ihrer Anfrage auswählen. Ihre Kosten sind nicht in der angezeigten Modellschätzung enthalten. Die Durchführung und den Preis klären wir anhand des Standorts und der erforderlichen Genehmigung.",
  },
  {
    q: "Ist Möbel- oder Küchenmontage im geschätzten Preis enthalten?",
    a: "Der Rechner zeigt neben der Basis-Schätzung eine Variante mit geschätzter Möbelmontage. Sie beruht auf angenommenen Personenstunden. Küchenmontage, Anpassungsarbeiten und Anschlüsse sind nicht enthalten und müssen gesondert abgestimmt werden.",
  },
  {
    q: "Ist das Rechnerergebnis ein verbindlicher Festpreis?",
    a: "Nein. Das Rechnerergebnis ist eine unverbindliche Modellschätzung. Ein verbindliches Angebot erhalten Sie nach Prüfung Ihrer Umzugsdaten und Abstimmung des Leistungsumfangs.",
  },
];
