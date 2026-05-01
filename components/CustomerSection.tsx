import Image from "next/image";

export default function CustomerSection() {
  const rows = [
    { store: "Chez Mama", price: "$3.50", dist: "0.3 km", saving: "" },
    { store: "Marché Central", price: "$2.80", dist: "1.2 km", saving: "-$0.70", best: true },
    { store: "Shoprite", price: "$3.20", dist: "2.1 km", saving: "-$0.30" },
    { store: "Kin Mart", price: "$3.80", dist: "0.8 km", saving: "" },
  ];

  const bullets = [
    "Trouvez instantanément où acheter un produit précis près de chez vous",
    "Vérifiez la disponibilité avant de vous déplacer, fini les allers-retours inutiles",
    "Gagnez du temps en comparant les prix et les boutiques depuis votre canapé",
    "Ne renoncez plus à un achat faute de savoir où chercher",
  ];

  const users = [
    { img: "/images/testimonials/fatou.png", name: "Fatou" },
    { img: "/images/testimonials/jeanpierre.png", name: "Jean-Pierre" },
    { img: "/images/testimonials/oumar.png", name: "Oumar" },
    { img: "/images/testimonials/grace.png", name: "Grace" },
  ];

  return (
    <section
      className="compare-stripes bg-linear-to-br from-primary-dark via-primary to-primary relative overflow-hidden rounded-3xl py-25 px-15 mx-10 max-[1024px]:px-10 max-[900px]:py-16 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:py-12 max-[480px]:px-4 max-[480px]:mx-2"
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
            Trouvez ce que vous cherchez, sans perdre de temps
          </h2>
          <p className="text-base font-light text-white/70 leading-[1.75] max-w-[520px] max-[900px]:max-w-none">
            Plus besoin de vous déplacer au hasard. Kash vous montre les produits disponibles autour de vous, avec les prix et les distances pour chaque boutique.
          </p>
          <ul className="list-none mt-7 flex flex-col gap-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-white/70 leading-[1.6]">
                <span className="w-2 h-2 rounded-full bg-accent mt-[7px] shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Social proof row */}
          <div className="flex items-center gap-3.5 mt-9 max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-2">
            <div className="flex -space-x-2.5">
              {users.map((u, i) => (
                <div key={i} className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white/30">
                  <Image src={u.img} alt={u.name} fill sizes="36px" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
            <p className="text-[13px] text-white/60">
              <strong className="text-white font-semibold">+2 000</strong> utilisateurs économisent chaque jour
            </p>
          </div>

          <div className="mt-7 max-[480px]:mt-5">
            <a
              href="#cta"
              className="font-display text-sm font-semibold text-white bg-accent border-none rounded-full py-[15px] px-[34px] cursor-pointer transition-all duration-200 shadow-[0_6px_24px_rgba(255,127,80,0.45)] no-underline inline-block hover:-translate-y-0.5 max-[480px]:w-full max-[480px]:text-center"
            >
              Télécharger l&apos;app
            </a>
          </div>
        </div>

        {/* Right: comparison card */}
        <div className="max-[900px]:mt-2">
          <div className="bg-white/6 border border-white/10 rounded-3xl p-7 backdrop-blur-[12px] max-[480px]:p-4 max-[480px]:rounded-2xl">
            {/* Search header with avatar */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/8">
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-accent/40 shrink-0">
                <Image src="/images/testimonials/fatou.png" alt="Client" fill sizes="36px" style={{ objectFit: "cover" }} />
              </div>
              <div>
                <div className="font-display text-xs font-bold text-white/90">Fatou recherche...</div>
                <div className="text-[10px] text-white/40">Huile de palme 1L : 4 résultats trouvés</div>
              </div>
            </div>

            <div className="grid grid-cols-[1fr_70px_70px_70px] gap-2 pb-2 font-display text-[10px] font-semibold text-white/40 uppercase tracking-[0.8px] max-[480px]:grid-cols-[1fr_55px_55px_55px] max-[480px]:gap-1">
              <span>Boutique</span>
              <span className="text-center">Prix</span>
              <span className="text-center">Distance</span>
              <span className="text-center">Économie</span>
            </div>
            {rows.map((r, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_70px_70px_70px] gap-2 py-[11px] border-b border-white/7 last:border-b-0 items-center max-[480px]:grid-cols-[1fr_55px_55px_55px] max-[480px]:gap-1 max-[480px]:py-2"
              >
                <span className="font-display text-xs text-white/85 font-semibold max-[480px]:text-[11px] truncate">{r.store}</span>
                <span className={`text-xs text-center max-[480px]:text-[11px] ${r.best ? "text-green-400 font-bold bg-green-400/10 rounded-md py-0.5 px-1 font-display" : "text-white/60"}`}>
                  {r.price}
                </span>
                <span className="text-xs text-white/60 text-center max-[480px]:text-[11px]">{r.dist}</span>
                <span className={`text-xs text-center max-[480px]:text-[11px] ${r.best ? "text-green-400 font-bold bg-green-400/10 rounded-md py-0.5 px-1 font-display" : "text-white/60"}`}>
                  {r.saving}
                </span>
              </div>
            ))}
            <div className="mt-5 bg-accent/12 border border-accent/28 rounded-xl py-4 px-5 flex justify-between items-center max-[480px]:py-3 max-[480px]:px-3.5 max-[480px]:mt-3">
              <span className="text-[13px] text-white/75 font-medium font-display max-[480px]:text-xs">Économie sur 8 articles</span>
              <span className="font-display text-[22px] font-extrabold text-accent max-[480px]:text-lg">$4.20</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
