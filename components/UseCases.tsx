"use client";
import { useCallback, useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { FiSearch } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const subscribeToReducedMotion = (onChange: () => void) => {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};
const getReducedMotion = () => window.matchMedia(REDUCED_MOTION_QUERY).matches;
const getReducedMotionOnServer = () => false;

// Images : Pexels, licence libre pour usage commercial — voir public/images/usecases/CREDITS.md
const useCases = [
  {
    query: "huile de palme 1 L",
    title: "Les courses du quotidien",
    desc: "Voyez quels commerces de votre quartier la référencent et à quel prix, puis appelez celui qui vous arrange.",
    img: "/images/usecases/huile-de-palme.webp",
    alt: "Bouteilles et bidons d'huile de palme sur l'étal d'un vendeur",
    featured: true,
  },
  {
    query: "paracétamol 500 mg",
    title: "Un besoin urgent",
    desc: "Repérez les commerces qui le référencent près de chez vous et joignez-les avant même de sortir.",
    img: "/images/usecases/paracetamol.webp",
    alt: "Plaquettes de comprimés et de gélules",
    featured: true,
  },
  {
    query: "sac de riz 25 kg",
    title: "Les provisions du mois",
    desc: "Retrouvez les commerces qui vendent en grande quantité, avec leur adresse et leur numéro.",
    img: "/images/usecases/riz.webp",
    alt: "Sacs de riz ouverts sur un étal de marché",
    featured: true,
  },
  {
    query: "ciment 50 kg",
    title: "Un chantier à préparer",
    desc: "Quand plusieurs commerces proposent le produit, comparez les prix affichés puis contactez le vendeur.",
    img: "/images/usecases/ciment.webp",
    alt: "Sacs de ciment empilés sur une palette",
    featured: true,
  },
  {
    query: "cahiers 200 pages",
    title: "La rentrée scolaire",
    desc: "Repérez les librairies et papeteries du quartier avant de faire le tour des boutiques.",
    img: "/images/usecases/cahiers.webp",
    alt: "Cahiers ouverts, carnets à spirale et crayons",
    featured: true,
  },
  {
    query: "bonbonne de gaz 12 kg",
    title: "Le ravitaillement maison",
    desc: "Identifiez le dépôt le plus proche et appelez-le pour confirmer avant de vous déplacer.",
    img: "/images/usecases/gaz.webp",
    alt: "Bonbonnes de gaz alignées chez un dépositaire",
    featured: true,
  },
  {
    query: "chargeur USB-C",
    title: "Un accessoire précis",
    desc: "Trouvez qui le référence autour de vous plutôt que d'enchaîner les boutiques au hasard.",
    img: "/images/usecases/chargeur.webp",
    alt: "Bloc d'alimentation et câble USB-C",
    featured: true,
  },
  {
    query: "pagne wax 6 yards",
    title: "Un achat plaisir",
    desc: "Découvrez les commerces qui en proposent dans votre commune, avec leurs coordonnées.",
    img: "/images/usecases/pagne.webp",
    alt: "Cliente choisissant un pagne wax sur un étal de tissus",
    featured: true,
  },
];

export default function UseCases() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [
      AutoScroll({
        playOnInit: true,
        speed: 0.9,
        stopOnInteraction: false,
        // Le survol est géré manuellement ci-dessous.
        stopOnMouseEnter: false,
      }),
    ]
  );
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotion,
    getReducedMotionOnServer
  );

  // Pause le temps de lire une carte, puis reprend.
  const pauseOnHover = useCallback(() => {
    emblaApi?.plugins()?.autoScroll?.stop();
  }, [emblaApi]);

  const resumeAfterHover = useCallback(() => {
    if (!prefersReducedMotion) emblaApi?.plugins()?.autoScroll?.play();
  }, [emblaApi, prefersReducedMotion]);

  // Respecte le réglage système « animations réduites »
  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    if (prefersReducedMotion) autoScroll.stop();
    else autoScroll.play();
  }, [emblaApi, prefersReducedMotion]);

  return (
    <section className="bg-white rounded-3xl py-25 px-15 mx-10 max-[900px]:py-16 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:py-12 max-[480px]:px-4 max-[480px]:mx-2 max-[480px]:rounded-2xl" id="use-cases">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-13 max-[480px]:mb-10">
            <div className="inline-block font-display text-[11px] font-bold text-primary bg-primary-muted py-1.5 px-3.5 rounded-full uppercase tracking-[1.2px] mb-4.5">Cas d&apos;usage</div>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4">Ce que vous pouvez chercher sur Kash</h2>
            <p className="text-base font-light text-gray-500 leading-[1.75] max-w-[520px] mx-auto max-[480px]:text-sm">Un produit précis, les commerces qui le proposent, leurs prix et leurs coordonnées.</p>
          </div>
        </ScrollReveal>

        {/* Carrousel : défilement automatique, glissable à la souris ou au doigt */}
        {/* py/-my : laisse respirer l'ombre et le survol des cartes malgré overflow-hidden */}
        <div
          className="overflow-hidden py-5 -my-5 cursor-grab active:cursor-grabbing"
          ref={emblaRef}
          onMouseEnter={pauseOnHover}
          onMouseLeave={resumeAfterHover}
        >
          <div className="flex items-stretch -ml-5 touch-pan-y">
            {useCases.map((u, i) => (
              <div
                key={i}
                className="shrink-0 grow-0 basis-1/3 pl-5 max-[1024px]:basis-1/2 max-[900px]:basis-[85%] max-[480px]:basis-[88%]"
              >
                <div className={`usecase-card group rounded-3xl relative overflow-hidden h-full flex flex-col select-none max-[480px]:rounded-2xl
                  ${u.featured ? "usecase-featured bg-primary border border-primary" : "bg-gray-50 border border-gray-200 hover:border-primary/20"}`}>

                  {/* Visuel du produit recherché */}
                  <div className="relative w-full aspect-[8/5] shrink-0 overflow-hidden">
                    <Image
                      src={u.img}
                      alt={u.alt}
                      fill
                      sizes="(max-width: 900px) 88vw, (max-width: 1024px) 45vw, 380px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    {/* Fondu vers la couleur de la carte, pour lier image et texte */}
                    <div className={`absolute inset-0 pointer-events-none bg-linear-to-t ${u.featured ? "from-primary via-primary/30" : "from-gray-50 via-gray-50/30"} to-transparent`} />
                    {/* Requête de recherche, en surimpression */}
                    <div className="absolute left-5 right-5 bottom-4 flex max-[480px]:left-4 max-[480px]:right-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-[6px] py-2 px-3.5 shadow-[0_4px_14px_rgba(0,0,0,0.18)] max-w-full">
                        <FiSearch className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                        <span className="font-display text-[13px] font-semibold text-gray-800 truncate min-w-0 max-[480px]:text-xs">{u.query}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6.5 pt-5 flex-1 max-[480px]:p-5 max-[480px]:pt-4">
                    <h3 className={`font-display text-[17px] font-bold mb-2.5 tracking-tight ${u.featured ? "text-white" : "text-gray-900"}`}>{u.title}</h3>
                    <p className={`text-sm leading-[1.7] ${u.featured ? "text-white/75" : "text-gray-500"}`}>{u.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
