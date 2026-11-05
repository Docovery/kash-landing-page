// Métadonnées des pages (SEO) et correspondance URL → page.
// Module sans React ni DOM : il est utilisé par le navigateur, par le rendu
// statique (scripts/prerender.mjs via entry-server) et par vite.config.ts.
import { faqData } from "./components/faqData.ts";

export const SITE_URL = "https://kashapp.tech";
const SITE_NAME = "Kash";
const DEFAULT_TITLE = "Kash | Trouvez les produits et commerces autour de vous en RD Congo";
const DEFAULT_DESCRIPTION =
  "Kash réunit les commerces autour de vous, leurs produits, leurs prix et leurs coordonnées. Recherchez un produit, découvrez qui le propose et contactez le commerce directement.";
const DEFAULT_OG_DESCRIPTION =
  "Recherchez un produit, découvrez les commerces autour de vous qui le proposent, consultez leurs prix et contactez-les directement.";
const KEYWORDS = [
  "Kash",
  "commerce local",
  "RD Congo",
  "Kinshasa",
  "vitrine digitale",
  "trouver un produit",
  "commerçants",
  "boutiques",
  "produits locaux",
];
const OG_IMAGE = {
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
  alt: DEFAULT_TITLE,
};

export type PageKey = "home" | "about" | "contact" | "privacy" | "terms" | "dataDeletion" | "notFound";

