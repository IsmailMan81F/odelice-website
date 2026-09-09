import { MENU_IMAGE_GROUPS } from '../menuImageData';
import MenuImageLayout from './MenuImageLayout';

export default function MenuSection() {
  const categories = MENU_IMAGE_GROUPS;

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
            Pizzas artisanales façonnées à la main, burgers savoureux, tacos généreux, assiettes complètes, sandwichs et entrées.
          </p>
        </div>

        <MenuImageLayout groups={categories} />
      </div>
    </section>
  );
}
