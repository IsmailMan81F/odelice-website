import { MapPin, ExternalLink } from 'lucide-react';
import { getOpeningHours } from '../data';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ODelicesLogo from './ODelicesLogo';

interface FooterProps {
  onNavigate?: (page: 'home' | 'menu' | 'about', sectionId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { language, t } = useLanguage();
  const openingHours = getOpeningHours(language);

  const handleNav = (page: 'home' | 'menu' | 'about', sectionId?: string) => {
    if (onNavigate) {
      onNavigate(page, sectionId);
    }
  };

  return (
    <footer
      id="contact"
      className="bg-[#4b1007] text-white pt-20 pb-10 px-6 sm:px-12 md:px-16 border-t border-[#350b05]"
    >
      <div className="max-w-7xl mx-auto">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Col 1: Brand & Social (span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center text-white hover:text-[#FCD306] transition-colors mb-4 cursor-pointer bg-transparent border-none p-0 text-left group"
              aria-label="O'délices Home"
            >
              <ODelicesLogo className="h-24 w-auto drop-shadow-md group-hover:scale-105 transition-transform" />
            </button>
            <p className="text-white text-sm sm:text-base leading-relaxed mb-6 max-w-sm tracking-wider font-normal">
              {t.footer.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 mb-6">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:text-[#FCD306] hover:border-[#FCD306] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 320 512" aria-hidden="true">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:text-[#FCD306] hover:border-[#FCD306] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" aria-hidden="true">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:text-[#FCD306] hover:border-[#FCD306] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512" aria-hidden="true">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                </svg>
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:text-[#FCD306] hover:border-[#FCD306] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 512 512" aria-hidden="true">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                </svg>
              </a>
            </div>

            {/* Language Switcher in footer */}
            <LanguageSwitcher variant="footer" />
          </div>

          {/* Col 2: NAVIGATION Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xl tracking-widest text-white uppercase mb-4 font-normal">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-white tracking-widest uppercase">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-white hover:text-[#FCD306] transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('menu')}
                  className="text-white hover:text-[#FCD306] transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0"
                >
                  {t.nav.menu}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-white hover:text-[#FCD306] transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0"
                >
                  {t.nav.about}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: LOCATION */}
          <div className="lg:col-span-3">
            <h4 className="text-xl tracking-widest text-white uppercase mb-4 font-normal">
              {t.footer.location}
            </h4>
            <div className="flex items-start gap-2.5 text-white text-sm sm:text-base tracking-wider mb-4">
              <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
              <span className="uppercase text-white">RQ99+GP6, JIJEL</span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=RQ99%2BGP6%2C+JIJEL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#FCD306] hover:text-white transition-colors tracking-widest text-sm sm:text-base uppercase"
            >
              <span>{t.footer.viewInGoogleMaps}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Col 4: OPENING HOURS */}
          <div className="lg:col-span-3">
            <h4 className="text-xl tracking-widest text-white uppercase mb-4 font-normal">
              {t.footer.openingHours}
            </h4>
            <div className="text-sm sm:text-base text-white divide-y-2 divide-white/70 tracking-wider">
              {openingHours.map((oh) => (
                <div key={oh.day} className="flex justify-between py-2.5">
                  <span className="text-white tracking-widest uppercase">
                    {oh.day}
                  </span>
                  <span className="tracking-widest text-white">
                    {oh.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-center text-center">
          <p className="text-sm text-white/80 tracking-widest uppercase">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
