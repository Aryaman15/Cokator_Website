import { useState } from 'react';
import { domains } from '../data/domains';
import { portfolio } from '../data/portfolio';
import SectionHeading from '../components/shared/SectionHeading';
import Card from '../components/shared/Card';

const Domains = () => {
  const [active, setActive] = useState(domains[0]);
  const samples = portfolio.filter((p) => active.sampleIds.includes(p.id)).slice(0, 3);

  return (
    <div className="space-y-10 py-10">
      <SectionHeading title="Domains We Serve" subtitle="K–12, higher education, medical, engineering, business, multilingual" />
      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
          {domains.map((domain) => (
            <button
              key={domain.title}
              onClick={() => setActive(domain)}
              className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold ${
                domain.title === active.title
                  ? 'border-accent bg-accent/10 text-primary dark:border-accent/70 dark:bg-accent/15 dark:text-white'
                  : 'border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200'
              }`}
            >
              {domain.title}
            </button>
          ))}
        </div>
        <Card>
          <h3 className="text-xl font-semibold text-primary dark:text-white">{active.title}</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{active.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
            {active.examples.map((ex) => (
              <li key={ex} className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800/80">{ex}</li>
            ))}
          </ul>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {samples.map((sample) => (
              <div key={sample.id} className="rounded-lg bg-slate-50 p-3 text-xs text-slate-700 dark:bg-slate-800/70 dark:text-slate-200">
                <p className="font-semibold text-primary dark:text-white">{sample.title}</p>
                <p>{sample.client}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Domains;
