import { Star } from 'lucide-react';
import { MenuItem } from '../types';

interface FoodCardProps {
  key?: string | number;
  item: MenuItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  return (
    <article
      id={`menu-item-${item.id}`}
      className="bg-transparent flex flex-col group"
    >
      {/* Image Container with hover zoom */}
      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-stone-200 shadow-sm transition-shadow group-hover:shadow-md relative">
        <img
          src={item.image}
          alt={item.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Information - Strictly Bebas Neue */}
      <div className="pt-3.5 flex flex-col flex-1">
        <h3 className="text-xl sm:text-2xl text-[#4b1007] tracking-wider uppercase font-normal">
          {item.name}
        </h3>
        <p className="font-inter text-stone-600 text-xs sm:text-sm mt-1 leading-snug tracking-normal line-clamp-2">
          {item.description}
        </p>

        {/* Stronger stroke line on top of the stars and the price */}
        <div className="mt-3.5 pt-2.5 border-t-2 border-[#8e7b6d] flex items-center justify-between">
          <div
            aria-label={`${item.rating} stars`}
            className="flex text-[#b81414] space-x-1"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${
                  star <= item.rating
                    ? 'fill-[#b81414] text-[#b81414]'
                    : 'text-stone-300 fill-transparent'
                }`}
              />
            ))}
          </div>
          <span className="text-xl sm:text-2xl text-[#b81414] font-normal tracking-wide">
            {item.price} DA
          </span>
        </div>
      </div>
    </article>
  );
}
