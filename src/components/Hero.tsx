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
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAxBbRSrNc4cRKBn0PooUKukCsBhTqtc5WMUeCe0s1ig0IjOhADIXFg-uJMbThVIY3hard9uZi8POAiaHddTeuo23HhlntCTVckJNnq2O8UiJKfdw32dDUeROcTPeAUr3liLtsmtrK9Ggh1QDWsfEYOPsBXxKthavD73-eaZO_4vn260jASdnhpdoJK5-peHUNEEBsN2XTjRrDR9ZVhRZCSrso27kbxMA0D5rqaomiuq8DKwwVRUM"
          alt="Delicious gourmet burger with fries and beverage"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/60" />
      </div>

      {/* Hero Content - All texts in Bebas Neue */}
      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center pt-16 px-4">
        <h1
          id="hero-title"
          className="font-novecento text-[#FCD306] text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.88] uppercase tracking-tight drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)] select-none"
        >
          {t.hero.title1}
          <br />
          {t.hero.title2}
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
