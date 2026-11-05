# Kash | Landing Page

**Kash** gives local merchants a digital storefront. Search for a product, discover which nearby shops list it, see their displayed prices and contact them directly.

## Tech Stack

- Vite 8 + React 19 (React Compiler)
- Tailwind CSS 4
- TypeScript
- Pré-rendu statique (SSG) : chaque page est générée en HTML complet au build, puis hydratée dans le navigateur.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build     # type-check, build client, build SSR, pré-rendu → dist/
npm run preview   # sert dist/ en local
```

`npm run build` enchaîne :

1. `tsc -b` : vérification des types ;
2. `vite build` : bundle navigateur dans `dist/` (un chunk JS par page) ;
3. `vite build --ssr src/entry-server.tsx` : bundle Node temporaire dans `dist-ssr/` ;
4. `node scripts/prerender.mjs` : écrit `dist/index.html`, `dist/about.html`, …, `dist/404.html` et `dist/sitemap.xml`, puis supprime `dist-ssr/`.

## Structure

| Fichier | Rôle |
| --- | --- |
| `src/site.ts` | Pages, URL, titres, descriptions, Open Graph, JSON-LD, sitemap |
| `src/pages/*.tsx` | Une page par route (`Home`, `About`, `Contact`, `Privacy`, `Terms`, `DataDeletion`, `NotFound`) |
| `src/App.tsx` | Gabarit commun (Navbar, Footer, Clarity) |
| `src/components/PhoneMockup.tsx` | Cadre de téléphone CSS autour des captures d'écran |
| `src/screens.ts` + `src/assets/screens/` | Captures d'écran de l'app (WebP 400 px et 800 px) |
| `public/` | Fichiers servis tels quels (icônes, image OG, robots.txt, manifest…) |

### Ajouter une page

1. Créer `src/pages/MaPage.tsx` (export par défaut).
2. Déclarer la page dans `PAGES` (`src/site.ts`) avec son `path`, son `outFile` et ses métadonnées.

### Remplacer une capture d'écran

Les captures iPhone (1290 × 2796) sont recadrées sous la barre d'état (162 px) — le cadre dessine sa propre barre « 9:41 » — puis converties en `nom.webp` (800 px de large) et `nom-sm.webp` (400 px). Mettre à jour `width` / `height` dans `src/screens.ts` si les dimensions changent.

## Déploiement (Dokploy)

Le `Dockerfile` construit le site puis le sert avec nginx (`nginx.conf`) :

- Build Type : **Dockerfile**
- Port du conteneur : **80**

nginx sert `/about` depuis `about.html`, redirige `/about/` vers `/about`, renvoie `404.html` avec un statut 404 et met en cache permanent les fichiers hachés de `/assets/`.

## License

Kash | All rights reserved.
