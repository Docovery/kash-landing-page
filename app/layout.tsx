import type { Metadata, Viewport } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClarityInit from "@/components/ClarityInit";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0057B7",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kashapp.tech"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Kash | Trouvez les produits et commerces autour de vous en RD Congo",
    template: "%s | Kash",
  },
  description:
    "Kash réunit les commerces de votre quartier, leurs produits, leurs prix et leurs coordonnées. Recherchez un produit, découvrez qui le propose et contactez le commerce directement.",
  keywords: [
    "Kash",
    "commerce local",
    "RD Congo",
    "Kinshasa",
    "vitrine digitale",
    "trouver un produit",
    "commerçants",
    "boutiques",
    "produits locaux",
  ],
  authors: [{ name: "Kash" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_CD",
    siteName: "Kash",
    url: "https://kashapp.tech",
    title: "Kash | Trouvez les produits et commerces autour de vous en RD Congo",
    description:
      "Recherchez un produit, découvrez les commerces de votre quartier qui le proposent, consultez leurs prix et contactez-les directement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kash | Trouvez les produits et commerces autour de vous en RD Congo",
    description:
      "Recherchez un produit, découvrez les commerces de votre quartier qui le proposent, consultez leurs prix et contactez-les directement.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kash",
  url: "https://kashapp.tech",
  logo: "https://kashapp.tech/logo.png",
  description:
    "Kash réunit les commerces de votre quartier, leurs produits, leurs prix et leurs coordonnées. Recherchez un produit, découvrez qui le propose et contactez le commerce directement.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "contact@kashapp.tech",
    telephone: "+243892312042",
    availableLanguage: "French",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${sora.variable} ${dmSans.variable}`} data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ClarityInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
