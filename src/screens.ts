// Captures d'écran de l'application affichées dans les cadres de téléphone.
// Sources : kash-docs/screenshot/ — recadrées sous la barre d'état iOS (162 px)
// puis converties en WebP (400 px et 800 px de large maximum).
// Pour remplacer une capture : régénérer les deux fichiers .webp et garder
// width/height en phase avec la version la plus large.
import home from "./assets/screens/home.webp";
import homeSm from "./assets/screens/home-sm.webp";
import commerce from "./assets/screens/commerce.webp";
import commerceSm from "./assets/screens/commerce-sm.webp";
import produit from "./assets/screens/produit.webp";
import produitSm from "./assets/screens/produit-sm.webp";
import explorer from "./assets/screens/explorer.webp";
import explorerSm from "./assets/screens/explorer-sm.webp";
import panier from "./assets/screens/panier.webp";
import panierSm from "./assets/screens/panier-sm.webp";

export type Screen = {
  src: string;
  srcSm: string;
  width: number;
  height: number;
  /** Couleur du haut de l'écran, reprise sous la barre d'état. */
  bg: string;
};

export const screens = {
  home: { src: home, srcSm: homeSm, width: 800, height: 1633, bg: "#ffffff" },
  commerce: { src: commerce, srcSm: commerceSm, width: 800, height: 1633, bg: "#ffffff" },
  produit: { src: produit, srcSm: produitSm, width: 800, height: 1633, bg: "#ffffff" },
  explorer: { src: explorer, srcSm: explorerSm, width: 720, height: 1477, bg: "#f8f9fd" },
  panier: { src: panier, srcSm: panierSm, width: 720, height: 1477, bg: "#ffffff" },
} satisfies Record<string, Screen>;
