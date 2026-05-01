import Image from "next/image";

const merchants = [
  { src: "/merchants/marchant1.svg", alt: "Partenaire 1" },
  { src: "/merchants/marchant2.svg", alt: "Partenaire 2" },
  { src: "/merchants/marchant3.svg", alt: "Partenaire 3" },
  { src: "/merchants/marchant4.svg", alt: "Partenaire 4" },
  { src: "/merchants/marchant5.svg", alt: "Partenaire 5" },
  { src: "/merchants/marchant6.svg", alt: "Partenaire 6" },
];

export default function LogosBar() {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...merchants, ...merchants, ...merchants];

  return (
    <div className="bg-white py-10 px-6 border-b border-gray-100 relative overflow-hidden mx-10 rounded-3xl max-[900px]:py-8 max-[900px]:mx-3 max-[480px]:mx-2 max-[480px]:py-6 max-[480px]:px-3 max-[480px]:rounded-2xl">
      {/* Centered title */}
      <p className="font-display text-[11px] font-semibold text-gray-400 uppercase tracking-[1.8px] text-center mb-7 max-[480px]:text-[10px] max-[480px]:tracking-[1.2px] max-[480px]:mb-5">
        Ils nous font confiance
      </p>

      {/* Infinite scroll track */}
      <div className="logos-fade relative overflow-hidden">
        <div className="flex items-center gap-16 w-max animate-[scrollLogos_20s_linear_infinite] max-[480px]:gap-10">
          {allLogos.map((m, i) => (
            <div
              key={`${m.src}-${i}`}
              className="h-16 shrink-0 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 max-[900px]:h-14 max-[480px]:h-12"
            >
              <Image
                src={m.src}
                alt={m.alt}
                width={600}
                height={192}
                style={{ height: "100%", width: "auto" }}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
