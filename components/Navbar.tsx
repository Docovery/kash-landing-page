"use client";
import { useState, useEffect } from "react";
import KashLogo from "./KashLogo";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((v) => !v);
    document.body.style.overflow = !menuOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div className={`mobile-overlay${menuOpen ? " active" : ""}`} onClick={closeMenu} />
      <div className={`mobile-panel${menuOpen ? " active" : ""}`}>
        {[
          { label: "Fonctionnalités", href: "/#features" },
          { label: "Comment ça marche", href: "/#how-works" },
          { label: "À propos", href: "/about" },
          { label: "Contact", href: "/contact" },
        ].map((item) => (
          <Link key={item.label} href={item.href} onClick={closeMenu}
            className="block font-display text-base font-semibold text-gray-800 no-underline py-4 border-b border-gray-100 hover:text-primary transition-colors">
            {item.label}
          </Link>
        ))}
        <a href="#cta" onClick={closeMenu}
          className="mt-6 block text-center font-display text-sm font-semibold text-white bg-gradient-to-br from-primary to-primary-dark rounded-full py-3.5 px-7 no-underline shadow-[0_4px_16px_rgba(0,87,183,0.3)]">
          Télécharger l&apos;app
        </a>
      </div>

      <nav className={`fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1200px] z-100 flex items-center justify-between py-3.5 px-7 border border-white/50 rounded-full transition-all duration-300
        ${scrolled ? "bg-white/95 shadow-[0_8px_32px_rgba(0,57,138,0.12)]" : "bg-white/72 shadow-[0_4px_30px_rgba(0,57,138,0.08)]"}
        backdrop-blur-[24px] backdrop-saturate-[180%]
        max-[900px]:py-3 max-[900px]:px-5 max-[900px]:w-[calc(100%-32px)] max-[900px]:top-2
        max-[480px]:py-2.5 max-[480px]:px-4 max-[480px]:w-[calc(100%-24px)]`}
      >
        <Link href="/" className="flex items-center [&_svg]:h-10 [&_svg]:w-auto max-[480px]:[&_svg]:h-8">
          <KashLogo />
        </Link>
        <ul className="flex gap-9 list-none max-[900px]:hidden">
          {[
            { label: "Fonctionnalités", href: "/#features" },
            { label: "Comment ça marche", href: "/#how-works" },
            { label: "À propos", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <li key={link.label}>
              <a href={link.href} className="font-display text-[13px] font-medium text-gray-500 no-underline hover:text-primary transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 items-center">
          <Link href="#cta" className="font-display text-[13px] font-semibold text-white bg-gradient-to-br from-primary to-primary-dark border-none rounded-full py-2.5 px-6 cursor-pointer transition-all duration-250 shadow-[0_2px_12px_rgba(0,87,183,0.25)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,87,183,0.35)] max-[900px]:hidden">
            Télécharger
          </Link>
          <button
            className={`hamburger hidden max-[900px]:block bg-transparent border-none cursor-pointer w-10 h-10 relative z-200${menuOpen ? " active" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </>
  );
}
