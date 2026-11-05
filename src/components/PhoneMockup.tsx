import type { Screen } from "../screens";

type PhoneMockupProps = {
  screen: Screen;
  alt: string;
  /** Largeur rendue de l'image, pour le choix 400w / 800w (attribut `sizes`). */
  sizes: string;
  /** Classes du conteneur : la largeur du téléphone se règle ici (w-[…]). */
  className?: string;
  /** Image au-dessus de la ligne de flottaison (hero) : chargée en priorité. */
  priority?: boolean;
};

/**
 * Cadre de téléphone dessiné en CSS autour d'une capture brute.
 * Toutes les cotes sont en unités de conteneur (cqw) : le cadre, la Dynamic
 * Island et la barre d'état suivent la largeur donnée via `className`.
 * Styles : `.phone*` dans index.css.
 */
export default function PhoneMockup({ screen, alt, sizes, className = "", priority = false }: PhoneMockupProps) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-body">
        <span className="phone-btn phone-btn-action" aria-hidden="true" />
        <span className="phone-btn phone-btn-vol-up" aria-hidden="true" />
        <span className="phone-btn phone-btn-vol-down" aria-hidden="true" />
        <span className="phone-btn phone-btn-power" aria-hidden="true" />
        <div className="phone-bezel">
          <div className="phone-screen" style={{ backgroundColor: screen.bg }}>
            <div className="phone-status" aria-hidden="true">
              <span className="phone-time">9:41</span>
              <svg className="phone-status-icons" viewBox="0 0 68 13" fill="currentColor">
                <rect x="0" y="8" width="3" height="4" rx="0.8" />
                <rect x="4.5" y="6" width="3" height="6" rx="0.8" />
                <rect x="9" y="3.5" width="3" height="8.5" rx="0.8" />
                <rect x="13.5" y="1" width="3" height="11" rx="0.8" />
                <path d="M21.9 4.9a10 10 0 0 1 14.2 0M24.4 7.4a6.5 6.5 0 0 1 9.2 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M29 12l-2.12-2.12a3 3 0 0 1 4.24 0z" />
                <rect x="42" y="1.5" width="23" height="10" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.4" />
                <rect x="44" y="3.5" width="17" height="6" rx="1.5" />
                <rect x="66" y="5" width="1.5" height="3.5" rx="0.75" fillOpacity="0.4" />
              </svg>
            </div>
            <img
              className="phone-shot"
              src={screen.src}
              srcSet={`${screen.srcSm} 400w, ${screen.src} ${screen.width}w`}
              sizes={sizes}
              width={screen.width}
              height={screen.height}
              alt={alt}
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              decoding="async"
              draggable={false}
            />
            <span className="phone-island" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
