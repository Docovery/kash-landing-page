import type { ReactNode } from "react";

export type LegalSection = {
  title: string;
  body: ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  version,
  publisher,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  version?: string;
  /** Bloc éditeur (raison sociale, adresse, contact) affiché sous la date. */
  publisher?: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <div className="flex flex-col gap-5 pb-5">
      {/* Hero */}
      <div className="bg-linear-to-br from-primary-dark via-primary to-primary mt-[100px] mx-10 rounded-3xl py-16 px-15 text-center relative overflow-hidden max-[900px]:mx-3 max-[900px]:px-6 max-[900px]:py-12 max-[480px]:mx-2 max-[480px]:px-4 max-[480px]:rounded-2xl max-[480px]:py-10">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,127,80,0.2)_0%,transparent_65%)] pointer-events-none" />
        <div className="relative z-2 max-w-[700px] mx-auto">
          <div className="inline-block font-display text-[11px] font-bold text-white/80 bg-white/12 py-1.5 px-3.5 rounded-full uppercase tracking-[1.2px] mb-5">
            {eyebrow}
          </div>
          <h1 className="font-display text-[clamp(28px,3.6vw,44px)] font-extrabold text-white leading-[1.08] tracking-[-1.5px] mb-4">
            {title}
          </h1>
          <p className="text-[15px] font-light text-white/70 leading-[1.75] max-w-[560px] mx-auto">
            {intro}
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="bg-white rounded-3xl py-16 px-15 mx-10 max-[900px]:py-10 max-[900px]:px-6 max-[900px]:mx-3 max-[480px]:py-8 max-[480px]:px-4 max-[480px]:mx-2 max-[480px]:rounded-2xl">
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-col gap-3 mb-10 pb-6 border-b border-gray-100">
            <p className="font-display text-xs font-semibold text-gray-400 uppercase tracking-[1px]">
              Dernière mise à jour : {lastUpdated}
              {version && <> · Version {version}</>}
            </p>
            {publisher && (
              <div className="text-[13px] text-gray-500 leading-[1.7] [&_a]:text-primary [&_a]:no-underline hover:[&_a]:underline">
                {publisher}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-11">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-display text-lg font-bold text-gray-900 mb-3 tracking-tight">
                  {s.title}
                </h2>
                <div className="flex flex-col gap-3 text-[15px] text-gray-600 leading-[1.8] [&_a]:text-primary [&_a]:no-underline [&_a]:font-medium hover:[&_a]:underline [&_strong]:text-gray-900 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_h3]:font-display [&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-2 [&_table]:w-full [&_table]:text-left [&_table]:text-sm [&_th]:font-semibold [&_th]:text-gray-900 [&_th]:bg-gray-50 [&_th]:py-2.5 [&_th]:px-4 [&_td]:py-2.5 [&_td]:px-4 [&_td]:align-top [&_tr]:border-b [&_tr]:border-gray-100 [&_tbody_tr:last-child]:border-b-0">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
