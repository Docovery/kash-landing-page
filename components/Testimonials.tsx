"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const StarIcon = ({ featured = false }: { featured?: boolean }) => (
  <FaStar className={`w-[13px] h-[13px] ${featured ? "text-accent" : "text-green-600"}`} />
);

const testimonials = [
  { text: "Grâce à Kash, ma boutique est visible par des centaines de personnes dans le quartier. Je reçois des clients que je n\u2019aurais jamais touchés autrement.", img: "/images/testimonials/amina.png", name: "Amina Mbaye", meta: "Kinshasa — commerçante" },
  { text: "Avant Kash, je perdais du temps à chercher où acheter certains produits. Maintenant, je sais exactement où aller et à quel prix avant même de sortir de chez moi.", img: "/images/testimonials/fatou.png", name: "Fatou Konaté", meta: "Lubumbashi — cliente", featured: true },
  { text: "L\u2019appli est très simple à utiliser. En quelques clics, je trouve les commerces autour de moi avec tous les détails dont j\u2019ai besoin.", img: "/images/testimonials/jeanpierre.png", name: "Jean-Pierre Nkutu", meta: "Goma — client" },
  { text: "Ce qui m\u2019a convaincu, c\u2019est de pouvoir comparer les prix entre plusieurs boutiques sans me déplacer. Je sais exactement où aller.", img: "/images/testimonials/oumar.png", name: "Oumar Diallo", meta: "Bukavu — client" },
  { text: "En tant que mère de famille, Kash me facilite la vie. Je trouve ce dont j\u2019ai besoin près de chez moi sans perdre de temps dans les déplacements.", img: "/images/testimonials/grace.png", name: "Grace Samba", meta: "Matadi — cliente" },
  { text: "Depuis que Kash référence ma boutique, les clients viennent en sachant déjà ce qu\u2019ils veulent. C\u2019est plus simple pour eux et pour moi.", img: "/images/testimonials/moussa.png", name: "Moussa Lamine", meta: "Kisangani — commerçant" },
];

export default function Testimonials() {
  return (
    <section className="bg-white rounded-3xl py-25 px-15 mx-10 max-[900px]:py-16 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:py-12 max-[480px]:px-4 max-[480px]:mx-2 max-[480px]:rounded-2xl">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal animation="fade-in-up">
          <div className="flex justify-between items-end mb-13 max-[900px]:flex-col max-[900px]:gap-4 max-[900px]:items-start max-[480px]:items-center max-[480px]:text-center max-[480px]:mb-10">
            <div>
              <div className="inline-block font-display text-[11px] font-bold text-primary bg-primary-muted py-1.5 px-3.5 rounded-full uppercase tracking-[1.2px] mb-4.5">Avis utilisateurs</div>
              <h2 className="font-display text-[clamp(28px,3vw,44px)] font-extrabold text-gray-900 leading-[1.1] tracking-tight">Ils utilisent Kash au quotidien</h2>
            </div>
            <div className="flex flex-col items-end gap-1 max-[480px]:items-center">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="w-4 h-4 text-green-600" />)}
              </div>
              <span className="font-display text-[13px] font-bold text-green-600">4.9 / 5</span>
              <span className="text-xs text-gray-400">sur 1 240 avis</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[900px]:grid-cols-1">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} animation="fade-in-up" delay={i * 0.1}>
              <div className={`testimonial-card rounded-3xl p-6.5 relative overflow-hidden max-[480px]:p-5 max-[480px]:rounded-2xl cursor-default
                ${t.featured ? "testimonial-featured bg-primary border border-primary" : "bg-gray-50 border border-gray-200 hover:border-primary/20"}`}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} featured={t.featured} />)}
                </div>
                <p className={`text-sm leading-[1.7] mb-5.5 ${t.featured ? "text-white/85" : "text-gray-600"}`}>{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-offset-1 ring-primary/20">
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <div className={`font-display text-sm font-bold ${t.featured ? "text-white" : "text-gray-900"}`}>{t.name}</div>
                    <div className={`text-xs ${t.featured ? "text-white/55" : "text-gray-400"}`}>{t.meta}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