export type PageMeta = {
  /** Chemin public (sans slash final). */
  path: string;
  /** Fichier HTML écrit dans dist/ par le pré-rendu. */
  outFile: string;
  /** Composant dans src/pages/<module>.tsx */
  module: string;
  /** Titre court, complété par « | Kash ». Absent → titre par défaut. */
  title?: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  jsonLd?: object[];
  noindex?: boolean;
  sitemap?: { changefreq: "weekly" | "monthly" | "yearly"; priority: number };
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kash",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: DEFAULT_DESCRIPTION,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "contact@kashapp.tech",
    telephone: "+243892312042",
    availableLanguage: "French",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const PAGES: Record<PageKey, PageMeta> = {
  home: {
    path: "/",
    outFile: "index.html",
    module: "Home",
    description: DEFAULT_DESCRIPTION,
    ogDescription: DEFAULT_OG_DESCRIPTION,
    jsonLd: [faqJsonLd],
    sitemap: { changefreq: "weekly", priority: 1 },
  },
  about: {
    path: "/about",
    outFile: "about.html",
    module: "About",
    title: "À propos",
    description:
      "Découvrez la mission de Kash : donner de la visibilité aux commerces de proximité et permettre à chacun de trouver les produits autour de lui.",
    ogDescription: "Découvrez la mission de Kash : digitaliser le commerce local.",
    sitemap: { changefreq: "monthly", priority: 0.8 },
  },
  contact: {
    path: "/contact",
    outFile: "contact.html",
    module: "Contact",
    title: "Contact",
    description:
      "Contactez l'équipe Kash. Une question, un partenariat ou besoin d'aide ? Nous sommes à votre écoute.",
    ogDescription: "Contactez l'équipe Kash pour toute question ou partenariat.",
    sitemap: { changefreq: "monthly", priority: 0.7 },
  },
  privacy: {
    path: "/privacy",
    outFile: "privacy.html",
    module: "Privacy",
    title: "Politique de confidentialité",
    description:
      "Découvrez comment Kash collecte, utilise et protège vos données personnelles sur le site et l'application mobile.",
    ogDescription: "Comment Kash collecte, utilise et protège vos données personnelles.",
    sitemap: { changefreq: "yearly", priority: 0.5 },
  },
  terms: {
    path: "/terms",
    outFile: "terms.html",
    module: "Terms",
    title: "Conditions générales d'utilisation",
    description: "Les conditions générales d'utilisation du site kashapp.tech et de l'application mobile Kash.",
    ogDescription: "Les règles d'utilisation du site et de l'application mobile Kash.",
    sitemap: { changefreq: "yearly", priority: 0.5 },
  },
  dataDeletion: {
    path: "/data-deletion",
    outFile: "data-deletion.html",
    module: "DataDeletion",
    title: "Suppression de compte et de données",
    description: "Comment demander la suppression de votre compte Kash et de vos données personnelles.",
    ogDescription: "La procédure pour demander la suppression de votre compte Kash et de vos données.",
    sitemap: { changefreq: "yearly", priority: 0.5 },
  },
  notFound: {
    path: "/404",
    outFile: "404.html",
    module: "NotFound",
    title: "Page introuvable",
    description: DEFAULT_DESCRIPTION,
    noindex: true,
  },
};

/** "/about/", "/about/index.html" → "about" ; chemin inconnu → "notFound". */
export function resolvePageKey(pathname: string): PageKey {
  let path = pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  if (path.length > 1) path = path.replace(/\/+$/, "");
  const found = (Object.keys(PAGES) as PageKey[]).find((key) => key !== "notFound" && PAGES[key].path === path);
  return found ?? "notFound";
}

export function pageTitle(meta: PageMeta): string {
  return meta.title ? `${meta.title} | ${SITE_NAME}` : DEFAULT_TITLE;
}

function canonicalUrl(meta: PageMeta): string {
  return meta.path === "/" ? SITE_URL : `${SITE_URL}${meta.path}`;
}

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const jsonLdScript = (data: object) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

/** Balises <head> propres à une page (titre, description, Open Graph, JSON-LD…). */
export function renderHead(meta: PageMeta): string {
  const title = pageTitle(meta);
  const ogTitle = meta.ogTitle ?? title;
  const ogDescription = meta.ogDescription ?? meta.description;
  const url = canonicalUrl(meta);
  const tags: [string, Record<string, string>][] = [
    ["meta", { name: "description", content: meta.description }],
    ["meta", { name: "author", content: SITE_NAME }],
    ["meta", { name: "keywords", content: KEYWORDS.join(",") }],
    ["meta", { name: "robots", content: meta.noindex ? "noindex" : "index, follow" }],
    ...(meta.noindex ? [] : [["link", { rel: "canonical", href: url }] as [string, Record<string, string>]]),
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "fr_CD" }],
    ["meta", { property: "og:site_name", content: SITE_NAME }],
    ["meta", { property: "og:url", content: url }],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { property: "og:image", content: OG_IMAGE.url }],
    ["meta", { property: "og:image:type", content: "image/png" }],
    ["meta", { property: "og:image:width", content: String(OG_IMAGE.width) }],
    ["meta", { property: "og:image:height", content: String(OG_IMAGE.height) }],
    ["meta", { property: "og:image:alt", content: OG_IMAGE.alt }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: ogTitle }],
    ["meta", { name: "twitter:description", content: ogDescription }],
    ["meta", { name: "twitter:image", content: OG_IMAGE.url }],
    ["meta", { name: "twitter:image:alt", content: OG_IMAGE.alt }],
  ];
  const lines = [
    `<title>${escapeAttr(title)}</title>`,
    ...tags.map(([tag, attrs]) => {
      const serialized = Object.entries(attrs)
        .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
        .join(" ");
      return `<${tag} ${serialized} />`;
    }),
    jsonLdScript(organizationJsonLd),
    ...(meta.jsonLd ?? []).map(jsonLdScript),
  ];
  return lines.join("\n    ");
}

export function renderSitemap(lastModified: Date): string {
  const lastmod = lastModified.toISOString();
  const urls = Object.values(PAGES)
    .filter((meta) => meta.sitemap)
    .map(
      (meta) =>
        `<url>\n<loc>${canonicalUrl(meta)}</loc>\n<lastmod>${lastmod}</lastmod>\n<changefreq>${meta.sitemap!.changefreq}</changefreq>\n<priority>${meta.sitemap!.priority}</priority>\n</url>`,
    );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
}
