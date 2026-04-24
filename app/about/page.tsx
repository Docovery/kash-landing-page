import { FiUsers, FiShield, FiZap } from "react-icons/fi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "\u00c0 propos",
  description:
    "D\u00e9couvrez la mission de Kash : digitaliser le commerce local en RD Congo en r\u00e9f\u00e9ren\u00e7ant les boutiques et produits de proximit\u00e9.",
  openGraph: {
    title: "\u00c0 propos | Kash",
    description:
      "D\u00e9couvrez la mission de Kash : digitaliser le commerce local en RD Congo.",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-5 pb-5">

      {/* Hero */}
      <div className="bg-linear-to-br from-primary-dark via-primary to-primary mt-[100px] mx-10 rounded-3xl py-20 px-15 text-center relative overflow-hidden max-[900px]:mx-3 max-[900px]:px-6 max-[900px]:py-14 max-[480px]:mx-2 max-[480px]:px-4 max-[480px]:rounded-2xl max-[480px]:py-12">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,127,80,0.2)_0%,transparent_65%)] pointer-events-none" />
        <div className="relative z-2 max-w-[700px] mx-auto">
          <div className="inline-block font-display text-[11px] font-bold text-white/80 bg-white/12 py-1.5 px-3.5 rounded-full uppercase tracking-[1.2px] mb-5">À propos</div>
          <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-white leading-[1.08] tracking-[-2px] mb-5">
            Notre mission : connecter la RD Congo
          </h1>
          <p className="text-base font-light text-white/70 leading-[1.75] max-w-[520px] mx-auto">
            Kash est née de la volonté de rapprocher les commerçants locaux et les clients de proximité grâce à la technologie.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="bg-white rounded-3xl py-20 px-15 mx-10 max-[900px]:py-14 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:py-10 max-[480px]:px-4 max-[480px]:mx-2 max-[480px]:rounded-2xl">
        <div className="max-w-[800px] mx-auto">
          <div className="inline-block font-display text-[11px] font-bold text-primary bg-primary-muted py-1.5 px-3.5 rounded-full uppercase tracking-[1.2px] mb-5">Notre histoire</div>
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
            Pourquoi Kash existe
          </h2>
          <div className="flex flex-col gap-5 text-gray-600 leading-[1.8] text-[15px]">
            <p>
              En RD Congo, des milliers de commer\u00e7ants locaux offrent des produits et services de qualit\u00e9, mais restent invisibles pour les clients de leur quartier. De l&apos;autre c\u00f4t\u00e9, les consommateurs peinent \u00e0 trouver ce qu&apos;ils cherchent et perdent du temps en d\u00e9placements inutiles.
            </p>
            <p>
              Kash est la solution : un catalogue digital qui r\u00e9f\u00e9rence les commerces locaux. Notre \u00e9quipe recense les boutiques, leurs produits et leurs prix pour permettre aux clients de tout trouver depuis leur t\u00e9l\u00e9phone, avant m\u00eame de se d\u00e9placer.
            </p>
            <p>
              Notre vision est simple : <strong className="text-gray-900">digitaliser le commerce local en Afrique</strong>, une ville \u00e0 la fois.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 rounded-3xl py-20 px-15 mx-10 max-[900px]:py-14 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:py-10 max-[480px]:px-4 max-[480px]:mx-2 max-[480px]:rounded-2xl">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block font-display text-[11px] font-bold text-primary bg-primary-muted py-1.5 px-3.5 rounded-full uppercase tracking-[1.2px] mb-5">Nos valeurs</div>
            <h2 className="font-display text-[clamp(24px,3vw,38px)] font-extrabold text-gray-900 leading-[1.1] tracking-tight">Ce qui nous guide</h2>
          </div>
          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {[
              { Icon: FiUsers, title: "Proximité", desc: "Nous croyons au pouvoir du commerce local et de la communauté." },
              { Icon: FiShield, title: "Confiance", desc: "Données sécurisées, transactions transparentes, commerçants vérifiés." },
              { Icon: FiZap, title: "Innovation", desc: "Nous utilisons la technologie pour simplifier le quotidien de chacun." },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-200 text-center hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,87,183,0.14)] transition-all group max-[480px]:p-6 max-[480px]:rounded-2xl">
                <div className="w-14 h-14 bg-primary-muted rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors group-hover:bg-primary">
                  <v.Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-[1.7]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-primary-dark via-primary to-primary rounded-3xl py-16 px-15 mx-10 text-center relative overflow-hidden max-[900px]:mx-3 max-[900px]:px-6 max-[480px]:mx-2 max-[480px]:px-4 max-[480px]:rounded-2xl max-[480px]:py-12">
        <div className="relative z-2 max-w-[500px] mx-auto">
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-extrabold text-white tracking-tight mb-4">Rejoignez l&apos;aventure</h2>
          <p className="text-sm text-white/65 leading-[1.75] mb-8">Téléchargez Kash et faites partie de la révolution du commerce local en RD Congo.</p>
          <a href="/#cta" className="font-display text-sm font-semibold text-white bg-accent rounded-full py-[15px] px-[34px] no-underline inline-block shadow-[0_6px_24px_rgba(255,127,80,0.45)] hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(255,127,80,0.55)] transition-all max-[480px]:w-full max-[480px]:text-center">
            Télécharger l&apos;app
          </a>
        </div>
      </section>
    </div>
  );
}
