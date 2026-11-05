import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClarityInit from "./components/ClarityInit";

// Gabarit commun à toutes les pages (équivalent de app/layout.tsx sous Next.js).
export default function App({ children }: { children: ReactNode }) {
  return (
    <>
      <ClarityInit />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
