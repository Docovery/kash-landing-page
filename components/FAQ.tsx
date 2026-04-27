"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqData = [
  { q: "Comment fonctionne Kash ?", a: "Kash est un catalogue digital qui référence les commerces locaux et leurs produits. Explorez les boutiques près de chez vous, comparez les prix et vérifiez la disponibilité avant de vous déplacer." },
  { q: "Comment ma boutique peut-elle être référencée ?", a: "C'est l'équipe Kash qui se charge de référencer votre commerce. Contactez-nous via l'application ou notre page contact, et nous ajoutons vos produits, prix et informations dans le catalogue." },
  { q: "Quelles villes sont couvertes ?", a: "Kash est déjà disponible dans plusieurs villes et nous élargissons notre couverture chaque mois. Vous pouvez suggérer votre ville depuis l'application." },
  { q: "Kash est-il gratuit ?", a: "Oui, l'application est entièrement gratuite pour les clients. Pour les commerçants, le référencement de base est gratuit. Des options de visibilité premium sont disponibles pour ceux qui souhaitent se démarquer." },
  { q: "Mes données sont-elles sécurisées ?", a: "Vos données sont chiffrées et stockées sur des serveurs sécurisés. Vous gardez le contrôle total et pouvez supprimer votre compte à tout moment depuis les paramètres de l'application." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="bg-white rounded-3xl py-25 px-15 mx-10 max-[900px]:py-16 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:py-12 max-[480px]:px-4 max-[480px]:mx-2 max-[480px]:rounded-2xl">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center">
          <div className="inline-block font-display text-[11px] font-bold text-primary bg-primary-muted py-1.5 px-3.5 rounded-full uppercase tracking-[1.2px] mb-4.5">FAQ</div>
          <h2 className="font-display text-[clamp(28px,3vw,44px)] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4">Des questions ?</h2>
          <p className="text-base font-light text-gray-500 leading-[1.75] max-w-[520px] mx-auto mb-13">Voici les réponses aux questions les plus fréquentes sur Kash.</p>
          <div className="text-left flex flex-col gap-0.5">
            {faqData.map((item, i) => (
              <div key={i} className={`border border-gray-200 rounded-[14px] overflow-hidden mb-2 transition-all hover:shadow-[0_2px_8px_rgba(0,87,183,0.08)] hover:border-primary/20 ${openIdx === i ? "faq-open border-primary/20" : ""}`}>
                <div
                  className="flex justify-between items-center py-4.5 px-5.5 font-display text-[15px] font-semibold text-gray-800 cursor-pointer select-none gap-4 max-[480px]:text-sm max-[480px]:py-3.5 max-[480px]:px-4 max-[480px]:gap-3"
                  onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                >
                  {item.q}
                  <div className={`w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0 transition-all duration-250 ${openIdx === i ? "bg-primary rotate-180" : "bg-primary-muted"}`}>
                    <FiChevronDown className={`w-3 h-3 ${openIdx === i ? "text-white" : "text-primary"}`} />
                  </div>
                </div>
                <div className="faq-answer">
                  <p className="px-5.5 pb-5 text-sm text-gray-500 leading-[1.75] max-[480px]:px-4 max-[480px]:pb-4 max-[480px]:text-[13px]">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
