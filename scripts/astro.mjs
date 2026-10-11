import { spawnSync } from "node:child_process";
import { copyFileSync, cpSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const cli = fileURLToPath(new URL("../node_modules/astro/bin/astro.mjs", import.meta.url));
const args = process.argv.slice(2);
const result = spawnSync(process.execPath, [cli, ...args], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, ASTRO_TELEMETRY_DISABLED: "1" },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

if (args[0] === "build") {
  const source = fileURLToPath(new URL("../server.js", import.meta.url));
  const dist = fileURLToPath(new URL("../dist/", import.meta.url));
  const nodejs = fileURLToPath(new URL("../dist/nodejs/", import.meta.url));
  mkdirSync(nodejs, { recursive: true });
  copyFileSync(source, fileURLToPath(new URL("../dist/server.js", import.meta.url)));
  copyFileSync(source, fileURLToPath(new URL("../dist/nodejs/server.js", import.meta.url)));
  // Preserve the compatibility outputs required by the existing hosting setup.
  for (const name of [".next", "out", "build"]) {
    const target = fileURLToPath(new URL(`../${name}/`, import.meta.url));
    if (!existsSync(target)) cpSync(dist, target, { recursive: true });
  }
}
