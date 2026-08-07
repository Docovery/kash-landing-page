import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag, FiPhone } from "react-icons/fi";

export default function MerchantSection() {
  const bullets = [
    "Présentez vos produits, vos prix et vos promotions dans une vitrine digitale",
    "Faites découvrir votre commerce aux utilisateurs de votre quartier",
    "Soyez contacté directement par de nouveaux clients : téléphone, adresse, horaires",
  ];

  return (
    <section className="bg-white rounded-3xl py-25 px-15 mx-10 max-[900px]:py-16 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:py-12 max-[480px]:px-4 max-[480px]:mx-2 max-[480px]:rounded-2xl">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-20 items-center max-[1024px]:gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-10">
        {/* Left: Phone mockup + floating badges */}
        <div className="relative flex justify-center max-[900px]:hidden">
          <div className="absolute w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(0,87,183,0.08)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          {/* Phone mockup */}
          <div style={{ position: "relative", width: "230px", height: "422px" }} className="z-2 drop-shadow-[0_24px_64px_rgba(0,87,183,0.22)]">
            <Image src="/images/mockups/splash_screen2.svg" alt="Application Kash" fill sizes="230px" style={{ objectFit: "contain" }} loading="eager" />
          </div>

          {/* Floating badge: vitrine */}
          <div className="absolute -left-8 top-[20%] z-3 bg-white rounded-2xl py-3 px-4 shadow-[0_8px_32px_rgba(0,87,183,0.18)] flex items-center gap-2.5 animate-[badgeFloat_3.5s_ease-in-out_infinite_0.5s]">
            <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
              <FiShoppingBag className="w-4.5 h-4.5 text-primary" />
            </div>
            <div>
              <div className="font-display text-[11px] font-bold text-gray-900 whitespace-nowrap">Votre vitrine</div>
              <div className="text-[9px] text-gray-400 whitespace-nowrap">Produits, prix, promos</div>
            </div>
          </div>

          {/* Floating badge: contact */}
          <div className="absolute -right-6 top-[58%] z-3 bg-white rounded-2xl py-3 px-4 shadow-[0_8px_32px_rgba(0,87,183,0.18)] flex items-center gap-2.5 animate-[badgeFloat_3.5s_ease-in-out_infinite_1.2s]">
            <div className="w-9 h-9 rounded-xl bg-[#FFF3EE] flex items-center justify-center shrink-0">
              <FiPhone className="w-4.5 h-4.5 text-accent" />
            </div>
            <div>
              <div className="font-display text-[11px] font-bold text-gray-900 whitespace-nowrap">Vos coordonnées</div>
              <div className="text-[9px] text-gray-400 whitespace-nowrap">Clients en direct</div>
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div>
          <div className="inline-block font-display text-[11px] font-bold text-primary bg-primary-muted py-1.5 px-3.5 rounded-full uppercase tracking-[1.2px] mb-4.5">Pour les commerçants</div>
          <h2 className="font-display text-[clamp(28px,3vw,44px)] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4">Votre vitrine digitale sur Kash</h2>
          <p className="text-base font-light text-gray-500 leading-[1.75] max-w-[520px] max-[900px]:max-w-none max-[480px]:text-sm">
            Kash permet aux commerçants de créer leur vitrine digitale, présenter leurs produits, afficher leurs prix et être contactés directement par de nouveaux clients.
          </p>
          <ul className="list-none mt-7 flex flex-col gap-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-gray-500 leading-[1.6]">
                <span className="w-2 h-2 rounded-full bg-accent mt-[7px] shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link href="/contact" className="font-display text-sm font-semibold text-white bg-accent border-none rounded-full py-[15px] px-[34px] cursor-pointer transition-all duration-200 shadow-[0_6px_24px_rgba(255,127,80,0.45)] no-underline inline-block hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(255,127,80,0.55)] max-[480px]:w-full max-[480px]:text-center">
              Référencer mon commerce
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
