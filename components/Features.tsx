import { FiMapPin, FiUsers, FiZap } from "react-icons/fi";

const features = [
  {
    icon: <FiMapPin />,
    title: "Découverte locale",
    desc: "Explorez les commerçants autour de vous, consultez leurs catalogues, promotions et avis clients  le tout en temps réel, depuis votre quartier.",
  },
  {
    icon: <FiUsers />,
    title: "Mise en relation directe",
    desc: "Kash connecte clients et commerçants de proximité. Trouvez le bon vendeur, comparez les offres et échangez en toute confiance.",
  },
  {
    icon: <FiZap />,
    title: "Simplifiez votre quotidien",
    desc: "Une interface intuitive et ergonomique, pensée pour être prise en main en quelques secondes. Pas besoin de tutoriel  tout est clair, fluide et accessible à tous.",
  },
];

export default function Features() {
  return (
    <section className="features-grid-bg bg-gray-50 relative overflow-hidden rounded-3xl py-25 px-15 mx-10 max-[900px]:py-16 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:py-12 max-[480px]:px-4 max-[480px]:mx-2 max-[480px]:rounded-2xl" id="features">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 relative">
          <div className="inline-block font-display text-[11px] font-bold text-primary bg-primary-muted py-1.5 px-3.5 rounded-full uppercase tracking-[1.2px] mb-4.5">Fonctionnalités</div>
          <h2 className="font-display text-[clamp(28px,3vw,44px)] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4">Tout ce dont vous avez besoin</h2>
          <p className="text-base font-light text-gray-500 leading-[1.75] max-w-[520px] mx-auto max-[480px]:text-sm">Une application pensée pour rapprocher commerçants et clients simple, rapide et efficace.</p>
        </div>
        <div className="grid grid-cols-3 gap-6 relative max-[1024px]:grid-cols-2 max-[900px]:grid-cols-1">
          {features.map((f, i) => (
            <div key={i} className="feature-card-gradient bg-white rounded-3xl py-9 px-7 border border-gray-200 transition-all duration-250 relative overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,87,183,0.14)] group max-[480px]:py-7 max-[480px]:px-5 max-[480px]:rounded-2xl">
              <div className="w-[50px] h-[50px] bg-primary-muted rounded-[14px] flex items-center justify-center mb-5.5 transition-colors group-hover:bg-primary">
                <div className="text-[22px] text-primary group-hover:text-white transition-colors">
                  {f.icon}
                </div>
              </div>
              <h3 className="font-display text-[17px] font-bold text-gray-900 mb-2.5 tracking-tight">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-[1.7]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
