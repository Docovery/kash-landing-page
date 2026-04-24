import { FaStar } from "react-icons/fa";

const StarIcon = ({ featured = false }: { featured?: boolean }) => (
  <FaStar className={`w-[13px] h-[13px] ${featured ? "text-accent" : "text-green-600"}`} />
);

const testimonials = [
  { text: "Gr\u00e2ce \u00e0 Kash, ma boutique est visible par des centaines de personnes dans le quartier. Je re\u00e7ois des clients que je n\u2019aurais jamais touch\u00e9s autrement.", initials: "AM", name: "Amina Mbaye", meta: "Kinshasa \u2014 commer\u00e7ante" },
  { text: "Avant Kash, je perdais du temps \u00e0 chercher o\u00f9 acheter certains produits. Maintenant, je sais exactement o\u00f9 aller et \u00e0 quel prix avant m\u00eame de sortir de chez moi.", initials: "FK", name: "Fatou Konat\u00e9", meta: "Lubumbashi \u2014 cliente", featured: true },
  { text: "L\u2019appli est tr\u00e8s simple \u00e0 utiliser. En quelques clics, je trouve les commerces autour de moi avec tous les d\u00e9tails dont j\u2019ai besoin.", initials: "JN", name: "Jean-Pierre Nkutu", meta: "Goma \u2014 client" },
  { text: "Ce qui m\u2019a convaincu, c\u2019est de pouvoir comparer les prix entre plusieurs boutiques sans me d\u00e9placer. Je sais exactement o\u00f9 aller.", initials: "OD", name: "Oumar Diallo", meta: "Bukavu \u2014 client" },
  { text: "En tant que m\u00e8re de famille, Kash me facilite la vie. Je trouve ce dont j\u2019ai besoin pr\u00e8s de chez moi sans perdre de temps dans les d\u00e9placements.", initials: "GS", name: "Grace Samba", meta: "Matadi \u2014 cliente" },
  { text: "Depuis que Kash r\u00e9f\u00e9rence ma boutique, les clients viennent en sachant d\u00e9j\u00e0 ce qu\u2019ils veulent. C\u2019est plus simple pour eux et pour moi.", initials: "ML", name: "Moussa Lamine", meta: "Kisangani \u2014 commer\u00e7ant" },
];

export default function Testimonials() {
  return (
    <section className="bg-white rounded-3xl py-25 px-15 mx-10 max-[900px]:py-16 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:py-12 max-[480px]:px-4 max-[480px]:mx-2 max-[480px]:rounded-2xl">
      <div className="max-w-[1200px] mx-auto">
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

        <div className="grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[900px]:grid-cols-1">
          {testimonials.map((t, i) => (
            <div key={i} className={`rounded-3xl p-6.5 transition-all duration-200 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,87,183,0.14)] max-[480px]:p-5 max-[480px]:rounded-2xl
              ${t.featured ? "testimonial-featured bg-primary border border-primary" : "bg-gray-50 border border-gray-200"}`}>
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => <StarIcon key={j} featured={t.featured} />)}
              </div>
              <p className={`text-sm leading-[1.7] mb-5.5 ${t.featured ? "text-white/85" : "text-gray-600"}`}>{t.text}</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-[13px] font-bold shrink-0 ${t.featured ? "bg-white/15 text-white" : "bg-primary-muted text-primary"}`}>
                  {t.initials}
                </div>
                <div>
                  <div className={`font-display text-sm font-bold ${t.featured ? "text-white" : "text-gray-900"}`}>{t.name}</div>
                  <div className={`text-xs ${t.featured ? "text-white/55" : "text-gray-400"}`}>{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
