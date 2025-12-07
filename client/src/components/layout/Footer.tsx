import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/90">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary/90 to-accent text-white shadow-sm">
                <span className="text-sm font-semibold">CK</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">CoKrator Content Solutions</h3>
                <p className="text-sm text-slate-500">Pvt. Ltd.</p>
              </div>
            </div>
            <p className="max-w-xl text-sm text-slate-700">
              We design, develop, and deliver complex publishing and digital learning products across disciplines with precision,
              accessibility, and a partnership mindset.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-700">
              <span>India: +91-9999343638</span>
              <span className="hidden h-4 w-px bg-slate-300 sm:block" aria-hidden />
              <span>US & Canada: +1-647-799-4812</span>
              <span className="hidden h-4 w-px bg-slate-300 sm:block" aria-hidden />
              <span>info@cokrator.com</span>
            </div>
            <Button to="/contact" className="!px-5 !py-2">Start a Conversation</Button>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm text-slate-700 sm:grid-cols-3 md:justify-items-center lg:justify-items-start">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-primary">Navigate</h4>
              <div className="flex flex-col gap-1">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/domains">Domains</Link>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-primary">Company</h4>
              <div className="flex flex-col gap-1">
                <Link to="/about">About</Link>
                <Link to="/work-with-us">Work With CoKrator</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-primary">Capabilities</h4>
              <div className="flex flex-col gap-1">
                <span>STEM, Medicine, Business</span>
                <span>K–12 & Higher-Ed</span>
                <span>Accessibility & QA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {year} CoKrator Content Solutions Pvt. Ltd. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
