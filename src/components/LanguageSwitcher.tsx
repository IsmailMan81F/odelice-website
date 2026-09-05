import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'header' | 'footer' | 'drawer';
}

export default function LanguageSwitcher({
  className = '',
  variant = 'header',
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === 'drawer') {
    return (
      <div className={`flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/15 ${className}`}>
        <div className="flex items-center gap-2.5 text-white">
          <Languages className="w-5 h-5 text-[#FCD306]" />
          <span className="text-base tracking-widest uppercase">
            {language === 'en' ? 'Language' : 'Langue'}
          </span>
        </div>
        <div className="inline-flex rounded-lg p-1 bg-black/40 border border-white/10">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-md text-sm tracking-wider uppercase transition-all cursor-pointer font-medium ${
              language === 'en'
                ? 'bg-[#FCD306] text-[#4b1007] shadow-sm font-bold'
                : 'text-stone-300 hover:text-white'
            }`}
            aria-label="Switch to English"
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage('fr')}
            className={`px-3 py-1 rounded-md text-sm tracking-wider uppercase transition-all cursor-pointer font-medium ${
              language === 'fr'
                ? 'bg-[#FCD306] text-[#4b1007] shadow-sm font-bold'
                : 'text-stone-300 hover:text-white'
            }`}
            aria-label="Passer au Français"
          >
            FR
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 p-1 rounded-full bg-black/40 border border-white/25 backdrop-blur-sm shadow-sm ${className}`}
      title={language === 'en' ? 'Switch Language (EN / FR)' : 'Changer de langue (EN / FR)'}
    >
      <div className="pl-1.5 pr-0.5 text-[#FCD306] flex items-center justify-center">
        <Languages className="w-4 h-4" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-0.5 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer font-medium ${
          language === 'en'
            ? 'bg-[#FCD306] text-[#4b1007] shadow-sm font-bold scale-105'
            : 'text-white/80 hover:text-white'
        }`}
        aria-label="English language"
      >
        EN
      </button>

      <span className="text-white/30 text-xs">|</span>

      <button
        type="button"
        onClick={() => setLanguage('fr')}
        className={`px-2.5 py-0.5 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer font-medium ${
          language === 'fr'
            ? 'bg-[#FCD306] text-[#4b1007] shadow-sm font-bold scale-105'
            : 'text-white/80 hover:text-white'
        }`}
        aria-label="Langue française"
      >
        FR
      </button>
    </div>
  );
}
