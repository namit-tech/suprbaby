import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiOutlineShoppingBag } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import logoBg from '../../assets/Suprbabycream.png';
import { useCart } from '../context/CartContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalItems, openDrawer } = useCart();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-primary transition-all duration-700 ease-in-out ${
        scrolled ? 'shadow-lg py-1' : 'py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="transition-all duration-700 ease-in-out hover:opacity-80"
        >
          <img
            src={logoBg}
            alt="Suprbaby"
            className={`transition-all duration-700 ease-in-out ${
              scrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'
            }`}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-secondary font-semibold text-base transition-all duration-700 ease-in-out relative min-h-[44px] flex items-center ${
                location.pathname === link.to ? 'opacity-100' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {link.label}
              {location.pathname === link.to && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full"
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </Link>
          ))}
          {/* Cart Icon */}
          <button
            onClick={openDrawer}
            className="relative text-secondary p-2 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-700 ease-in-out hover:opacity-80"
            aria-label="Open cart"
          >
            <HiOutlineShoppingBag size={22} />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 bg-secondary text-primary text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md"
              >
                {totalItems}
              </motion.span>
            )}
          </button>

          <Link
            to="/shop"
            className="bg-secondary text-primary font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-700 ease-in-out hover:bg-primary hover:text-secondary border-2 border-secondary min-h-[44px] flex items-center"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Right Actions */}
        <div className="md:hidden flex items-center gap-1">
          {/* Mobile Cart Icon */}
          <button
            onClick={openDrawer}
            className="relative text-secondary p-2 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-700 ease-in-out"
            aria-label="Open cart"
          >
            <HiOutlineShoppingBag size={24} />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 bg-secondary text-primary text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md"
              >
                {totalItems}
              </motion.span>
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-secondary p-2 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-700 ease-in-out"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-primary overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.to}
                    className={`text-secondary font-semibold text-xl block py-2 min-h-[44px] flex items-center transition-all duration-700 ease-in-out ${
                      location.pathname === link.to ? 'opacity-100' : 'opacity-70'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to="/shop"
                  className="bg-secondary text-primary font-bold text-base px-6 py-3 rounded-full inline-block text-center transition-all duration-700 ease-in-out hover:bg-primary hover:text-secondary border-2 border-secondary mt-2 min-h-[44px]"
                >
                  Shop Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
