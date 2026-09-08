import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onExploreMenu?: () => void;
}

export default function Hero({ onExploreMenu }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      id="hero-section"
      className="relative min-h-[640px] sm:min-h-[720px] h-[92vh] max-h-[860px] flex items-center justify-center overflow-hidden bg-[#120505] px-4"
    >
      {/* Background Storefront Image & Darkening Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/hero image.png"
          alt="Restaurant O'délices"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.58] contrast-[1.18]"
        />
        {/* Darkening Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-[#120505]/40" />
      </div>

      {/* Hero Content - All texts in Bebas Neue */}
      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center pt-16 px-4">
        <h1
          id="hero-title"
          className="font-novecento text-[#FCD306] text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.88] tracking-tight drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)] select-none"
        >
          {t.hero.title}
        </h1>

        {/* Red CTA Button with Arrow */}
        <div className="mt-8 sm:mt-10">
          <button
            id="hero-cta-button"
            onClick={onExploreMenu}
            className="inline-flex items-center gap-2.5 bg-[#b81414] hover:bg-[#991212] text-white tracking-widest text-lg sm:text-xl px-8 sm:px-10 py-3 sm:py-3.5 rounded-md shadow-xl transition-transform duration-150 transform hover:scale-105 active:scale-95 uppercase cursor-pointer"
          >
            <span>{t.hero.exploreMenu}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
