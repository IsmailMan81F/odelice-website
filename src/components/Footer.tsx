import { ExternalLink, MapPin } from 'lucide-react';
import { getOpeningHours } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
}

const capitalizeText = (value: string) =>
  value
    .toLocaleLowerCase('fr-FR')
    .split(' ')
    .map((word) => (word ? `${word[0].toLocaleUpperCase('fr-FR')}${word.slice(1)}` : word))
    .join(' ');

export default function Footer({ onNavigate }: FooterProps) {
  const { language, t } = useLanguage();
  const openingHours = getOpeningHours(language);

  const scrollToSection = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
      return;
    }
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
              onClick={() => scrollToSection('hero')}
              className="flex items-center text-white hover:opacity-90 transition-opacity mb-4 cursor-pointer bg-transparent border-none p-0 text-left group"
              aria-label="O'délices Accueil"
            >
              <img
                src="/assets/odelice-logo.svg"
                alt="O'délices"
                className="h-20 sm:h-24 w-auto brightness-0 invert object-contain"
              />
            </button>
            <p className="text-white text-sm sm:text-base leading-relaxed mb-6 max-w-sm tracking-wider font-normal">
              {t.footer.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 mb-6">
              <a
                href="https://www.facebook.com/p/Od%C3%A9lices-jijel-100041639028863/"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:text-[#FCD306] hover:border-[#FCD306] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 320 512" aria-hidden="true">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/odelices_18?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:text-[#FCD306] hover:border-[#FCD306] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" aria-hidden="true">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/213674583706"
                aria-label="WhatsApp : 0674 58 37 06"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:text-[#FCD306] hover:border-[#FCD306] transition-colors"
              >
                  <i className="fa-brands fa-whatsapp text-lg" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Col 2: NAVIGATION Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xl tracking-widest text-white uppercase mb-4 font-normal">
              {t.footer.navigation}
            </h4>
            <ul className="font-inter space-y-3 text-xs sm:text-sm text-white tracking-widest">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-white hover:text-[#FCD306] transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0"
                >
                  {capitalizeText(t.nav.home)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-white hover:text-[#FCD306] transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0"
                >
                  {capitalizeText(t.nav.menu)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('avis')}
                  className="text-white hover:text-[#FCD306] transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0"
                >
                  {capitalizeText(t.nav.reviews)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-[#FCD306] transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0"
                >
                  {capitalizeText(t.nav.contact)}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: LOCATION */}
          <div className="lg:col-span-3">
            <h4 className="text-xl tracking-widest text-white uppercase mb-4 font-normal">
              {t.footer.location}
            </h4>
            <div className="font-inter flex items-start gap-2.5 text-white text-xs sm:text-sm tracking-wider mb-4">
              <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
              <span className="text-white">{capitalizeText('Rue Larbi Ben Lamhidi (Faubourg) en face la protection civile 🚒')}</span>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-[#FCD306] hover:text-white transition-colors tracking-widest text-xs sm:text-sm"
            >
              <span>{capitalizeText(t.footer.viewInGoogleMaps)}</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Col 4: OPENING HOURS */}
          <div className="lg:col-span-3">
            <h4 className="text-xl tracking-widest text-white uppercase mb-4 font-normal">
              {t.footer.openingHours}
            </h4>
            <div className="font-inter text-xs sm:text-sm text-white divide-y-2 divide-white/70 tracking-wider">
              {openingHours.map((oh) => (
                <div key={oh.day} className="flex justify-between py-2.5">
                  <span className="text-white tracking-widest">
                    {capitalizeText(oh.day)}
                  </span>
                  <span className="tracking-widest text-white">
                    {capitalizeText(oh.hours)}
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
