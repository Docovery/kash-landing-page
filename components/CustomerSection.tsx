import Image from "next/image";
import { FiSearch, FiPhone, FiClock } from "react-icons/fi";

export default function CustomerSection() {
  // Exemple illustratif : commerces génériques, prix en francs congolais,
  // aucun calcul d'économie, date de dernière mise à jour affichée.
  const results = [
    { store: "Commerce A", area: "Ngaliema", dist: "0,4 km", price: "8 500 FC" },
    { store: "Commerce B", area: "Gombe", dist: "1,2 km", price: "9 000 FC" },
    { store: "Commerce C", area: "Bandalungwa", dist: "2,1 km", price: "8 900 FC" },
  ];

  const lastUpdate = "2 août 2026";

  const bullets = [
    "Recherchez un produit et voyez les commerces qui le référencent près de chez vous",
    "Consultez les prix affichés ainsi que la date de leur dernière mise à jour",
    "Contactez directement le commerce pour confirmer la disponibilité avant de vous déplacer",
  ];

  return (
    <section
      className="compare-stripes bg-linear-to-br from-primary-dark via-primary to-primary relative overflow-hidden rounded-3xl py-25 px-15 mx-10 max-[1024px]:px-10 max-[900px]:py-16 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:py-12 max-[480px]:px-4 max-[480px]:mx-2 max-[480px]:rounded-2xl"
      id="about"
    >
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(255,127,80,0.18)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-20 items-center relative z-2 max-[1024px]:gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-10">
        {/* Left: text */}
        <div>
          <div className="inline-block font-display text-[11px] font-bold text-white/90 bg-white/12 py-1.5 px-3.5 rounded-full uppercase tracking-[1.2px] mb-4.5">
            Pour les clients
          </div>
          <h2 className="font-display text-[clamp(28px,3vw,44px)] font-extrabold text-white leading-[1.1] tracking-tight mb-4 max-[480px]:text-[26px]">
            Cherchez un produit, découvrez qui le propose
          </h2>
          <p className="text-base font-light text-white/70 leading-[1.75] max-w-[520px] max-[900px]:max-w-none max-[480px]:text-sm">
            Kash réunit les commerces de votre quartier, leurs produits, leurs prix et leurs coordonnées. Vous voyez qui référence ce que vous cherchez, puis vous contactez le commerce directement.
          </p>
          <ul className="list-none mt-7 flex flex-col gap-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-white/70 leading-[1.6]">
                <span className="w-2 h-2 rounded-full bg-accent mt-[7px] shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4 max-[480px]:mt-7">
            <a
              href="#cta"
              className="font-display text-sm font-semibold text-white bg-accent border-none rounded-full py-[15px] px-[34px] cursor-pointer transition-all duration-200 shadow-[0_6px_24px_rgba(255,127,80,0.45)] no-underline inline-block hover:-translate-y-0.5 max-[480px]:w-full max-[480px]:text-center"
            >
              Télécharger l&apos;app
            </a>
            <span className="text-[13px] text-white/60 max-[480px]:text-center max-[480px]:w-full">
              Rejoignez les premiers utilisateurs de Kash
            </span>
          </div>
        </div>

        {/* Right: search example card */}
        <div className="max-[900px]:mt-2">
          <div className="bg-white/6 border border-white/10 rounded-3xl p-7 backdrop-blur-[12px] max-[480px]:p-4 max-[480px]:rounded-2xl">
            {/* Search header */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/8">
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-accent/40 shrink-0">
                <Image src="/images/testimonials/fatou.png" alt="" fill sizes="36px" style={{ objectFit: "cover" }} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-xs font-bold text-white/90">Fatou recherche&hellip;</div>
                <div className="text-[10px] text-white/40 truncate">3 commerces référencent ce produit</div>
              </div>
              <span className="font-display text-[9px] font-bold text-white/50 uppercase tracking-[0.8px] border border-white/15 rounded-full py-1 px-2 shrink-0">
                Exemple
              </span>
            </div>

            {/* Search query */}
            <div className="flex items-center gap-2.5 bg-white/8 border border-white/10 rounded-xl py-3 px-3.5 mb-5 max-[480px]:mb-4 max-[480px]:py-2.5">
              <FiSearch className="w-4 h-4 text-white/45 shrink-0" />
              <span className="font-display text-[13px] font-semibold text-white/90 truncate max-[480px]:text-xs">Huile de palme 1 L</span>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-2">
              {results.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl py-3 px-3.5 max-[480px]:py-2.5 max-[480px]:px-3 max-[480px]:gap-2"
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-display text-[13px] font-semibold text-white/90 truncate max-[480px]:text-xs">{r.store}</div>
                    <div className="text-[11px] text-white/40 truncate max-[480px]:text-[10px]">{r.area} &middot; {r.dist}</div>
                  </div>
                  <span className="font-display text-[13px] font-bold text-white whitespace-nowrap max-[480px]:text-xs">{r.price}</span>
                  <span
                    aria-hidden="true"
                    className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0 max-[480px]:w-7 max-[480px]:h-7"
                  >
                    <FiPhone className="w-3.5 h-3.5 text-accent" />
                  </span>
                </div>
              ))}
            </div>

            {/* Last price update + availability disclaimer */}
            <div className="mt-5 border-t border-white/8 pt-4 flex flex-col gap-2 max-[480px]:mt-4 max-[480px]:pt-3">
              <div className="flex items-center gap-2 text-[11px] text-white/50">
                <FiClock className="w-3.5 h-3.5 shrink-0" />
                <span>Dernière mise à jour des prix : {lastUpdate}</span>
              </div>
              <p className="text-[11px] text-white/40 leading-[1.5]">
                Prix communiqués par les commerces, à titre indicatif. Contactez le commerce pour confirmer la disponibilité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
