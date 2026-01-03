import { useMemo, useState } from 'react';
import { portfolio } from '../data/portfolio';
import Button from '../components/shared/Button';
import PdfModal from '../components/shared/PdfModal';
import { PortfolioItem } from '../types';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const filters = useMemo(
    () => ['All', ...Array.from(new Set(portfolio.map((item) => item.domain)))],
    []
  );

  const filtered = activeFilter === 'All' ? portfolio : portfolio.filter((item) => item.domain === activeFilter);

  return (
    <section className="py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Portfolio
          </span>
          <h1 className="text-3xl font-bold text-primary dark:text-white md:text-4xl">Curated PDFs You Can Preview Instantly</h1>
          <p className="text-base text-slate-600 dark:text-slate-200 md:text-lg">
            Explore the exact samples we can share today—from art spreads and multilingual programs to STEM-heavy layouts.
            Tap any tile to open the interactive PDF viewer.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === activeFilter
                  ? 'border-accent bg-accent text-white shadow-lg shadow-accent/30'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-accent/60 hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <article
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(item)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelected(item)}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition hover:-translate-y-1 hover:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-200">
                <span className="rounded-full bg-accent/15 px-3 py-1 font-semibold text-accent">{item.domain}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-100">{item.client}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-tight text-primary dark:text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-200">{item.services.join(' · ')}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-slate-500 dark:text-slate-300">Tap to preview the PDF</p>
                <Button onClick={(e) => { e.stopPropagation(); setSelected(item); }} className="px-5 py-2 text-sm" variant="primary">
                  View PDF
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
          Only the listed PDFs are displayed here. Need something specific? Tell us your requirement and we’ll pull the matching samples for you.
        </div>
      </div>

      <PdfModal item={selected} open={!!selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Portfolio;
