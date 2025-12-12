import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/', title: 'SEKIGANDA GEORGE BRUNO - Home' },
  { name: 'About', path: '/about-bruno', title: 'About Bruno - Website Developer Uganda' },
  { name: 'Projects', path: '/projects-portfolio', title: 'Projects Portfolio - Web Development Work' },
  { name: 'Services', path: '/services-web-app-developer', title: 'Web Development Services - App Builder' },
  { name: 'Contact', path: '/contact', title: 'Contact Bruno - Hire Website Developer' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="container-custom flex items-center justify-between h-20 px-4 md:px-8" aria-label="Main navigation">
        <Link 
          to="/" 
          className="flex items-center gap-2"
          title="SEKIGANDA GEORGE BRUNO - Website Developer"
          aria-label="Bruno - Website Developer Home"
        >
          <span className="font-display font-bold text-xl md:text-2xl">
            <span className="gradient-text">Bruno</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8" role="menubar">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              title={link.title}
              className={cn(
                'nav-link text-sm font-medium',
                location.pathname === link.path && 'text-foreground active'
              )}
              role="menuitem"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild variant="default" size="default">
            <Link to="/contact" title="Hire SEKIGANDA GEORGE BRUNO - Website Developer">Hire Me</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
            role="menu"
          >
            <div className="container-custom py-6 px-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  title={link.title}
                  className={cn(
                    'text-lg font-medium py-2 transition-colors',
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                  role="menuitem"
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild variant="default" className="mt-2">
                <Link to="/contact" title="Hire SEKIGANDA GEORGE BRUNO">Hire Me</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
