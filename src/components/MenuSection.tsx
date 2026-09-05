import { ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import FoodCard from './FoodCard';

interface MenuSectionProps {
  items: MenuItem[];
  onExploreAll?: () => void;
}

export default function MenuSection({ items, onExploreAll }: MenuSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="menu" className="bg-[#f7f5f2] pt-14 pb-24 px-4 sm:px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title - Verified Bebas Neue */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="menu-heading"
            className="font-novecento text-[#4b1007] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.92]"
          >
            {t.favorites.title1}
            <br />
            {t.favorites.title2}
          </h2>
        </div>

        {/* 6 Food Cards Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>

        {/* EXPLORE ALL Button - Links to Menu Page */}
        <div className="mt-14 sm:mt-16 text-center">
          <button
            id="explore-all-btn"
            onClick={onExploreAll}
            className="inline-flex items-center gap-2 bg-[#b81414] hover:bg-[#991212] text-white tracking-widest text-lg sm:text-xl px-8 py-3 rounded-md shadow-md transition-transform duration-150 transform hover:scale-105 active:scale-95 uppercase cursor-pointer"
          >
            <span>{t.favorites.exploreAll}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
