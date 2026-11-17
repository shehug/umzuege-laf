import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');

console.log('🔍 [SEO-Check] Starte automatischen Pre-Build Qualitäts-Check...\n');

let errorCount = 0;
let warningCount = 0;

// 1. Suche nach verbotenen Phrasen und meta keywords in allen Quelltexten
const FORBIDDEN_PHRASES = [
  /100\s*%\s*versichert/i,
  /100\s*%\s*versicherter/i,
];

function scanFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') continue;
      scanFiles(fullPath);
    } else if (/\.(astro|html|tsx|ts|json)$/.test(entry.name)) {
      // Ignoriere dieses Prüfskript selbst
      if (entry.name === 'seo-check.mjs') continue;
      
      const content = fs.readFileSync(fullPath, 'utf-8');
      const relPath = path.relative(rootDir, fullPath);

      // Check: <meta name="keywords">
      if (/<meta[^>]+name=["']keywords["']/i.test(content)) {
        console.error(`❌ [Keywords] <meta name="keywords"> gefunden in: ${relPath}`);
        errorCount++;
      }

      // Check: Verbotene Haftungs-Phrasen
      for (const phrase of FORBIDDEN_PHRASES) {
        if (phrase.test(content)) {
          // Ausgenommen: haftung.astro erklärt historische oder fehlerhafte Aussagen
          if (entry.name !== 'haftung.astro') {
            console.error(`❌ [Haftungs-Abmahnrisiko] Verbotene Phrase "${phrase.source}" gefunden in: ${relPath}`);
            errorCount++;
          }
        }
      }

      // Check: Exakt 1x <h1> pro Astro-Seite (nur im Ordner src/pages)
      if (entry.name.endsWith('.astro') && relPath.startsWith('src' + path.sep + 'pages') && !relPath.includes('admin') && !relPath.includes('api')) {
        // Prüfe ob Redirect
        if (content.includes('Astro.redirect')) continue;

        const h1Matches = content.match(/<h1[\s>]/gi);
        const h1Count = h1Matches ? h1Matches.length : 0;
        if (h1Count === 0) {
          // Einige Wrapper-Landingpages nutzen Komponenten mit h1
          if (!content.includes('h1') && !content.includes('LocalSeoLanding') && !content.includes('h1Top')) {
            console.warn(`⚠️ [H1 Fehlt] Kein <h1>-Tag gefunden in: ${relPath}`);
            warningCount++;
          }
        } else if (h1Count > 1) {
          console.error(`❌ [Mehrfach-H1] ${h1Count}x <h1>-Tag gefunden in: ${relPath}`);
          errorCount++;
        }
      }
    }
  }
}

scanFiles(srcDir);

// 2. Prüfe Meta-Titles und Meta-Descriptions in src/lib/seo.ts
const seoFile = path.join(srcDir, 'lib', 'seo.ts');
if (fs.existsSync(seoFile)) {
  const seoContent = fs.readFileSync(seoFile, 'utf-8');
  
  // Extrahiere title und description aus den Objekten
  const titleMatches = [...seoContent.matchAll(/title:\s*["'`](.*?)["'`]/g)];
  for (const match of titleMatches) {
    const title = match[1];
    // Ignoriere Platzhalter oder Typdefinitionen
    if (title.length > 60 && !title.includes('${') && !title.includes('page.title')) {
      console.warn(`⚠️ [Title zu lang] "${title}" (${title.length} Zeichen, max. 60 empfohlen)`);
      warningCount++;
    }
  }

  const descMatches = [...seoContent.matchAll(/description:\s*["'`](.*?)["'`]/g)];
  for (const match of descMatches) {
    const desc = match[1];
    if (desc.length > 165 && !desc.includes('${') && !desc.includes('page.description')) {
      console.warn(`⚠️ [Description zu lang] (${desc.length} Zeichen, max. 155 empfohlen): "${desc.slice(0, 50)}..."`);
      warningCount++;
    }
  }
}

console.log('\n📊 [SEO-Check Ergebnis]:');
console.log(`   - Fehler (kritisch): ${errorCount}`);
console.log(`   - Warnungen: ${warningCount}`);

if (errorCount > 0) {
  console.error('\n❌ SEO-Check FEHLGESCHLAGEN: Bitte kritische Verstöße vor dem Deployment beheben.\n');
  process.exit(1);
} else {
  console.log('\n✅ SEO-Check ERFOLGREICH: Alle Rechts- und Strukturregeln eingehalten.\n');
  process.exit(0);
}
