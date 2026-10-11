# Umzüge LAF – Website

Astro 7 mit React-Komponenten, Tailwind CSS und Node-Adapter. Die aktiven Seiten und Komponenten liegen unter `src/`. Die Verzeichnisse `components/` und `lib/` im Projektstamm sind ältere Bestände; Änderungen dort allein aktualisieren die Website nicht.

## Lokal arbeiten

Mit einer zur installierten Astro-Version passenden Node-Version (hier geprüft mit Node 24):

```sh
npm install
npm run dev
npm run typecheck
npm run build
npm start
```

Die Entwicklung läuft auf Port 3213. Der Build erstellt `dist/`. `npm start` startet den erzeugten Node-Server. Das Startskript `server.js` für das vorhandene Hosting wird zusätzlich nach `dist/server.js` und `dist/nodejs/server.js` kopiert. Die bisherigen Kompatibilitätsordner `.next`, `out` und `build` werden weiterhin angelegt, falls sie fehlen; für eine Veröffentlichung stets den aktuellen Inhalt von `dist/` verwenden.

## Inhalte und Kontakt

- Hauptmetadaten: `src/lib/seo.ts`.
- Unternehmensdaten: `src/components/SeoJsonLd.tsx`.
- Inhaber und Ansprechpartner: Fahri Kalludra.
- Kontaktformular: `src/components/ContactForm.tsx`, E-Mail-Endpunkt: `src/pages/api/contact.ts`.
- Die bestehenden SMTP-Variablen im Hosting bleiben erforderlich. Eine lokale Vorschau bestätigt keine produktive E-Mail-Zustellung.
- Der externe Terminkalender wurde entfernt. Besichtigungen werden über `/kontakt?leistung=Besichtigung#anfrageformular` oder telefonisch angefragt und persönlich bestätigt.
- Die sichtbare Google-Bewertung hat einen ausdrücklich angegebenen Stand. Vor Aktualisierung anhand des tatsächlichen Unternehmensprofils prüfen. Keine unbelegten Kundenstimmen oder Bewertungsdaten in strukturierte Daten aufnehmen.

Die Veröffentlichung und Änderungen am Google-Unternehmensprofil erfolgen separat vom lokalen Build.
