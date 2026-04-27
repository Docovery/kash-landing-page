"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import KashLogo from "./KashLogo";

const footerCols = [
  { title: "Application", links: [{ label: "Fonctionnalités", href: "#features" }, { label: "Télécharger", href: "#cta" }, { label: "Mises à jour", href: "/updates" }] },
  { title: "À propos", links: [{ label: "Notre mission", href: "/about" }, { label: "L'équipe", href: "/team" }] },
  { title: "Contact", links: [{ label: "Support", href: "/support" }, { label: "Partenariats", href: "/partnerships" }, { label: "Recrutement", href: "/recruitment" }] },
];

const socials = [
  { Icon: FaFacebookF },
  { Icon: FaTwitter },
  { Icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white/60 py-15 px-15 pb-9 mb-5 mx-10 rounded-3xl max-[900px]:py-12 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:mx-2 max-[480px]:px-4 max-[480px]:py-10" id="contact">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/7 mb-8 max-[1024px]:gap-8 max-[900px]:grid-cols-2 max-[900px]:gap-8 max-[480px]:grid-cols-1 max-[480px]:gap-7">
          <div className="max-[900px]:col-span-2 max-[480px]:col-span-1">
            <div className="flex items-center mb-3 [&_svg]:h-10 [&_svg]:w-auto">
              <KashLogo invert />
            </div>
            <p className="text-[13px] leading-[1.7] text-white/40 mb-5.5">Connectez commerçants et clients. Explorez, économisez et découvrez les meilleurs produits près de chez vous.</p>
            <div className="flex gap-2.5">
              {socials.map(({ Icon }, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-[10px] bg-white/7 flex items-center justify-center cursor-pointer transition-colors hover:bg-primary">
                  <Icon className="w-4 h-4 text-white/65" />
                </a>
              ))}
            </div>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <div className="font-display text-xs font-bold text-white mb-4.5 uppercase tracking-[1px]">{col.title}</div>
              <ul className="list-none flex flex-col gap-[11px]">
                {col.links.map((link) => (
                  <li key={link.label}><a href={link.href} className="text-[13px] text-white/45 no-underline hover:text-white transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="flex items-center justify-between gap-8 pb-10 border-b border-white/7 mb-8 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-5">
          <div>
            <div className="font-display text-sm font-bold text-white mb-1.5">Restez informé</div>
            <p className="text-[13px] text-white/40">Recevez nos actualités et les meilleures offres près de chez vous.</p>
          </div>
          <form className="flex gap-2.5 w-full max-w-[420px] max-[480px]:flex-col max-[480px]:max-w-none" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 bg-white/7 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-primary focus:bg-white/10 max-[480px]:w-full"
            />
            <button
              type="submit"
              className="font-display text-sm font-semibold text-white bg-accent border-none rounded-xl py-3 px-5 cursor-pointer transition-all duration-200 shadow-[0_4px_16px_rgba(255,127,80,0.35)] flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,127,80,0.45)] max-[480px]:w-full max-[480px]:justify-center"
            >
              <span>S&apos;inscrire</span>
              <FiSend className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="flex justify-between items-center text-xs text-white/30 font-body max-[900px]:flex-col max-[900px]:gap-3 max-[480px]:text-center">
          <span>© {new Date().getFullYear()} Kash. Tous droits réservés.</span>
          <div className="flex gap-6 max-[480px]:flex-col max-[480px]:gap-2 max-[480px]:items-center">
            <a href="#" className="text-white/30 no-underline text-xs hover:text-white/60 transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-white/30 no-underline text-xs hover:text-white/60 transition-colors">Conditions générales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
