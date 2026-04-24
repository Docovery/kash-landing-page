import type { Metadata, Viewport } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: {
    default: "Kash | Le catalogue digital du commerce local",
    template: "%s | Kash",
  },
  description:
    "Kash r\u00e9f\u00e9rence les commerces locaux en RD Congo. Trouvez les produits et boutiques pr\u00e8s de chez vous, comparez les prix et gagnez du temps.",
  keywords: [
    "Kash",
    "commerce local",
    "RD Congo",
    "catalogue digital",
    "Kinshasa",
    "comparer prix",
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
    title: "Kash | Le catalogue digital du commerce local",
    description:
      "Trouvez les produits et boutiques pr\u00e8s de chez vous en RD Congo. Comparez les prix et gagnez du temps avec Kash.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kash | Le catalogue digital du commerce local",
    description:
      "Trouvez les produits et boutiques pr\u00e8s de chez vous en RD Congo. Comparez les prix et gagnez du temps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${sora.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
