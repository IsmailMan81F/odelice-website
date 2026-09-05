import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TestimonialQuote() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[#FCD306] py-16 sm:py-20 md:py-24 px-6 relative z-20">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        <h2
          id="testimonial-quote-heading"
          className="font-novecento text-[#4b1007] text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[0.95] uppercase tracking-tight max-w-3xl"
        >
          {t.quote.part1}{' '}
          <span className="inline-block align-middle mx-1 sm:mx-2 select-none">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFx06AM-RyrD0wjIOtvWjtnAPltRtjTVs9AtKl-KqFw1AXU-3TpKMVN_DuueD4WKeSYBz4KhBc03TlH4HQuScK_GPuc5h48kIKlM1fAYrBvgjzDfzMkEdfWJzgqtsv0nO9fUxqnR2nQ71QjWdq8HQ9FsTkrCCgJAIby-NeRCRZAHiwNV9NOamg8c3wHCKAdfuyx4rBJmzvWu9np7qKQ9MY40-dcFPihbV5C814k1tp7Fu62mCSofc"
              alt="Chef icon badge"
              referrerPolicy="no-referrer"
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#4b1007] object-cover inline shadow-md"
            />
          </span>
          {t.quote.part2}
          <br />
          {t.quote.part3}
          <br />
          <span className="inline-block align-middle mx-1 select-none">
            <span className="text-3xl sm:text-5xl">🍔</span>
          </span>
          {t.quote.part4}
        </h2>

        {/* Downward Arrow Button */}
        <a
          id="scroll-to-menu-btn"
          aria-label="Scroll down to menu"
          href="#menu"
          className="mt-8 sm:mt-10 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#b81414] text-white shadow-md hover:bg-[#991212] transition-all transform hover:translate-y-0.5 active:scale-95"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
