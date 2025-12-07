import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../shared/Button';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/domains', label: 'Domains' },
  { to: '/about', label: 'About' },
  { to: '/work-with-us', label: 'Work With CoKrator' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition ${scrolled ? 'bg-white/90 shadow-sm backdrop-blur' : 'bg-white/70 backdrop-blur'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-bold text-xl text-primary">
          CoKrator
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-accent ${isActive ? 'text-accent' : 'text-slate-700'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact">Contact</Button>
        </nav>
        <button
          className="md:hidden rounded-md border border-slate-200 p-2"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="h-0.5 w-6 bg-primary mb-1" />
          <div className="h-0.5 w-6 bg-primary mb-1" />
          <div className="h-0.5 w-6 bg-primary" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-slate-200 bg-white px-4"
          >
            <div className="flex flex-col gap-4 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium transition hover:text-accent ${isActive ? 'text-accent' : 'text-slate-700'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to="/contact" className="w-full text-center">
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
