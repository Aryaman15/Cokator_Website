import { useState } from 'react';
import { domains } from '../data/domains';
import { portfolio } from '../data/portfolio';
import SectionHeading from '../components/shared/SectionHeading';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import PdfModal from '../components/shared/PdfModal';
import { PortfolioItem } from '../types';

const Domains = () => {
  const [active, setActive] = useState(domains[0]);
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const samples = portfolio.filter((p) => active.sampleIds.includes(p.id));
  const primarySample = samples[0];

  return (
    <div className="space-y-10 py-10">
      <SectionHeading title="Domains We Serve" subtitle="K–12, higher education, medical, engineering, business, multilingual" />

      <div className="grid gap-6 lg:grid-cols-[280px,1fr]">
        <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
          {domains.map((domain) => (
            <button
              key={domain.title}
              onClick={() => setActive(domain)}
              className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${
                domain.title === active.title
                  ? 'border-accent bg-accent/10 text-primary shadow-sm dark:border-accent/70 dark:bg-accent/15 dark:text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-accent/60 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200'
              }`}
            >
              {domain.title}
              <p className="text-xs font-normal text-slate-500 dark:text-slate-400">{domain.description.slice(0, 60)}...</p>
            </button>
          ))}
        </div>

        <Card className="space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Featured Domain</p>
              <h3 className="text-xl font-semibold text-primary dark:text-white">{active.title}</h3>
            </div>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-200">{active.description}</p>
          <div className="grid gap-3 md:grid-cols-[1fr,1.2fr]">
            <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/60">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">What we deliver</p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                {active.examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>

            {primarySample && (
              <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <img
                  src={primarySample.thumbnail}
                  alt={primarySample.title}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="space-y-1 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">Sample PDF</p>
                  <h4 className="text-lg font-semibold text-primary dark:text-white">{primarySample.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{primarySample.services.join(' · ')}</p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3 text-sm dark:border-slate-700">
                  <span className="text-xs text-slate-500 dark:text-slate-300">Open modal preview</span>
                  <Button onClick={() => setSelected(primarySample)} className="px-4 py-2 text-sm">
                    View PDF
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {samples.slice(0, 3).map((sample) => (
              <button
                key={sample.id}
                onClick={() => setSelected(sample)}
                className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-left text-xs text-slate-700 transition hover:border-accent hover:shadow-md dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
              >
                <p className="font-semibold text-primary dark:text-white">{sample.title}</p>
                <p>{sample.client}</p>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Tap to open PDF</p>
              </button>
            ))}
          </div>
        </Card>
      </div>

      <PdfModal item={selected} open={!!selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Domains;
