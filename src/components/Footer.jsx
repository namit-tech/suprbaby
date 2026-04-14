import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import logoBg from '../../assets/suprbabycream.png';

const Footer = () => {
  return (
    <footer className="bg-primary py-16 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img 
              src={logoBg} 
              alt="Suprbaby" 
              className="h-10 mb-4 transition-all duration-700 ease-in-out hover:opacity-80" 
            />
            <p className="text-secondary opacity-80 text-base leading-relaxed">
              Slow & smooth. Premium rolling papers crafted for those who appreciate the finer things.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-secondary font-bold text-lg mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/shop', label: 'Shop' },
                { to: '/about', label: 'Our Story' },
                { to: '/contact', label: 'Contact' },
                { to: '/instagram', label: 'Instagram Feed' },
                { to: '/faq', label: 'FAQ' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-secondary opacity-70 hover:opacity-100 transition-all duration-700 ease-in-out text-base min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-secondary font-bold text-lg mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4 mb-6">
              {[
                { icon: FaInstagram, label: 'Instagram', href: '#' },
                { icon: FaYoutube, label: 'YouTube', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-secondary border-2 border-secondary rounded-full p-3 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-700 ease-in-out hover:bg-secondary hover:text-primary"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-secondary opacity-70 text-sm">
              store@suprbaby.in
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-secondary opacity-20 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary opacity-60 text-sm">
            © {new Date().getFullYear()} Suprbaby. All rights reserved.
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
