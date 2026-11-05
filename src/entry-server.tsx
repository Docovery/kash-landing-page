// Point d'entrée du pré-rendu (build SSR) — utilisé uniquement par scripts/prerender.mjs.
import { StrictMode, type ComponentType } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { PAGES, type PageKey } from "./site";

const pages = import.meta.glob<{ default: ComponentType }>("./pages/*.tsx", { eager: true });

export function render(key: PageKey): string {
  const Page = pages[`./pages/${PAGES[key].module}.tsx`].default;
  return renderToString(
    <StrictMode>
      <App>
        <Page />
      </App>
    </StrictMode>,
  );
}

export { PAGES, renderHead, renderSitemap } from "./site";
