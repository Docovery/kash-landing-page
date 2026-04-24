"use client";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    { Icon: FiMail, label: "Email", value: "contact@kashapp.cd" },
    { Icon: FiPhone, label: "Téléphone", value: "+243 XXX XXX XXX" },
    { Icon: FiMapPin, label: "Adresse", value: "Kinshasa, RD Congo" },
  ];

  return (
    <div className="flex flex-col gap-5 pb-5">
      {/* Hero */}
      <div className="bg-linear-to-br from-primary-dark via-primary to-primary mt-[100px] mx-10 rounded-3xl py-20 px-15 text-center relative overflow-hidden max-[900px]:mx-3 max-[900px]:px-6 max-[900px]:py-14 max-[480px]:mx-2 max-[480px]:px-4 max-[480px]:rounded-2xl max-[480px]:py-12">
        <div className="absolute bottom-[-80px] left-[-80px] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(255,127,80,0.2)_0%,transparent_65%)] pointer-events-none" />
        <div className="relative z-2 max-w-[700px] mx-auto">
          <div className="inline-block font-display text-[11px] font-bold text-white/80 bg-white/12 py-1.5 px-3.5 rounded-full uppercase tracking-[1.2px] mb-5">Contact</div>
          <h1 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-white leading-[1.08] tracking-[-2px] mb-5">
            Parlons ensemble
          </h1>
          <p className="text-base font-light text-white/70 leading-[1.75] max-w-[480px] mx-auto">
            Une question, un partenariat ou besoin d&apos;aide ? Notre équipe est à votre écoute.
          </p>
        </div>
      </div>

      {/* Contact form + info */}
      <section className="bg-white rounded-3xl py-20 px-15 mx-10 max-[900px]:py-14 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:py-10 max-[480px]:px-4 max-[480px]:mx-2 max-[480px]:rounded-2xl">
        <div className="max-w-[1000px] mx-auto grid grid-cols-[1fr_1.2fr] gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-10">
          {/* Info side */}
          <div>
            <h2 className="font-display text-[clamp(22px,2.5vw,32px)] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Contactez-nous
            </h2>
            <p className="text-[15px] text-gray-500 leading-[1.75] mb-8">
              Nous répondons généralement sous 24 heures. Vous pouvez aussi nous joindre directement.
            </p>
            <div className="flex flex-col gap-5">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-muted flex items-center justify-center shrink-0">
                    <item.Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-xs font-semibold text-gray-400 uppercase tracking-[1px] mb-0.5">{item.label}</div>
                    <div className="text-[15px] text-gray-800 font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form side */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 max-[480px]:p-5">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                <p className="text-sm text-gray-500">Nous reviendrons vers vous très bientôt.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4 max-[480px]:grid-cols-1">
                  <div>
                    <label className="font-display text-xs font-semibold text-gray-600 uppercase tracking-[0.8px] mb-1.5 block">Nom</label>
                    <input type="text" required placeholder="Votre nom" className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-gray-300" />
                  </div>
                  <div>
                    <label className="font-display text-xs font-semibold text-gray-600 uppercase tracking-[0.8px] mb-1.5 block">Email</label>
                    <input type="email" required placeholder="votre@email.com" className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-gray-300" />
                  </div>
                </div>
                <div>
                  <label className="font-display text-xs font-semibold text-gray-600 uppercase tracking-[0.8px] mb-1.5 block">Sujet</label>
                  <select className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all">
                    <option>Question générale</option>
                    <option>Devenir partenaire commerçant</option>
                    <option>Support technique</option>
                    <option>Partenariat / Presse</option>
                  </select>
                </div>
                <div>
                  <label className="font-display text-xs font-semibold text-gray-600 uppercase tracking-[0.8px] mb-1.5 block">Message</label>
                  <textarea required rows={5} placeholder="Votre message..." className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none placeholder:text-gray-300" />
                </div>
                <button type="submit" className="font-display text-sm font-semibold text-white bg-gradient-to-br from-primary to-primary-dark rounded-full py-3.5 px-8 cursor-pointer transition-all shadow-[0_4px_16px_rgba(0,87,183,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,87,183,0.4)] self-start max-[480px]:self-stretch max-[480px]:text-center">
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
