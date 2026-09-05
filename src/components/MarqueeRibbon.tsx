import { useLanguage } from '../context/LanguageContext';

interface MarqueeRibbonProps {
  topBgColor?: string;
  bottomBgColor?: string;
}

export default function MarqueeRibbon({
  topBgColor = 'bg-[#160a08]',
  bottomBgColor = 'bg-[#FCD306]',
}: MarqueeRibbonProps) {
  const { t } = useLanguage();
  const items = Array(8).fill(t.ribbon.delivery);

  return (
    <div className="relative overflow-hidden py-10 z-30 -my-6 pointer-events-none">
      <div className={`absolute inset-x-0 top-0 h-1/2 ${topBgColor} -z-10`} />
      <div className={`absolute inset-x-0 bottom-0 h-1/2 ${bottomBgColor} -z-10`} />
      <div className="tilted-ribbon font-novecento bg-[#b81414] text-white py-3 shadow-xl select-none pointer-events-auto border-y border-red-900 flex items-center">
        <div className="animate-marquee font-novecento whitespace-nowrap tracking-wider text-3xl sm:text-4xl md:text-[2.6rem] leading-none flex items-center">
          {items.map((text, idx) => (
            <span key={idx} className="flex items-center">
              <span className="mx-4 uppercase font-normal">{text}</span>
              <span className="mx-4 sm:mx-5 text-2xl sm:text-3xl md:text-4xl text-white inline-flex items-center">✱</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
