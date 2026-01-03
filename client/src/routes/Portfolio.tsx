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
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 text-white shadow-2xl">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4">
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur">
            Portfolio
          </span>
          <h1 className="text-3xl font-bold md:text-4xl">Curated PDFs You Can Preview Instantly</h1>
          <p className="text-base text-slate-200 md:text-lg">
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
                  : 'border-white/15 bg-white/5 text-slate-100 hover:border-accent/60 hover:text-white'
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
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <div className="overflow-hidden rounded-xl bg-slate-900/60">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-200">
                <span className="rounded-full bg-accent/20 px-3 py-1 font-semibold text-accent">{item.domain}</span>
                <span className="rounded-full bg-white/10 px-3 py-1">{item.client}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-tight text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-200">{item.services.join(' · ')}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-slate-300">Tap to preview the PDF</p>
                <Button onClick={(e) => { e.stopPropagation(); setSelected(item); }} className="px-5 py-2 text-sm" variant="primary">
                  View PDF
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm text-slate-200 backdrop-blur">
          Only the listed PDFs are displayed here. Need something specific? Tell us your requirement and we’ll pull the matching samples for you.
        </div>
      </div>

      <PdfModal item={selected} open={!!selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Portfolio;
