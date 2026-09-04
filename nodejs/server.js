import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let entryPath;
if (fs.existsSync(path.join(__dirname, "server/entry.mjs"))) {
  entryPath = path.join(__dirname, "server/entry.mjs");
} else if (fs.existsSync(path.join(__dirname, "dist/server/entry.mjs"))) {
  entryPath = path.join(__dirname, "dist/server/entry.mjs");
} else {
  entryPath = path.join(__dirname, "../dist/server/entry.mjs");
}

console.log("[Hostinger Boot] Starting Astro Standalone from:", entryPath);
import(entryPath);
