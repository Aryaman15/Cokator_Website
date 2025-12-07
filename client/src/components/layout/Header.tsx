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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-white/80 backdrop-blur'
      }`}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-2 font-bold text-lg text-primary">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary/90 to-accent text-white shadow-sm">
            <span className="text-sm">CK</span>
          </div>
          <div className="leading-tight">
            <span className="block">CoKrator</span>
            <span className="text-xs font-medium text-slate-500 group-hover:text-accent">Content Solutions</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition hover:text-accent ${isActive ? 'text-accent' : 'text-slate-700'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact" className="ml-2">Partner With Us</Button>
        </nav>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-primary md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-slate-200 bg-white px-4 sm:px-6 lg:px-10"
          >
            <div className="flex flex-col gap-4 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-semibold transition hover:text-accent ${isActive ? 'text-accent' : 'text-slate-700'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to="/contact" className="w-full text-center" onClick={() => setOpen(false)}>
                Partner With Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
