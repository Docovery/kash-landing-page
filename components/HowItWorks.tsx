"use client";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Téléchargez Kash", desc: "Gratuit sur iOS et Android. Votre compte est créé en quelques secondes.", accent: "text-primary" },
    { num: "02", title: "Recherchez un produit", desc: "Voyez quels commerces de votre quartier le référencent, à quel prix et où ils se trouvent.", accent: "text-accent" },
    { num: "03", title: "Contactez le commerce", desc: "Un appel ou un message suffit pour confirmer la disponibilité avant de vous déplacer.", accent: "text-green-600" },
  ];

  return (
    <section className="hiw-dots bg-gray-50 text-center relative overflow-hidden rounded-3xl py-25 px-15 mx-10 max-[900px]:py-16 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:py-12 max-[480px]:px-4 max-[480px]:mx-2 max-[480px]:rounded-2xl" id="how-works">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal animation="fade-in-up">
          <div className="mb-[72px] relative max-[900px]:mb-10">
            <div className="inline-block font-display text-[11px] font-bold text-primary bg-primary-muted py-1.5 px-3.5 rounded-full uppercase tracking-[1.2px] mb-4.5">Processus</div>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4">Comment ça marche ?</h2>
            <p className="text-base font-light text-gray-500 leading-[1.75] max-w-[520px] mx-auto max-[480px]:text-sm">De la recherche au commerçant, en trois étapes.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-scale">
          <div className="relative mx-auto mb-16 w-[280px] max-[900px]:mb-10 max-[480px]:w-[220px] max-[480px]:mb-8">
            <div className="absolute -inset-15 rounded-full bg-linear-to-br from-primary/15 via-[rgba(26,127,232,0.1)] to-accent/8 blur-[30px]" />
            <div style={{ position: "relative", width: "260px", height: "460px" }} className="mx-auto z-2 animate-[phoneFloatStraight_5s_ease-in-out_infinite] drop-shadow-[0_40px_80px_rgba(0,63,138,0.35)] max-[480px]:!w-[200px] max-[480px]:!h-[354px]">
              <Image src="/images/mockups/splash_screen_mockup.svg" alt="Kash App" fill style={{ objectFit: "contain" }} />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-6 max-w-[900px] mx-auto relative max-[1024px]:grid-cols-2 max-[900px]:grid-cols-1">
          {steps.map((s, i) => (
            <ScrollReveal key={i} animation="fade-in-up" delay={i * 0.15}>
              <div className="step-card-line card-interactive bg-white rounded-3xl py-8 px-6 text-left border border-gray-200 relative overflow-hidden group max-[480px]:py-7 max-[480px]:px-5">
                <div className={`font-display text-5xl font-extrabold ${s.accent} opacity-20 leading-none mb-3.5 tracking-[-2px] transition-opacity duration-300 group-hover:opacity-40`}>{s.num}</div>
                <h3 className="font-display text-[17px] font-bold text-gray-900 mb-2 tracking-tight">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-[1.65]">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
