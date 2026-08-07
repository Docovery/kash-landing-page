import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kash — Les commerces de votre quartier",
    short_name: "Kash",
    description:
      "Kash réunit les commerces de votre quartier, leurs produits, leurs prix et leurs coordonnées. Recherchez un produit, découvrez qui le propose et contactez le commerce directement.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0057B7",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
