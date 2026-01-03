import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../shared/Button';
import { useTheme } from './ThemeProvider';

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
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/85'
          : 'border-b border-transparent bg-white/70 backdrop-blur dark:bg-slate-900/75'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-bold text-xl text-primary dark:text-white">
          CoKrator
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-accent ${
                  isActive ? 'text-accent' : 'text-slate-700 dark:text-slate-200'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            aria-label="Toggle color mode"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/70 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:border-accent/70 dark:hover:text-accent dark:focus:ring-offset-slate-900"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="4.5" />
                <path strokeLinecap="round" d="M12 2v2.5M12 19.5V22M4.22 4.22l1.77 1.77M18.01 17.99l1.77 1.77M2 12h2.5M19.5 12H22M6 18l1.76-1.76M16.24 7.76 18 6" />
              </svg>
            )}
          </button>
          <Button to="/contact">Contact</Button>
        </nav>
        <button
          className="rounded-md border border-slate-200 p-2 text-primary md:hidden dark:border-slate-700 dark:text-slate-100"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="mb-1 h-0.5 w-6 bg-current" />
          <div className="mb-1 h-0.5 w-6 bg-current" />
          <div className="h-0.5 w-6 bg-current" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-slate-200 bg-white px-4 shadow-sm md:hidden dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex flex-col gap-4 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium transition hover:text-accent ${
                      isActive ? 'text-accent' : 'text-slate-700 dark:text-slate-200'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  toggleTheme();
                }}
                className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-accent/60 hover:text-accent dark:border-slate-700/80 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-accent/70 dark:hover:text-accent"
              >
                <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                {theme === 'dark' ? (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path
                      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="4.5" />
                    <path strokeLinecap="round" d="M12 2v2.5M12 19.5V22M4.22 4.22l1.77 1.77M18.01 17.99l1.77 1.77M2 12h2.5M19.5 12H22M6 18l1.76-1.76M16.24 7.76 18 6" />
                  </svg>
                )}
              </button>
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
