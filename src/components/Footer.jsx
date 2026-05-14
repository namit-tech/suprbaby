import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiPlus, HiMinus } from 'react-icons/hi';
import logoBg from '../../assets/suprbabycream.png';

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Desktop: always show heading + content normally */}
      <h4 className="hidden md:block text-secondary font-bold text-lg mb-4 uppercase tracking-wider">
        {title}
      </h4>
      <div className="hidden md:flex flex-col gap-3">
        {children}
      </div>

      {/* Mobile: collapsible accordion */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-between w-full text-secondary font-bold text-lg uppercase tracking-wider py-2"
        aria-expanded={isOpen}
      >
        {title}
        <span className="text-secondary opacity-70 text-xl transition-transform duration-300">
          {isOpen ? <HiMinus /> : <HiPlus />}
        </span>
      </button>
      <div
        className={`md:hidden flex flex-col gap-1 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary py-16 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <img 
              src={logoBg} 
              alt="Suprbaby" 
              className="h-10 mb-4 transition-all duration-700 ease-in-out hover:opacity-80" 
            />
            <p className="text-secondary opacity-80 text-base leading-relaxed mb-6">
              Slow & smooth. Premium rolling papers crafted for those who love rolling like we do.
            </p>
            <div className="hidden md:flex gap-4">
              {[
                { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/rollingpapers_suprbaby?igsh=ejQyOHNraXUyMTht' },
                { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com/@rollingpapers_suprbaby?si=rC1G74eMFkTPeGnK' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-secondary border-2 border-secondary rounded-xl p-3 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-700 ease-in-out hover:bg-secondary hover:text-primary"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <CollapsibleSection title="Quick Links">
            {[
              { to: '/', label: 'Home' },
              { to: '/shop', label: 'Shop' },
              { to: '/about', label: 'Our Story' },
              { to: '/contact', label: 'Contact' },
              { to: '/faq', label: 'FAQS' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-secondary opacity-70 hover:opacity-100 transition-all duration-700 ease-in-out text-base min-h-[40px] md:min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </CollapsibleSection>

          {/* Policies */}
          <CollapsibleSection title="Policies">
            {[
              { to: '/shipping-policy', label: 'Shipping Policy' },
              { to: '/refund-policy', label: 'Refund Policy' },
              { to: '/privacy-policy', label: 'Privacy Policy' },
              { to: '/terms-of-service', label: 'Terms of Service' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-secondary opacity-70 hover:opacity-100 transition-all duration-700 ease-in-out text-base min-h-[40px] md:min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </CollapsibleSection>

          {/* Contact */}
          <CollapsibleSection title="Contact Us">
            <p className="text-secondary opacity-70 text-base min-h-[40px] md:min-h-[44px] flex items-center">
              Brand: Suprbaby
            </p>
            <p className="text-secondary opacity-70 text-base min-h-[40px] md:min-h-[44px] flex items-center">
              Legal: Aces Rolling Papers
            </p>
            <p className="text-secondary opacity-70 text-base min-h-[40px] md:min-h-[44px] flex items-center leading-relaxed">
              E-111 Phase 1, Ashok Vihar Delhi 110052
            </p>
            <p className="text-secondary opacity-70 text-base min-h-[40px] md:min-h-[44px] flex items-center">
              store@suprbaby.in
            </p>
          </CollapsibleSection>
        </div>

        {/* Mobile Socials - Separate Entity */}
        <div className="md:hidden flex justify-center gap-6 mb-12">
          {[
            { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/rollingpapers_suprbaby?igsh=ejQyOHNraXUyMTht' },
            { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com/@rollingpapers_suprbaby?si=rC1G74eMFkTPeGnK' },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-secondary border-2 border-secondary rounded-xl p-3 min-h-[48px] min-w-[48px] flex items-center justify-center transition-all duration-700 ease-in-out hover:bg-secondary hover:text-primary"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t-2 border-secondary opacity-20 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary opacity-60 text-sm">
            © {new Date().getFullYear()} Aces Rolling Papers (Brand: Suprbaby). All rights reserved.
          </p>
          <p className="text-secondary opacity-60 text-sm">
            www.suprbaby.in
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
