import { MenuImageItem } from '../menuImageData';

interface FoodCardProps {
  key?: string | number;
  item: MenuImageItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  return (
    <article
      id={`menu-item-${item.id}`}
      className="bg-white border-2 border-[#8e7b6d] rounded-xl overflow-hidden flex flex-col group shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-full overflow-hidden bg-white relative">
        <img
          src={item.image}
          alt={item.alt}
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
          className="block w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
    </article>
  );
}
