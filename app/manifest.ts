import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kash — Le catalogue digital du commerce local",
    short_name: "Kash",
    description:
      "Kash référence les commerces locaux en RD Congo. Trouvez les produits et boutiques près de chez vous, comparez les prix et gagnez du temps.",
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
