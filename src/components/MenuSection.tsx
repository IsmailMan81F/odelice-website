import { Sparkles } from 'lucide-react';
import { getMenuCategories } from '../data';
import { useLanguage } from '../context/LanguageContext';
import FoodCard from './FoodCard';

export default function MenuSection() {
  const { language } = useLanguage();
  const categories = getMenuCategories(language);

  return (
    <section
      id="menu"
      className="bg-[#f7f5f2] pt-16 pb-24 px-4 sm:px-6 md:px-12 relative z-10 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <h2
            id="menu-heading"
            className="font-novecento text-[#4b1007] text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight uppercase leading-[0.92] mb-4 select-none"
          >
            NOTRE CARTE COMPLÈTE
          </h2>

          <p className="font-inter text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Pizzas artisanales façonnées à la main, burgers savoureux, tacos généreux, assiettes complètes et boissons fraîches.
          </p>
        </div>

        {/* Categories & Products */}
        <div className="space-y-16 sm:space-y-20">
          {categories.map((category) => (
            <div
              key={category.id}
              id={`category-${category.id}`}
              className="scroll-mt-28"
            >
              {/* Category Banner with Title and Inter-font Tagline Description */}
              <div className="bg-[#FCD306] text-[#4b1007] px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-sm mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-[#e6bd02]">
                <div className="flex items-center gap-3">
                  <h3 className="font-novecento text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider font-normal leading-none text-[#4b1007]">
                    {category.name}
                  </h3>
                  <span className="text-xs sm:text-sm bg-[#4b1007] text-[#FCD306] px-2.5 py-0.5 rounded-md tracking-widest font-normal">
                    {category.items.length} OPTIONS
                  </span>
                </div>

                {/* Subtitle / Tagline in Inter typeface */}
                <div className="flex items-center gap-2 text-[#4b1007]">
                  <Sparkles className="w-4 h-4 text-[#4b1007] shrink-0 hidden sm:inline" />
                  <p className="font-inter text-xs sm:text-sm font-medium leading-tight">
                    {category.tagline}
                  </p>
                </div>
              </div>

              {/* Responsive Grid of Food Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {category.items.map((item) => (
                  <FoodCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
