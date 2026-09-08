import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'hero' | 'menu' | 'avis' | 'contact'>('hero');

  // Sticky header with blur on scroll, completely transparent at top
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 30);

      // Section tracking
      const menuEl = document.getElementById('menu');
      const avisEl = document.getElementById('avis');
      const contactEl = document.getElementById('contact');

      if (contactEl && scrollPos >= contactEl.offsetTop - 300) {
        setActiveSection('contact');
      } else if (avisEl && scrollPos >= avisEl.offsetTop - 300) {
        setActiveSection('avis');
      } else if (menuEl && scrollPos >= menuEl.offsetTop - 300) {
        setActiveSection('menu');
      } else {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (sectionId === 'hero' || sectionId === 'hero-section') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 pointer-events-auto px-4 sm:px-6 md:px-12 lg:px-16 ${
          isScrolled
            ? 'bg-black/75 backdrop-blur-md border-b border-white/10 shadow-xl py-3 sm:py-3.5'
            : 'bg-transparent border-none py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-white relative">
          {/* Primary Navigation Links (Desktop only) */}
          <nav
            aria-label="Main Navigation"
            id="desktop-nav"
            className="hidden md:flex items-center space-x-7 lg:space-x-8 text-base lg:text-lg tracking-widest z-10 uppercase font-normal"
          >
            <button
              id="nav-link-home"
              onClick={() => scrollToSection('hero')}
              className={`transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0 text-base lg:text-lg ${
                activeSection === 'hero' ? 'text-[#FCD306]' : 'text-white hover:text-[#FCD306]'
              }`}
            >
              {t.nav.home}
            </button>
            <button
              id="nav-link-menu"
              onClick={() => scrollToSection('menu')}
              className={`transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0 text-base lg:text-lg ${
                activeSection === 'menu' ? 'text-[#FCD306]' : 'text-white hover:text-[#FCD306]'
              }`}
            >
              {t.nav.menu}
            </button>
            <button
              id="nav-link-reviews"
              onClick={() => scrollToSection('avis')}
              className={`transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0 text-base lg:text-lg ${
                activeSection === 'avis' ? 'text-[#FCD306]' : 'text-white hover:text-[#FCD306]'
              }`}
            >
              {t.nav.reviews}
            </button>
            <button
              id="nav-link-contact"
              onClick={() => scrollToSection('contact')}
              className={`transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0 text-base lg:text-lg ${
                activeSection === 'contact' ? 'text-[#FCD306]' : 'text-white hover:text-[#FCD306]'
              }`}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Brand Logo (Centered on desktop, left on mobile) */}
          <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-left md:text-center pointer-events-auto z-10 flex items-center">
            <button
              id="logo-brand"
              onClick={() => scrollToSection('hero')}
              className="flex items-center justify-center text-white hover:opacity-90 transition-opacity select-none cursor-pointer bg-transparent border-none p-0 group focus:outline-none"
              aria-label="O'délices Accueil"
            >
              <img
                src="/assets/odelice-logo-name.svg"
                alt="O'délices"
                className={`transition-all duration-300 w-auto brightness-0 invert object-contain ${
                  isScrolled ? 'h-6 sm:h-7 md:h-8' : 'h-7 sm:h-8 md:h-9'
                }`}
              />
            </button>
          </div>

          {/* Right side spacer for desktop to maintain center balance, and Mobile Hamburger Button */}
          <div className="flex items-center z-10">
            <div className="hidden md:block w-32" aria-hidden="true" />

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-[#FCD306] focus:outline-none transition-colors cursor-pointer"
            >
              <div className="relative w-6 h-5 flex items-center justify-center">
                <span
                  className={`absolute left-0 top-1/2 -mt-[1px] w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                    mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 -mt-[1px] w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                    mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 w-full h-screen z-40 bg-[#120505]/95 backdrop-blur-xl flex flex-col justify-center items-center px-6 transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <nav className="w-full max-w-xs flex flex-col items-center justify-center space-y-7 text-center text-2xl sm:text-3xl tracking-widest text-white">
          <button
            onClick={() => scrollToSection('hero')}
            className={`transition-colors uppercase transform hover:scale-110 duration-200 tracking-widest cursor-pointer bg-transparent border-none ${
              activeSection === 'hero' ? 'text-[#FCD306]' : 'text-white hover:text-[#FCD306]'
            }`}
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className={`transition-colors uppercase transform hover:scale-110 duration-200 tracking-widest cursor-pointer bg-transparent border-none ${
              activeSection === 'menu' ? 'text-[#FCD306]' : 'text-white hover:text-[#FCD306]'
            }`}
          >
            {t.nav.menu}
          </button>
          <button
            onClick={() => scrollToSection('avis')}
            className={`transition-colors uppercase transform hover:scale-110 duration-200 tracking-widest cursor-pointer bg-transparent border-none ${
              activeSection === 'avis' ? 'text-[#FCD306]' : 'text-white hover:text-[#FCD306]'
            }`}
          >
            {t.nav.reviews}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`transition-colors uppercase transform hover:scale-110 duration-200 tracking-widest cursor-pointer bg-transparent border-none ${
              activeSection === 'contact' ? 'text-[#FCD306]' : 'text-white hover:text-[#FCD306]'
            }`}
          >
            {t.nav.contact}
          </button>
        </nav>
      </div>
    </>
  );
}
