import Image from "next/image";

export default function MerchantSection() {
  const bullets = [
    "Votre boutique référencée et visible par des milliers de clients à proximité",
    "Vos produits, prix et promotions ajoutés et mis à jour par l\u2019équipe Kash",
    "Un catalogue digital professionnel sans aucun effort de votre part",
    "Plus de clients potentiels qui découvrent votre commerce chaque jour",
  ];

  const merchants = [
    { img: "/images/testimonials/amina.png", name: "Amina M." },
    { img: "/images/testimonials/moussa.png", name: "Moussa L." },
    { img: "/images/testimonials/grace.png", name: "Grace S." },
  ];

  return (
    <section className="bg-white rounded-3xl py-25 px-15 mx-10 max-[900px]:py-16 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:py-12 max-[480px]:px-4 max-[480px]:mx-2">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-20 items-center max-[1024px]:gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-10">
        {/* Left: Phone mockup + merchant avatars */}
        <div className="relative flex justify-center max-[900px]:hidden">
          <div className="absolute w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(0,87,183,0.08)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          {/* Phone mockup */}
          <div style={{ position: "relative", width: "230px", height: "422px" }} className="z-2 drop-shadow-[0_24px_64px_rgba(0,87,183,0.22)]">
            <Image src="/images/mockups/splash_screen2.svg" alt="Kash App" fill style={{ objectFit: "contain" }} loading="eager" />
          </div>

          {/* Floating merchant badges */}
          <div className="absolute -left-8 top-[15%] z-3 bg-white rounded-2xl py-3 px-4 shadow-[0_8px_32px_rgba(0,87,183,0.18)] animate-[badgeFloat_3.5s_ease-in-out_infinite_0.5s]">
            <div className="flex -space-x-2 mb-2">
              {merchants.map((m, i) => (
                <div key={i} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                  <Image src={m.img} alt={m.name} fill sizes="32px" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
            <div className="font-display text-[10px] font-bold text-gray-900">+850 commerçants</div>
            <div className="text-[9px] text-gray-400">nous font confiance</div>
          </div>

          {/* Stats badge */}
          <div className="absolute -right-6 top-[55%] z-3 bg-white rounded-2xl py-3 px-4 shadow-[0_8px_32px_rgba(0,87,183,0.18)] animate-[badgeFloat_3.5s_ease-in-out_infinite_1.2s]">
            <div className="font-display text-lg font-extrabold text-green-600 leading-none">+45%</div>
            <div className="text-[9px] text-gray-400 mt-0.5">de visibilité</div>
          </div>
        </div>

        {/* Right: text */}
        <div>
          <div className="inline-block font-display text-[11px] font-bold text-primary bg-primary-muted py-1.5 px-3.5 rounded-full uppercase tracking-[1.2px] mb-4.5">Pour les commerçants</div>
          <h2 className="font-display text-[clamp(28px,3vw,44px)] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4">On s&apos;occupe de tout pour vous</h2>
          <p className="text-base font-light text-gray-500 leading-[1.75] max-w-[520px] max-[900px]:max-w-none max-[480px]:text-sm">Kash référence votre commerce et crée votre catalogue digital. Vos produits, vos prix, vos promotions : tout est intégré par notre équipe pour vous offrir une visibilité maximale.</p>
          <ul className="list-none mt-7 flex flex-col gap-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-gray-500 leading-[1.6]">
                <span className="w-2 h-2 rounded-full bg-accent mt-[7px] shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Merchant social proof row */}
          <div className="flex items-center gap-4 mt-8 mb-2">
            <div className="flex -space-x-2.5">
              {merchants.map((m, i) => (
                <div key={i} className="relative w-10 h-10 rounded-full overflow-hidden border-[2.5px] border-white shadow-sm">
                  <Image src={m.img} alt={m.name} fill sizes="40px" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
            <p className="text-[13px] text-gray-400">
              <strong className="text-gray-700 font-semibold">+850 commerçants</strong> référencés sur Kash
            </p>
          </div>

          <div className="mt-4">
            <a href="#" className="font-display text-sm font-semibold text-white bg-accent border-none rounded-full py-[15px] px-[34px] cursor-pointer transition-all duration-200 shadow-[0_6px_24px_rgba(255,127,80,0.45)] no-underline inline-block hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(255,127,80,0.55)] max-[480px]:w-full max-[480px]:text-center">
              Devenir partenaire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
