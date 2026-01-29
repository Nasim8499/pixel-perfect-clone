import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Works', href: '/projects' },
  { name: 'Contact', href: '/contact-us' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="container">
        <nav className={`flex items-center justify-between px-2 py-2 rounded-full transition-all duration-300 ${
          isScrolled ? 'bg-card/90 backdrop-blur-lg shadow-lg' : 'bg-card shadow-md'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 px-4">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0L17.5 10.5H28L19.25 17L22.75 28L14 21.5L5.25 28L8.75 17L0 10.5H10.5L14 0Z" fill="hsl(221, 83%, 53%)" />
            </svg>
            <span className="text-xl font-bold text-foreground">Arooth</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-secondary/50 rounded-full p-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.href
                    ? 'bg-card text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <AnimatedButton href="/services" variant="primary">
              View All Services
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-3 mr-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
              className="w-6 h-0.5 bg-foreground block"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-foreground block"
            />
            <motion.span
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
              className="w-6 h-0.5 bg-foreground block"
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute left-4 right-4 top-full mt-2 bg-card rounded-2xl shadow-xl p-6 border border-border"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      location.pathname === link.href
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border mt-2">
                  <AnimatedButton href="/services" variant="primary" className="w-full justify-center">
                    View All Services
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
