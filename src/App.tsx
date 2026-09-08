/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import TestimonialQuote from './components/TestimonialQuote';
import MarqueeRibbon from './components/MarqueeRibbon';
import MenuSection from './components/MenuSection';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import StickyOrderButton from './components/StickyOrderButton';
import { getTestimonials } from './data';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const { language } = useLanguage();
  const testimonials = getTestimonials(language);

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#4b1007] overflow-x-hidden selection:bg-[#FCD306] selection:text-[#4b1007]">
      {/* Sticky Header with blur on scroll, transparent at top */}
      <Header />

      <main>
        {/* 1. Hero Section with Storefront Image and Restored Headline */}
        <Hero onExploreMenu={handleScrollToMenu} />

        {/* Restored Yellow Quote Section */}
        <TestimonialQuote />

        {/* Dynamic Delivery Ribbon transition between yellow quote and menu */}
        <MarqueeRibbon topBgColor="bg-[#FCD306]" bottomBgColor="bg-[#f7f5f2]" />

        {/* 2. Menu Section: NOTRE CARTE COMPLÈTE (Pizzas, Burgers, Tacos, Plats, Drinks) */}
        <MenuSection />

        {/* Delivery Ribbon transition before Customer Reviews */}
        <MarqueeRibbon topBgColor="bg-[#f7f5f2]" bottomBgColor="bg-[#FCD306]" />

        {/* 3. Testimonials / Reviews Section */}
        <CustomerReviews reviews={testimonials} />
      </main>

      {/* 4. Footer with in-page section links, address, and hours */}
      <Footer />

      {/* Sticky Floating Order / Call Button (fixed at bottom-right) */}
      <StickyOrderButton />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
