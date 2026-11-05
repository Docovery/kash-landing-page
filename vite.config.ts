import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import { PAGES, renderHead, resolvePageKey } from './src/site.ts'

// En dev, injecte dans index.html les balises <head> de la page demandée
// (en build, c'est scripts/prerender.mjs qui s'en charge pour chaque page).
function devPageHead(): Plugin {
  return {
    name: 'kash:dev-page-head',
    apply: 'serve',
    transformIndexHtml(html, ctx) {
      const pathname = new URL(ctx.originalUrl ?? ctx.path, 'http://localhost').pathname
      return html.replace('<!--app-head-->', () => renderHead(PAGES[resolvePageKey(pathname)]))
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ isPreview }) => ({
  // Dev : toutes les URL servent index.html (rendu client).
  // Preview : site pré-rendu, une page HTML par URL, pas de repli sur index.html.
  appType: isPreview ? 'mpa' : 'spa',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    devPageHead(),
  ],
  build: {
    // Lu par scripts/prerender.mjs (modulepreload par page, préchargement des polices).
    manifest: true,
  },
}))
