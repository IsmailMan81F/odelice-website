import { ExternalLink, MapPin } from 'lucide-react';
import { getOpeningHours } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
}

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
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" aria-hidden="true">
                  <path d="M380.9 97.1C339-3.9 212.1-32.2 124.7 23.5 37.4 79.2 14.4 194.8 68.5 286.5L39.2 393.4l109.3-28.7c89.3 48.7 201.1 15.5 246.5-73.9 28.4-55.8 22.6-122.2-14.1-193.7zM224.1 371.7c-35.6 0-70.5-9.5-101-27.5l-7.2-4.3-64.8 17 17.3-63.1-4.7-7.4c-19.2-30.5-29.3-65.7-29.3-101.9 0-106.5 86.7-193.2 193.2-193.2s193.2 86.7 193.2 193.2-86.7 193.2-193.2 193.2zm105.7-144.8c-5.8-2.9-34.1-16.8-39.4-18.7-5.3-1.9-9.1-2.9-12.9 2.9-3.8 5.8-14.8 18.7-18.1 22.5-3.3 3.8-6.7 4.3-12.4 1.4-5.8-2.9-24.4-9-46.5-28.7-17.2-15.3-28.8-34.2-32.2-40-3.3-5.8-.4-8.9 2.5-11.8 2.6-2.6 5.8-6.7 8.6-10 2.9-3.3 3.8-5.8 5.8-9.6 1.9-3.8 1-7.2-.5-10.1-1.4-2.9-12.9-31.1-17.7-42.6-4.7-11.2-9.5-9.7-12.9-9.9-3.3-.2-7.2-.2-11-.2s-10.1 1.4-15.3 7.2c-5.3 5.8-20.1 19.6-20.1 47.8s20.6 55.5 23.5 59.3c2.9 3.8 40.5 61.8 98.1 86.7 13.7 5.9 24.4 9.4 32.7 12 13.7 4.4 26.2 3.8 36.1 2.3 11-1.6 34.1-13.9 38.9-27.3 4.8-13.4 4.8-24.9 3.3-27.3-1.4-2.4-5.2-3.8-11-6.7z"/>
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
          </div>

          {/* Col 2: NAVIGATION Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xl tracking-widest text-white uppercase mb-4 font-normal">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-white tracking-widest uppercase">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-white hover:text-[#FCD306] transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-white hover:text-[#FCD306] transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0"
                >
                  {t.nav.menu}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('avis')}
                  className="text-white hover:text-[#FCD306] transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0"
                >
                  {t.nav.reviews}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-[#FCD306] transition-colors tracking-widest cursor-pointer bg-transparent border-none p-0"
                >
                  {t.nav.contact}
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
              <span className="uppercase text-white">LOCATION DETAILS</span>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-[#FCD306] hover:text-white transition-colors tracking-widest text-sm sm:text-base uppercase"
            >
              <span>{t.footer.viewInGoogleMaps}</span>
              <ExternalLink className="w-4 h-4" />
            </button>
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
