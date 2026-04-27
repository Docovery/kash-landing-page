import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-5 pb-5">
      <div className="bg-linear-to-br from-primary-dark via-primary to-primary mt-[100px] mx-10 rounded-3xl py-28 px-15 text-center relative overflow-hidden max-[900px]:mx-3 max-[900px]:px-6 max-[900px]:py-20 max-[480px]:mx-2 max-[480px]:px-4 max-[480px]:rounded-2xl max-[480px]:py-16">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,127,80,0.2)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-2 max-w-[540px] mx-auto">
          <div className="font-display text-[clamp(80px,12vw,140px)] font-extrabold text-white/10 leading-none tracking-[-6px] mb-2 select-none">
            404
          </div>
          <h1 className="font-display text-[clamp(24px,3.5vw,40px)] font-extrabold text-white leading-[1.1] tracking-[-1px] mb-4">
            Page introuvable
          </h1>
          <p className="text-base font-light text-white/60 leading-[1.75] max-w-[420px] mx-auto mb-10 max-[480px]:text-sm">
            La page que vous cherchez n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil pour continuer votre navigation.
          </p>
          <Link
            href="/"
            className="font-display text-sm font-semibold text-white bg-accent border-none rounded-full py-[15px] px-[34px] no-underline inline-block shadow-[0_6px_24px_rgba(255,127,80,0.45)] hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(255,127,80,0.55)] transition-all max-[480px]:w-full max-[480px]:text-center"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
