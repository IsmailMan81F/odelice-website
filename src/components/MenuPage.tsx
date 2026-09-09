import { useState } from 'react';
import { MENU_IMAGE_GROUPS } from '../menuImageData';
import { useLanguage } from '../context/LanguageContext';
import MarqueeRibbon from './MarqueeRibbon';
import MenuImageLayout from './MenuImageLayout';

export default function MenuPage() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = MENU_IMAGE_GROUPS;

  const filteredCategories =
    selectedCategory === 'all'
      ? categories
      : categories.filter((cat) => cat.id === selectedCategory);

  const totalItemCount = categories.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  );

  const scrollToCategory = (categoryId: string) => {
    setSelectedCategory('all');
    setTimeout(() => {
      const element = document.getElementById(`category-${categoryId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <div id="menu-page" className="min-h-screen bg-[#f7f5f2] flex flex-col">
      {/* Top Hero Banner - Accommodating transparent absolute Header with image background */}
      <section className="relative bg-[#120505] text-white pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 overflow-hidden border-b border-white/10">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80"
            alt="Delicious feast with burgers, pizzas, tacos, and grilled dishes"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.36] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120505] via-black/55 to-black/75" />
        </div>

        {/* Subtle radial warmth in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#b81414]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Powerful Page Title - Exact same size as Hero section h1 */}
          <h1 className="font-novecento text-[#FCD306] text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.88] uppercase tracking-tight drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)] select-none mb-4 sm:mb-6">
            {t.menuPage.title}
          </h1>

          <p className="text-white text-base sm:text-xl md:text-2xl tracking-widest uppercase font-normal max-w-3xl mx-auto mb-8 sm:mb-10">
            {t.menuPage.subtitle}
          </p>

          {/* Category Filter Chips / Buttons with smaller border radius (rounded-md like home page) */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-md text-sm sm:text-base tracking-widest uppercase transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#FCD306] text-[#4b1007] font-normal shadow-md scale-105'
                  : 'bg-white/10 text-stone-300 hover:text-white hover:bg-white/20'
              }`}
            >
              {t.menuPage.allItems} ({totalItemCount})
            </button>

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  scrollToCategory(cat.id);
                }}
                className={`px-5 py-2.5 rounded-md text-sm sm:text-base tracking-widest uppercase transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#FCD306] text-[#4b1007] font-normal shadow-md scale-105'
                    : 'bg-white/10 text-stone-300 hover:text-white hover:bg-white/20'
                }`}
              >
                {cat.name} ({cat.items.length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Red inclined delivery slider ribbon right after hero section */}
      <MarqueeRibbon topBgColor="bg-[#120505]" bottomBgColor="bg-[#f7f5f2]" />

      {/* Main Categories Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16">
        <MenuImageLayout groups={filteredCategories} />

        {/* Bottom CTA Box after all cards */}
        <div className="mt-16 sm:mt-24 mb-6 text-center bg-[#4b1007] text-white p-8 sm:p-12 rounded-2xl border border-[#350b05] shadow-2xl max-w-3xl mx-auto">
          <h3 className="font-novecento text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-3 leading-none">
            {t.menuPage.bottomTitle}
          </h3>
          <p className="text-[#FCD306] text-base sm:text-xl md:text-2xl uppercase tracking-widest font-normal">
            {t.menuPage.bottomSubtitle}
          </p>
        </div>
      </main>
    </div>
  );
}
