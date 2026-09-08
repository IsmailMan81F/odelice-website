/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TestimonialQuote from './components/TestimonialQuote';
import MarqueeRibbon from './components/MarqueeRibbon';
import MenuSection from './components/MenuSection';
import PromoSection from './components/PromoSection';
import CustomerReviews from './components/CustomerReviews';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import StickyOrderButton from './components/StickyOrderButton';
import { getMenuItems, getTestimonials } from './data';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState<'home' | 'menu' | 'about'>(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/menu' || window.location.hash === '#menu-page') {
        return 'menu';
      }
      if (window.location.pathname === '/about' || window.location.hash === '#about') {
        return 'about';
      }
    }
    return 'home';
  });

  // Listen to browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/menu' || window.location.hash === '#menu-page') {
        setCurrentPage('menu');
      } else if (window.location.pathname === '/about' || window.location.hash === '#about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: 'home' | 'menu' | 'about', sectionId?: string) => {
    if (page === 'menu') {
      window.history.pushState({}, '', '/menu');
      setCurrentPage('menu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      window.history.pushState({}, '', '/about');
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', '/');
      setCurrentPage('home');
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const menuItems = getMenuItems(language);
  const testimonials = getTestimonials(language);

  return (
    <div className="min-h-screen bg-white text-[#4b1007] overflow-x-hidden selection:bg-[#FCD306] selection:text-[#4b1007]">
      {/* Top Absolute Navigation Bar (non-sticky, disappears on scroll) */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'home' && (
        <main>
          {/* Hero Section */}
          <Hero onExploreMenu={() => handleNavigate('menu')} />

          {/* Testimonial Quote Banner */}
          <TestimonialQuote />

          {/* Top Tilted Delivery Ribbon */}
          <MarqueeRibbon topBgColor="bg-[#FCD306]" bottomBgColor="bg-[#f7f5f2]" />

          {/* Indulge in Our Exquisite Favorites (6 Food Cards linked to /menu) */}
          <MenuSection
            items={menuItems}
            onExploreAll={() => handleNavigate('menu')}
          />

          {/* Big Burgers Promo Banner */}
          <PromoSection onMoreAboutUs={() => handleNavigate('about')} />

          {/* Bottom Tilted Delivery Ribbon */}
          <MarqueeRibbon topBgColor="bg-[#160a08]" bottomBgColor="bg-[#FCD306]" />

          {/* Customer Reviews Section (4 Cards) */}
          <CustomerReviews reviews={testimonials} />
        </main>
      )}

      {currentPage === 'menu' && <MenuPage />}

      {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

      {/* Footer with Navigation, Location, Opening Hours, Brand & Copyright */}
      <Footer onNavigate={handleNavigate} />

      {/* Sticky Floating Order / Call Button (always fixed to bottom-right) */}
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
