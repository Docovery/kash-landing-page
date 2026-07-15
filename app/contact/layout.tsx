import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe Kash. Une question, un partenariat ou besoin d'aide ? Nous sommes à votre écoute.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Kash",
    description:
      "Contactez l'équipe Kash pour toute question ou partenariat.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
