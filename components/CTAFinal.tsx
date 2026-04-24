import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function CTAFinal() {
  const stores = [
    { Icon: FaApple, sub: "Télécharger sur", name: "App Store" },
    { Icon: FaGooglePlay, sub: "Disponible sur", name: "Google Play" },
  ];

  return (
    <div className="cta-stripes bg-linear-to-br from-primary-dark via-primary to-primary relative overflow-hidden px-15 mx-10 rounded-3xl max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:mx-2 max-[480px]:px-4 max-[480px]:rounded-2xl" id="cta">
      <div className="absolute -bottom-[200px] -left-[200px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(255,127,80,0.15)_0%,transparent_65%)] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-15 items-center py-24 relative z-2 max-[1024px]:gap-10 max-[900px]:grid-cols-1 max-[900px]:py-16 max-[480px]:py-12">
        <div>
          <h2 className="font-display text-[clamp(30px,3.8vw,52px)] font-extrabold text-white tracking-[-2px] mb-4.5 leading-[1.08] max-[900px]:text-[28px] max-[480px]:text-[26px] max-[480px]:tracking-[-1px]">
            Kash est disponible<br />sur tous vos appareils
          </h2>
          <p className="text-base font-light text-white/68 mb-10 leading-[1.75] max-w-[440px] max-[900px]:max-w-none max-[480px]:text-sm max-[480px]:mb-7">
            Rejoignez des milliers d'utilisateurs qui trouvent chaque jour les meilleurs produits et commerces pr\u00e8s de chez eux en RD Congo.
          </p>
          <div className="flex gap-3.5 flex-wrap max-[480px]:flex-col">
            {stores.map((store, i) => (
              <a key={i} href="#" className="flex items-center gap-2.5 bg-white/10 border-[1.5px] border-white/22 rounded-[14px] py-[13px] px-5.5 no-underline transition-all backdrop-blur-[10px] hover:bg-white/18 hover:border-white/40 max-[480px]:w-full max-[480px]:justify-center max-[480px]:py-3 max-[480px]:px-4">
                <store.Icon className="w-6 h-6 text-white shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] text-white/60 block font-body">{store.sub}</span>
                  <span className="font-display text-[15px] font-bold text-white block">{store.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-end relative pt-10 max-[900px]:hidden">
          <div className="absolute w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(255,127,80,0.3)_0%,rgba(26,127,232,0.15)_50%,transparent_75%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[40px]" />
          <div className="w-60 bg-[#0d0d1a] rounded-[40px] p-3 shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.07)] relative z-2 animate-[phoneFloatStraight_5s_ease-in-out_infinite_0.5s] origin-bottom">
            <div className="bg-white rounded-[30px] overflow-hidden min-h-[440px]">
              <Image src="/images/splash_screen.png" alt="Kash App" width={240} height={440} className="w-full block" style={{ height: "auto", borderRadius: "inherit" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
