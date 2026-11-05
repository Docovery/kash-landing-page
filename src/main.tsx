import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/sora";
import "@fontsource-variable/dm-sans";
import "./index.css";
import App from "./App";
import { loadPage } from "./loadPage";
import { PAGES, resolvePageKey } from "./site";

const container = document.getElementById("root")!;
const meta = PAGES[resolvePageKey(window.location.pathname)];

loadPage(meta).then(({ default: Page }) => {
  const app = (
    <StrictMode>
      <App>
        <Page />
      </App>
    </StrictMode>
  );
  // En production, le HTML est pré-rendu (scripts/prerender.mjs) : on l'hydrate.
  // En dev, #root est vide : rendu client classique.
  if (container.firstElementChild) hydrateRoot(container, app);
  else createRoot(container).render(app);
});
