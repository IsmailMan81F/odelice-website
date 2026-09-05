import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PromoSectionProps {
  onMoreAboutUs?: () => void;
}

export default function PromoSection({ onMoreAboutUs }: PromoSectionProps) {
  const { t } = useLanguage();

  return (
    <section
      id="promo-section"
      className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden bg-[#160a08] py-20 px-6 sm:px-12 md:px-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN-364UpEhKWJUtDIwC6wliYIme_ivS5vBmCq4AoVrDuZL4QSLeKWQp1ISfejPpzoVdFgx0Opq5RR_Z0Jm5CqOoaCzu-WrZNE4XtA01NKzcR347E6RmBgm2ywSakCroR3nFlkhw1-Uc1o_zuoNi3sno6PY6kO7Zs_zTNKQFgf32O7houVXurQJ9CISgIQED_3VBVtin8SggpAp7udjCMVdRDyC6ZLqWMe387WpJq4MRLWosJZE-00"
          alt="Big juicy burger and crispy fries background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center sm:object-right filter brightness-[0.7] contrast-[1.1]"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#140605] via-[#140605]/85 to-transparent" />
      </div>

      {/* Content on Left - All texts in Bebas Neue */}
      <div className="relative z-10 max-w-xl text-left">
        <h2
          id="promo-heading"
          className="font-novecento text-[#FCD306] text-5xl sm:text-7xl md:text-8xl leading-[0.9] uppercase tracking-tight"
        >
          {t.promo.heading1}
          <br />
          {t.promo.heading2}
          <br />
          {t.promo.heading3}
        </h2>
        <p
          id="promo-description"
          className="text-stone-200 text-base sm:text-lg mt-5 leading-relaxed max-w-md tracking-wider font-normal"
        >
          {t.promo.description}
        </p>
        <div className="mt-8">
          <button
            id="promo-cta-btn"
            onClick={onMoreAboutUs}
            className="inline-flex items-center gap-2.5 bg-[#b81414] hover:bg-[#991212] text-white tracking-widest text-lg sm:text-xl px-7 sm:px-8 py-3 rounded-md shadow-lg transition-transform duration-150 transform hover:scale-105 active:scale-95 uppercase cursor-pointer"
          >
            <span>{t.promo.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
