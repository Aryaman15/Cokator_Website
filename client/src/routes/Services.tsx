import { useMemo, useState } from 'react';
import { services } from '../data/services';
import { portfolio } from '../data/portfolio';
import SectionHeading from '../components/shared/SectionHeading';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import PdfModal from '../components/shared/PdfModal';
import { PortfolioItem } from '../types';

const Services = () => {
  const [active, setActive] = useState(services[0]);
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const serviceSamples = useMemo(
    () => ({
      composition: 'complete-portfolio',
      illustrations: 'art-samples',
      ebook: 'brochure',
      editorial: 'language-samples',
      pm: 'complete-portfolio',
      'web-seo': 'brochure',
    }),
    []
  );

  const sample = portfolio.find((p) => p.id === serviceSamples[active.id as keyof typeof serviceSamples]);

  return (
    <div className="space-y-12 py-10">
      <SectionHeading title="Services" subtitle="End-to-end publishing for print and digital" />

      <div className="grid gap-6 md:grid-cols-[280px,1fr]">
        <div className="space-y-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActive(service)}
              className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${
                active.id === service.id
                  ? 'border-accent bg-accent/10 text-primary shadow-md dark:border-accent/70 dark:bg-accent/15 dark:text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-accent/60 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200'
              }`}
            >
              {service.title}
              <p className="text-xs font-normal text-slate-500 dark:text-slate-400">{service.shortDescription}</p>
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-[1.1fr,1fr]">
          <Card>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-primary dark:text-white">{active.title}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{active.details}</p>
              </div>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                {active.icon.replace('-', ' ')}
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {active.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              Using InDesign, LaTeX, EPUB workflows, and QA processes tailored to publisher specifications.
            </p>
          </Card>

          {sample && (
            <Card className="relative overflow-hidden">
              <div className="overflow-hidden rounded-xl">
                <img src={sample.thumbnail} alt={sample.title} className="h-44 w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-3 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">Recent Sample</p>
                <h4 className="text-lg font-semibold text-primary dark:text-white">{sample.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{sample.services.join(' · ')}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-slate-500 dark:text-slate-400">Open PDF preview to see delivery quality.</p>
                <Button className="px-4 py-2 text-sm" onClick={() => setSelected(sample)}>
                  View PDF
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>

      <PdfModal item={selected} open={!!selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Services;
