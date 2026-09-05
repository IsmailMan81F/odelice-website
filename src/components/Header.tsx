import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ODelicesLogo from './ODelicesLogo';

interface HeaderProps {
  currentPage?: 'home' | 'menu' | 'about';
  onNavigate?: (page: 'home' | 'menu' | 'about', sectionId?: string) => void;
}

export default function Header({ currentPage = 'home', onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (page: 'home' | 'menu' | 'about', sectionId?: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page, sectionId);
    }
  };

  return (
    <>
      <header
        id="main-header"
        className="absolute top-0 left-0 right-0 w-full z-50 bg-transparent border-none px-4 sm:px-6 md:px-12 lg:px-16 py-5 md:py-6 pointer-events-auto"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-white relative">
          {/* Primary Navigation Links (Desktop only) */}
          <nav
            aria-label="Main Navigation"
            id="desktop-nav"
            className="hidden md:flex items-center space-x-7 lg:space-x-8 text-base lg:text-lg tracking-widest z-10 uppercase"
          >
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0 text-base lg:text-lg ${
                currentPage === 'home' ? 'text-[#FCD306]' : 'text-white hover:text-[#FCD306]'
              }`}
            >
              {t.nav.home}
            </button>
            <button
              id="nav-link-menu"
              onClick={() => handleNavClick('menu')}
              className={`transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0 text-base lg:text-lg ${
                currentPage === 'menu' ? 'text-[#FCD306]' : 'text-white hover:text-[#FCD306]'
              }`}
            >
              {t.nav.menu}
            </button>
            <button
              id="nav-link-about"
              onClick={() => handleNavClick('about')}
              className={`transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0 text-base lg:text-lg ${
                currentPage === 'about' ? 'text-[#FCD306]' : 'text-white hover:text-[#FCD306]'
              }`}
            >
              {t.nav.about}
            </button>
          </nav>

          {/* Logo (Centered on desktop, left on mobile) */}
          <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-left md:text-center pointer-events-auto z-10 flex items-center">
            <button
              id="logo-brand"
              onClick={() => handleNavClick('home')}
              className="flex items-center justify-center text-white hover:text-[#FCD306] transition-colors select-none cursor-pointer bg-transparent border-none p-0 group focus:outline-none"
              aria-label="O'délices Home"
            >
              <ODelicesLogo src="/assets/odelices-logo-name.svg" className="h-8 w-auto transition-transform duration-200 group-hover:scale-105 drop-shadow-md" />
            </button>
          </div>

          {/* Right side controls: Language Switcher + ORDER NOW button on desktop + Hamburger button on mobile */}
          <div className="flex items-center gap-2.5 sm:gap-4 z-10">
            {/* Language Selector with Icon (Desktop & Mobile header) */}
            <LanguageSwitcher variant="header" />

            {/* Desktop ORDER NOW Button with #4b1007 text & yellow background */}
            <a
              id="desktop-order-now-btn"
              href="tel:0674583706"
              className="hidden md:inline-flex items-center gap-2 bg-[#FCD306] hover:bg-[#e6bd02] text-[#4b1007] tracking-widest text-base lg:text-lg px-5 lg:px-6 py-2 sm:py-2.5 rounded-md shadow-md transition-transform duration-150 transform hover:scale-105 active:scale-95 uppercase font-normal"
            >
              <span>{t.nav.orderNow}</span>
              <ArrowRight className="w-4 h-4 text-[#4b1007]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
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
        <nav className="w-full max-w-xs flex flex-col items-center justify-center space-y-6 text-center text-3xl sm:text-4xl tracking-widest text-white">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors uppercase transform hover:scale-110 duration-200 tracking-widest cursor-pointer bg-transparent border-none ${
              currentPage === 'home' ? 'text-[#FCD306]' : 'text-white hover:text-[#FCD306]'
            }`}
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => handleNavClick('menu')}
            className={`transition-colors uppercase transform hover:scale-110 duration-200 tracking-widest cursor-pointer bg-transparent border-none ${
              currentPage === 'menu' ? 'text-[#FCD306]' : 'text-white hover:text-[#FCD306]'
            }`}
          >
            {t.nav.menu}
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors uppercase transform hover:scale-110 duration-200 tracking-widest cursor-pointer bg-transparent border-none ${
              currentPage === 'about' ? 'text-[#FCD306]' : 'text-white hover:text-[#FCD306]'
            }`}
          >
            {t.nav.about}
          </button>

          {/* Language selector in drawer */}
          <div className="w-full pt-2">
            <LanguageSwitcher variant="drawer" />
          </div>

          <a
            href="tel:0674583706"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#FCD306] hover:bg-[#e6bd02] text-[#4b1007] tracking-widest text-xl py-3 rounded-md shadow-lg uppercase font-normal mt-2 transform hover:scale-105 duration-200"
          >
            <span>{t.nav.orderNow}</span>
            <ArrowRight className="w-4 h-4 text-[#4b1007]" />
          </a>
        </nav>
      </div>
    </>
  );
}
