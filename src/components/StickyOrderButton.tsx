import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function StickyOrderButton() {
  const { t } = useLanguage();

  return (
    <a
      id="sticky-order-now-btn"
      href="tel:0674583706"
      aria-label="Commander par téléphone : 0674 58 37 06"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 inline-flex items-center gap-2.5 sm:gap-3 bg-[#FCD306] hover:bg-[#ffe14d] text-[#4b1007] px-5 py-3 sm:px-6 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.45)] hover:shadow-[0_14px_35px_rgba(252,211,6,0.6)] border-2 border-[#4b1007]/20 transition-all duration-200 transform hover:scale-105 active:scale-95 group cursor-pointer"
    >
      <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#4b1007] text-[#FCD306] flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-200">
        <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" />
      </span>
      <span className="font-novecento text-base sm:text-lg tracking-widest uppercase font-bold text-[#4b1007]">
        {t.nav.orderNow}
      </span>
    </a>
  );
}
