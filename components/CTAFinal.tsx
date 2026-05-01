import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function CTAFinal() {
  const stores = [
    { Icon: FaApple, sub: "Télécharger sur", name: "App Store" },
    { Icon: FaGooglePlay, sub: "Disponible sur", name: "Google Play" },
  ];

  const avatars = [
    "/images/testimonials/amina.png",
    "/images/testimonials/fatou.png",
    "/images/testimonials/jeanpierre.png",
    "/images/testimonials/oumar.png",
  ];

  return (
    <div className="cta-stripes bg-linear-to-br from-primary-dark via-primary to-primary relative overflow-hidden px-15 mx-10 rounded-3xl max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:mx-2 max-[480px]:px-4 max-[480px]:rounded-2xl" id="cta">
      <div className="absolute -bottom-[200px] -left-[200px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(255,127,80,0.15)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute top-[-150px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_65%)] pointer-events-none animate-[blobPulse_8s_ease-in-out_infinite]" />

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-15 items-center py-24 relative z-2 max-[1024px]:gap-10 max-[900px]:grid-cols-1 max-[900px]:py-16 max-[480px]:py-12">
        <div>
          <h2 className="font-display text-[clamp(30px,3.8vw,52px)] font-extrabold text-white tracking-[-2px] mb-4.5 leading-[1.08] max-[900px]:text-[28px] max-[480px]:text-[26px] max-[480px]:tracking-[-1px]">
            Kash est disponible<br />sur tous vos appareils
          </h2>
          <p className="text-base font-light text-white/68 mb-8 leading-[1.75] max-w-[440px] max-[900px]:max-w-none max-[480px]:text-sm max-[480px]:mb-6">
            Rejoignez des milliers d&apos;utilisateurs qui trouvent chaque jour les meilleurs produits et commerces près de chez eux.
          </p>

          {/* Social proof avatars */}
          <div className="flex items-center gap-3 mb-8 max-[480px]:mb-6">
            <div className="flex -space-x-2.5">
              {avatars.map((src, i) => (
                <div key={i} className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white/30">
                  <Image src={src} alt="Utilisateur" fill sizes="36px" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
            <p className="text-[13px] text-white/60">
              <strong className="text-white font-semibold">+2 000</strong> utilisateurs actifs
            </p>
          </div>

          <div className="flex gap-3.5 flex-wrap max-[480px]:flex-col">
            {stores.map((store, i) => (
              <a key={i} href="#" className="btn-primary flex items-center gap-2.5 bg-white/10 border-[1.5px] border-white/22 rounded-[14px] py-[13px] px-5.5 no-underline transition-all backdrop-blur-[10px] hover:bg-white/18 hover:border-white/40 hover:-translate-y-0.5 max-[480px]:w-full max-[480px]:justify-center max-[480px]:py-3 max-[480px]:px-4">
                <store.Icon className="w-6 h-6 text-white shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] text-white/60 block font-body">{store.sub}</span>
                  <span className="font-display text-[15px] font-bold text-white block">{store.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Phone mockup with floating elements */}
        <div className="flex justify-center items-center relative max-[900px]:hidden">
          <div className="absolute w-80 h-80 rounded-full bg-linear-to-br from-primary/15 via-[rgba(26,127,232,0.1)] to-accent/8 blur-[40px]" />
          <div style={{ position: "relative", width: "240px", height: "440px" }} className="z-2 animate-[phoneFloatStraight_5s_ease-in-out_infinite_0.5s] origin-bottom drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)]">
            <Image src="/images/mockups/splash_screen_mockup.svg" alt="Kash App" fill style={{ objectFit: "contain" }} />
          </div>

          {/* Floating download badge */}
          <div className="absolute -left-4 top-[35%] z-3 bg-white rounded-2xl py-3 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.2)] animate-[badgeFloat_3.5s_ease-in-out_infinite_0.8s]">
            <div className="font-display text-lg font-extrabold text-green-600 leading-none">4.9★</div>
            <div className="text-[9px] text-gray-400 font-display font-medium mt-0.5">1 240 avis</div>
          </div>

          {/* Floating stats badge */}
          <div className="absolute -right-6 top-[55%] z-3 bg-white rounded-2xl py-3 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.2)] animate-[badgeFloat_3.5s_ease-in-out_infinite_1.5s]">
            <div className="font-display text-lg font-extrabold text-primary leading-none">+2K</div>
            <div className="text-[9px] text-gray-400 font-display font-medium mt-0.5">téléchargements</div>
          </div>
        </div>
      </div>
    </div>
  );
}
