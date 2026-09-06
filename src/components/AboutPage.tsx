import {
  ArrowRight,
  UtensilsCrossed,
  Flame,
  Award,
  Heart,
  ShoppingBag,
  Star,
  Sparkles,
  Utensils,
  CheckCircle2,
  Smile,
  Users,
  Banknote,
  Baby,
  Car,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import MarqueeRibbon from './MarqueeRibbon';

interface AboutPageProps {
  onNavigate: (page: 'home' | 'menu' | 'about') => void;
}

interface HighlightGroup {
  title: string;
  icon: typeof ShoppingBag;
  items: string[];
}

const HIGHLIGHT_GROUPS_EN: HighlightGroup[] = [
  {
    title: 'Service Options',
    icon: ShoppingBag,
    items: ['Delivery', 'Takeaway', 'Dine-in'],
  },
  {
    title: 'Popular For',
    icon: Star,
    items: ['Lunch', 'Dinner', 'Solo dining'],
  },
  {
    title: 'Offerings',
    icon: Sparkles,
    items: ['Quick bite'],
  },
  {
    title: 'Dining Options',
    icon: Utensils,
    items: ['Lunch', 'Dinner', 'Catering', 'Dessert', 'Table service'],
  },
  {
    title: 'Amenities',
    icon: CheckCircle2,
    items: ['Toilet'],
  },
  {
    title: 'Atmosphere',
    icon: Smile,
    items: ['Casual'],
  },
  {
    title: 'Crowd',
    icon: Users,
    items: ['Groups'],
  },
  {
    title: 'Payments',
    icon: Banknote,
    items: ['Cash only'],
  },
  {
    title: 'Children',
    icon: Baby,
    items: ['Good for kids'],
  },
  {
    title: 'Parking',
    icon: Car,
    items: ['Free of charge street parking', 'Free parking lot'],
  },
];

const HIGHLIGHT_GROUPS_FR: HighlightGroup[] = [
  {
    title: 'Options de service',
    icon: ShoppingBag,
    items: ['Livraison', 'À emporter', 'Sur place'],
  },
  {
    title: 'Populaire pour',
    icon: Star,
    items: ['Déjeuner', 'Dîner', 'Repas en solo'],
  },
  {
    title: 'Offres',
    icon: Sparkles,
    items: ['Sur le pouce'],
  },
  {
    title: 'Options de restauration',
    icon: Utensils,
    items: ['Déjeuner', 'Dîner', 'Traiteur', 'Dessert', 'Service à table'],
  },
  {
    title: 'Commodités',
    icon: CheckCircle2,
    items: ['Toilettes'],
  },
  {
    title: 'Ambiance',
    icon: Smile,
    items: ['Décontractée'],
  },
  {
    title: 'Clientèle',
    icon: Users,
    items: ['Groupes'],
  },
  {
    title: 'Paiements',
    icon: Banknote,
    items: ['Espèces uniquement'],
  },
  {
    title: 'Enfants',
    icon: Baby,
    items: ['Adapté aux enfants'],
  },
  {
    title: 'Stationnement',
    icon: Car,
    items: ['Stationnement gratuit dans la rue', 'Parking gratuit'],
  },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const { language, t } = useLanguage();

  const highlightGroups = language === 'fr' ? HIGHLIGHT_GROUPS_FR : HIGHLIGHT_GROUPS_EN;

  return (
    <div id="about-page" className="min-h-screen bg-[#f7f5f2] flex flex-col">
      {/* Hero Banner with background image & overlay */}
      <section className="relative bg-[#120505] text-white pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 overflow-hidden border-b border-white/10">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80"
            alt="Artisanal kitchen and dining atmosphere"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.36] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120505] via-black/55 to-black/75" />
        </div>

        {/* Subtle radial warmth in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#b81414]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="font-novecento text-[#FCD306] text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.88] uppercase tracking-tight drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)] select-none mb-4">
            {t.aboutPage.title}
          </h1>
          <p className="text-white text-base sm:text-xl md:text-2xl tracking-widest uppercase font-normal max-w-2xl mx-auto">
            {t.aboutPage.subtitle}
          </p>
        </div>
      </section>

      {/* Red inclined delivery slider ribbon right after hero section */}
      <MarqueeRibbon topBgColor="bg-[#120505]" bottomBgColor="bg-[#f7f5f2]" />

      {/* Main About Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-24">
        {/* Story and Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div>
            <span className="text-[#b81414] text-lg sm:text-xl tracking-widest uppercase block mb-2 font-normal">
              {t.aboutPage.welcome}
            </span>
            <h2 className="font-novecento text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#4b1007] leading-[0.95] mb-6">
              {t.aboutPage.heading}
            </h2>
            <div className="space-y-4 text-[#4b1007]/80 text-base sm:text-lg leading-relaxed tracking-wide">
              <p>{t.aboutPage.p1}</p>
              <p>{t.aboutPage.p2}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('menu')}
                className="inline-flex items-center gap-2.5 bg-[#b81414] hover:bg-[#991212] text-white tracking-widest text-lg px-8 py-3.5 rounded-md shadow-lg transition-transform duration-150 transform hover:scale-105 active:scale-95 uppercase font-normal cursor-pointer"
              >
                <span>{t.hero.exploreMenu}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2.5 bg-[#FCD306] hover:bg-[#e6bd02] text-[#4b1007] tracking-widest text-lg px-8 py-3.5 rounded-md shadow-lg transition-transform duration-150 transform hover:scale-105 active:scale-95 uppercase font-normal cursor-pointer"
              >
                <span>{t.nav.orderNow}</span>
                <ArrowRight className="w-4 h-4 text-[#4b1007]" />
              </button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <Flame className="w-8 h-8 text-[#b81414] mb-3" />
              <h3 className="text-2xl uppercase tracking-wider text-[#4b1007] mb-2">
                {t.aboutPage.feature1Title}
              </h3>
              <p className="text-[#4b1007]/70 text-sm tracking-wide">
                {t.aboutPage.feature1Desc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <UtensilsCrossed className="w-8 h-8 text-[#b81414] mb-3" />
              <h3 className="text-2xl uppercase tracking-wider text-[#4b1007] mb-2">
                {t.aboutPage.feature2Title}
              </h3>
              <p className="text-[#4b1007]/70 text-sm tracking-wide">
                {t.aboutPage.feature2Desc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <Award className="w-8 h-8 text-[#b81414] mb-3" />
              <h3 className="text-2xl uppercase tracking-wider text-[#4b1007] mb-2">
                {t.aboutPage.feature3Title}
              </h3>
              <p className="text-[#4b1007]/70 text-sm tracking-wide">
                {t.aboutPage.feature3Desc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <Heart className="w-8 h-8 text-[#b81414] mb-3" />
              <h3 className="text-2xl uppercase tracking-wider text-[#4b1007] mb-2">
                {t.aboutPage.feature4Title}
              </h3>
              <p className="text-[#4b1007]/70 text-sm tracking-wide">
                {t.aboutPage.feature4Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Section: Services, Amenities & Features */}
        <div className="mt-20 pt-16 border-t border-stone-300/70">
          <div className="text-center mb-12 sm:mb-14">
            <span className="text-[#b81414] text-lg sm:text-xl tracking-widest uppercase block mb-2 font-normal">
              {t.aboutPage.visitorGuide}
            </span>
            <h2 className="font-novecento text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#4b1007] leading-[0.95]">
              {t.aboutPage.amenitiesTitle}
            </h2>
            <p className="text-[#4b1007]/75 text-base sm:text-lg tracking-wider uppercase mt-3 max-w-xl mx-auto">
              {t.aboutPage.amenitiesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {highlightGroups.map((group) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={group.title}
                  className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FCD306]/25 flex items-center justify-center text-[#b81414] mb-3.5 border border-[#FCD306]/40">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl uppercase tracking-wider text-[#4b1007] font-normal mb-3 leading-snug">
                      {group.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {group.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm sm:text-base text-[#4b1007] tracking-wider uppercase"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#b81414] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
