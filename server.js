import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const entryPath = fs.existsSync(path.join(__dirname, "dist/server/entry.mjs"))
  ? path.join(__dirname, "dist/server/entry.mjs")
  : path.join(__dirname, "../dist/server/entry.mjs");

import(entryPath);
