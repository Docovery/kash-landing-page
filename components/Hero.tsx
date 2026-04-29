/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { FiTrendingUp, FiPercent } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="hero-dots min-h-[calc(100vh-80px)] bg-linear-to-br from-primary-dark via-primary to-primary flex flex-col relative overflow-hidden pt-10 mt-[100px] mx-10 rounded-3xl max-[900px]:mt-20 max-[900px]:mx-3 max-[900px]:min-h-0 max-[480px]:mt-18 max-[480px]:mx-2 max-[480px]:pt-6 max-[480px]:rounded-2xl">
      {/* Background blobs */}
      <div className="absolute top-[-120px] right-[-120px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,127,80,0.28)_0%,transparent_65%)] pointer-events-none z-[1] animate-[blobPulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-120px] left-[-80px] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none z-[1]" />
      <div className="absolute top-[40%] left-[35%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,127,80,0.1)_0%,transparent_70%)] pointer-events-none z-[1] animate-[blobPulse_6s_ease-in-out_infinite_reverse]" />

      <div className="flex-1 grid grid-cols-2 items-center max-w-[1200px] mx-auto px-15 py-20 pb-15 gap-10 relative z-2
        max-[900px]:grid-cols-1 max-[900px]:px-6 max-[900px]:py-15 max-[900px]:pb-10 max-[900px]:text-center
        max-[480px]:px-4 max-[480px]:py-10 max-[480px]:pb-8">

        {/* Left content with staggered entrance */}
        <div>
          <h1 className={`font-display text-[clamp(38px,4.8vw,62px)] font-extrabold text-white leading-[1.06] tracking-[-2px] mb-5.5 max-[480px]:text-[32px] max-[480px]:tracking-[-1px] max-[480px]:mb-4 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Explorez.<br />Economisez.<br /><em className="not-italic gradient-text">Connectez.</em>
          </h1>
          <p className={`text-base font-light text-white/78 max-w-[420px] leading-[1.75] mb-9.5 max-[900px]:mx-auto max-[900px]:max-w-[520px] max-[480px]:text-sm max-[480px]:mb-7 transition-all duration-700 delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Kash connecte les commerces locaux, vous aide à trouver les produits dont vous avez besoin et vous fait économiser de l&apos;argent.
          </p>
          <div className={`flex gap-3.5 flex-wrap mb-12 max-[900px]:justify-center max-[480px]:flex-col max-[480px]:items-center transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <a href="#cta" className="btn-primary font-display text-sm font-semibold text-white bg-accent border-none rounded-full py-[15px] px-[34px] cursor-pointer transition-all duration-200 shadow-[0_6px_24px_rgba(255,127,80,0.45)] no-underline inline-block hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(255,127,80,0.55)] glow-ring max-[480px]:w-full max-[480px]:text-center">
              Télécharger l&apos;app
            </a>
            <a href="#how-works" className="font-display text-sm font-medium text-white bg-white/12 border-[1.5px] border-white/30 rounded-full py-3.5 px-[30px] cursor-pointer backdrop-blur-[10px] transition-all no-underline inline-block hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5 max-[480px]:w-full max-[480px]:text-center">
              Voir la démo
            </a>
          </div>
          <div className={`flex items-center gap-3.5 max-[900px]:justify-center max-[480px]:flex-col max-[480px]:gap-2 transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex">
              {["/images/testimonials/amina.png", "/images/testimonials/fatou.png", "/images/testimonials/jeanpierre.png", "/images/testimonials/oumar.png"].map((src, i) => (
                <div key={i} className="relative w-9 h-9 rounded-full border-[2.5px] border-white/80 -ml-2.5 first:ml-0 overflow-hidden">
                  <Image src={src} alt="Utilisateur" fill style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
            <p className="text-[13px] text-white/80 font-normal font-body max-[480px]:text-xs max-[480px]:text-center">
              Rejoint <strong className="text-white font-semibold">+2 000</strong> utilisateurs sur Kash
            </p>
          </div>
        </div>

        {/* Right: Phone mockup with parallax-like entrance */}
        <div className={`flex justify-center items-center relative max-[900px]:hidden transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}>
          <div className="relative flex items-end justify-center">
            <div className="absolute w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,127,80,0.35)_0%,rgba(77,163,245,0.2)_50%,transparent_75%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[40px] z-0" />

            {/* Left badge */}
            <div className={`absolute -left-15 top-[30%] z-3 bg-white rounded-[14px] py-2.5 px-3.5 shadow-[0_8px_32px_rgba(0,87,183,0.25)] flex items-center gap-2 animate-[badgeFloat_3.5s_ease-in-out_infinite_0.5s] transition-all duration-700 delay-700 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-primary-light">
                <FiTrendingUp className="text-primary text-lg" />
              </div>
              <div>
                <div className="text-[9px] text-gray-400 font-display font-medium whitespace-nowrap">Commerces référencés</div>
                <div className="text-sm font-bold text-gray-900 font-display leading-tight whitespace-nowrap">+850 boutiques</div>
              </div>
            </div>

            {/* Phone mockup */}
            <div style={{ position: "relative", width: "260px", height: "476px" }} className="z-2 animate-[phoneFloat_4.5s_ease-in-out_infinite] drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)] [filter:drop-shadow(0_0_40px_rgba(255,127,80,0.25))_drop-shadow(0_40px_60px_rgba(0,0,0,0.45))]">
              <Image src="/images/mockups/splash_screen_mockup2.svg" alt="Kash App" fill style={{ objectFit: "contain" }} priority />
            </div>

            {/* Right badge */}
            <div className={`absolute -right-[50px] top-[55%] z-3 bg-white rounded-[14px] py-2.5 px-3.5 shadow-[0_8px_32px_rgba(0,87,183,0.25)] flex items-center gap-2 animate-[badgeFloat_3.5s_ease-in-out_infinite_1.2s] transition-all duration-700 delay-900 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-[#FFF3EE]">
                <FiPercent className="text-accent text-lg" />
              </div>
              <div>
                <div className="text-[9px] text-gray-400 font-display font-medium whitespace-nowrap">Produits référencés</div>
                <div className="text-sm font-bold text-green-600 font-display leading-tight whitespace-nowrap">+3 200</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
