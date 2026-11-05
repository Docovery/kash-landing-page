// Pré-rendu statique (SSG) : écrit une page HTML complète par route dans dist/,
// à partir du build client (dist/) et du build SSR (dist-ssr/).
// Lancé par `npm run build`, après `vite build` et `vite build --ssr`.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDist = join(root, "dist-ssr");

const template = await readFile(join(dist, "index.html"), "utf8");
const manifest = JSON.parse(await readFile(join(dist, ".vite", "manifest.json"), "utf8"));
const { render, PAGES, renderHead, renderSitemap } = await import(
  pathToFileURL(join(ssrDist, "entry-server.js")).href
);

const entry = Object.values(manifest).find((chunk) => chunk.isEntry);
const entryFiles = new Set([entry.file, ...(entry.imports ?? []).map((key) => manifest[key].file)]);

// Polices latin (hors latin-ext) : préchargées pour limiter le saut de mise en page.
const fontPreloads = (entry.assets ?? [])
  .filter((file) => /(sora|dm-sans)-latin-wght-normal.*\.woff2$/.test(file))
  .map((file) => `<link rel="preload" href="/${file}" as="font" type="font/woff2" crossorigin />`);

// Chunk JS de la page + ses dépendances, préchargés en parallèle de l'entrée.
function pagePreloads(module) {
  const files = [];
  const seen = new Set();
  const walk = (key) => {
    if (seen.has(key) || !manifest[key]) return;
    seen.add(key);
    const chunk = manifest[key];
    if (!entryFiles.has(chunk.file)) files.push(chunk.file);
    for (const dep of chunk.imports ?? []) walk(dep);
  };
  walk(`src/pages/${module}.tsx`);
  return files.map((file) => `<link rel="modulepreload" crossorigin href="/${file}" />`);
}

for (const [key, meta] of Object.entries(PAGES)) {
  const head = [renderHead(meta), ...fontPreloads, ...pagePreloads(meta.module)].join("\n    ");
  const html = template
    .replace("<!--app-head-->", () => head)
    .replace("<!--app-html-->", () => render(key));
  const outFile = join(dist, meta.outFile);
  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, html);
  console.log(`  ${meta.path.padEnd(16)} → dist/${meta.outFile}`);
}

await writeFile(join(dist, "sitemap.xml"), renderSitemap(new Date()));
console.log("  sitemap.xml      → dist/sitemap.xml");

// Rien de tout ça n'a à être servi.
await rm(join(dist, ".vite"), { recursive: true, force: true });
await rm(ssrDist, { recursive: true, force: true });
