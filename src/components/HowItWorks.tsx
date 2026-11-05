import ScrollReveal from "./ScrollReveal";
import PhoneMockup from "./PhoneMockup";
import { screens } from "../screens";

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Téléchargez Kash", desc: "Gratuit sur iOS et Android. Votre compte est créé en quelques secondes.", accent: "text-primary" },
    { num: "02", title: "Recherchez un produit", desc: "Voyez quels commerces autour de vous le référencent, à quel prix et où ils se trouvent.", accent: "text-accent" },
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
          {/* Étape 02 (Explorer) au premier plan, étape 03 (panier envoyé au commerce) en retrait */}
          <div className="relative mx-auto mb-16 w-fit max-[900px]:mb-10 max-[480px]:mb-8">
            <div className="absolute -inset-15 rounded-full bg-linear-to-br from-primary/15 via-[rgba(26,127,232,0.1)] to-accent/8 blur-[30px]" />
            <div className="relative z-2 flex items-end animate-[phoneFloatStraight_5s_ease-in-out_infinite] drop-shadow-[0_40px_80px_rgba(0,63,138,0.35)]">
              <PhoneMockup
                screen={screens.explorer}
                alt="Écran Explorer de l'application Kash : catégories de commerces et recherche"
                sizes="(max-width: 480px) 129px, 207px"
                className="z-2 w-[225px] max-[480px]:w-[140px]"
              />
              <PhoneMockup
                screen={screens.panier}
                alt="Panier de l'application Kash : la demande est envoyée au commerce sur WhatsApp"
                sizes="(max-width: 480px) 111px, 180px"
                className="z-1 -ml-4 mb-4 w-[195px] rotate-[5deg] origin-bottom-left max-[480px]:-ml-3 max-[480px]:mb-2 max-[480px]:w-[120px]"
              />
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
