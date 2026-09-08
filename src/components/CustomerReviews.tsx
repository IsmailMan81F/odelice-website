import { Star } from 'lucide-react';
import { Testimonial } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CustomerReviewsProps {
  reviews: Testimonial[];
}

export default function CustomerReviews({ reviews }: CustomerReviewsProps) {
  const { t } = useLanguage();

  return (
    <section id="avis" className="bg-[#FCD306] pt-16 pb-24 px-4 sm:px-6 md:px-10 relative z-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="reviews-heading"
            className="font-novecento text-[#4b1007] text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.92]"
          >
            {t.reviews.title1}
            <br className="hidden sm:inline" /> {t.reviews.title2}
          </h2>
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={`${rev.id}-${idx}`}
              id={`review-card-${idx}`}
              className="bg-white rounded-xl p-6 flex flex-col justify-between shadow-sm text-center transition-transform hover:-translate-y-1 duration-200 border border-stone-100"
            >
              <div>
                {/* 5 Stars */}
                <div
                  aria-label={`${rev.rating} stars`}
                  className="flex justify-center text-[#b81414] text-xs space-x-1 mb-3"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-[#b81414] text-[#b81414]"
                    />
                  ))}
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl text-[#4b1007] font-normal uppercase tracking-wider mb-3">
                  {rev.title}
                </h3>

                {/* Review Text - Using font-inter */}
                <p className="font-inter text-stone-600 text-sm leading-relaxed tracking-normal font-normal">
                  {rev.quote}
                </p>
              </div>

              {/* Author Info - Verified Bebas Neue */}
              <div className="mt-6 flex flex-col items-center">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover mb-2 border border-stone-200 shadow-sm"
                />
                <span className="text-[#4b1007] text-base sm:text-lg tracking-widest uppercase">
                  {rev.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
