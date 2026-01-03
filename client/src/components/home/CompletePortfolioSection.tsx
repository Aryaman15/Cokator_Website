import { useState } from 'react';
import Button from '../shared/Button';
import PdfModal from '../shared/PdfModal';
import { PortfolioItem } from '../../types';

const portfolioItem: PortfolioItem = {
  id: 'complete-portfolio',
  title: 'Complete Portfolio',
  client: 'CoKrator',
  domain: 'Digital Services',
  services: ['Composition', 'Editorial', 'Design', 'Accessibility', 'Production'],
  thumbnail: '/assets/pdfThumbnail/Complete_Portfolio_page-0001.jpg',
  pages: [],
  pdfUrl: '/assets/pdf/Complete_Portfolio.pdf',
};

const CompletePortfolioSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <section className="py-12">
      <div className="grid gap-8 rounded-2xl bg-slate-50 p-6 shadow-card dark:bg-slate-900/60 md:grid-cols-2 md:items-center md:p-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Complete Portfolio</p>
          <h3 className="text-2xl font-bold text-primary dark:text-white md:text-3xl">Explore Our End-to-End Capabilities</h3>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Discover our comprehensive digital services portfolio that showcases the full spectrum of solutions we deliver
            for publishing and eLearning partners. From composition and editorial to art, accessibility, and production,
            this portfolio highlights the quality and consistency our clients trust.
          </p>
          <Button onClick={handleOpen} className="w-fit">View Portfolio PDF</Button>
        </div>
        <button
          type="button"
          onClick={handleOpen}
          className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-card transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent dark:border-slate-700 dark:bg-slate-800"
        >
          <img
            src={portfolioItem.thumbnail}
            alt="Complete portfolio cover"
            className="w-full object-cover"
            loading="lazy"
          />
          <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white">
            <span>Complete Portfolio</span>
            <span className="text-accent underline">Open</span>
          </div>
        </button>
      </div>
      <PdfModal item={portfolioItem} open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default CompletePortfolioSection;
