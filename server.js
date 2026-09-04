import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const candidates = [
  path.join(__dirname, "server/entry.mjs"),
  path.join(__dirname, "../server/entry.mjs"),
  path.join(__dirname, "dist/server/entry.mjs"),
  path.join(__dirname, "../dist/server/entry.mjs"),
];

let entryPath = null;
for (const c of candidates) {
  if (fs.existsSync(c)) {
    entryPath = path.resolve(c);
    break;
  }
}

if (!entryPath) {
  console.error("[Hostinger Boot] FATAL: Could not find entry.mjs. Checked:", candidates);
  process.exit(1);
}

console.log("[Hostinger Boot] Starting Astro Standalone from:", entryPath);
import(entryPath);
