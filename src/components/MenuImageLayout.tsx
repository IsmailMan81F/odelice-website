import { Sparkles } from 'lucide-react';
import { MenuImageGroup } from '../menuImageData';
import FoodCard from './FoodCard';

interface MenuImageLayoutProps {
  groups: MenuImageGroup[];
  optionsLabel?: string;
}

const ROWS = [
  ['pizza', 'plats'],
  ['tacos'],
  ['sandwitch', 'entree', 'burgers'],
];

function GroupBlock({ group, span }: { key?: string; group: MenuImageGroup; span: string }) {
  const itemGridColumns =
    group.id === 'pizza'
      ? 'sm:grid-cols-2 lg:grid-cols-2'
      : group.id === 'tacos'
        ? 'lg:grid-cols-3'
        : 'lg:grid-cols-1';

  return (
    <section id={`category-${group.id}`} className={`scroll-mt-28 ${span}`}>
      <div className="bg-[#FCD306] text-[#4b1007] px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-sm mb-6 border border-[#e6bd02] flex items-center justify-between gap-3">
        <h3 className="font-novecento text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider font-normal leading-none">
          {group.name}
        </h3>
        <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider">
          <Sparkles className="w-4 h-4 hidden sm:inline" />
          <span>{group.tagline}</span>
        </div>
      </div>
      <div className={`grid grid-cols-1 ${itemGridColumns} gap-6 sm:gap-8 items-start`}>
        {group.items.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function MenuImageLayout({ groups }: MenuImageLayoutProps) {
  const visibleGroups = new Map(groups.map((group) => [group.id, group]));

  return (
    <div className="space-y-12 sm:space-y-16">
      {ROWS.map((row, rowIndex) => {
        const rowGroups = row
          .map((id) => visibleGroups.get(id))
          .filter((group): group is MenuImageGroup => Boolean(group));

        if (!rowGroups.length) return null;

        return (
          <div key={rowIndex} className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {rowGroups.map((group) => (
              <GroupBlock
                key={group.id}
                group={group}
                span={
                  group.id === 'tacos'
                    ? 'lg:col-span-3'
                    : group.id === 'pizza'
                      ? 'lg:col-span-2'
                    : 'lg:col-span-1'
                }
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}