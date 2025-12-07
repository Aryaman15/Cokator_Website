import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:justify-between">
        <div className="max-w-md space-y-3">
          <h3 className="text-xl font-semibold text-primary">CoKrator Content Solutions</h3>
          <p className="text-sm text-slate-600">
            Reliable partner for book publishing, digital content production, editorial services, and art development for
            global publishers and learning companies.
          </p>
          <p className="text-sm text-slate-700">Email: info@cokrator.com</p>
          <p className="text-sm text-slate-700">India: +91-9999343638</p>
          <p className="text-sm text-slate-700">US & Canada: +1-647-799-4812</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm text-slate-700 sm:grid-cols-3">
          <div className="space-y-2">
            <h4 className="font-semibold text-primary">Navigate</h4>
            <div className="flex flex-col gap-1">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/domains">Domains</Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-primary">Company</h4>
            <div className="flex flex-col gap-1">
              <Link to="/about">About</Link>
              <Link to="/work-with-us">Work With CoKrator</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-primary">Regions</h4>
            <p>India Operations</p>
            <p>US & Canada Client Liaison</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} CoKrator Content Solutions Pvt. Ltd.</div>
    </footer>
  );
};

export default Footer;
