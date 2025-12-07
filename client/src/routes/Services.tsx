import { useState } from 'react';
import { services } from '../data/services';
import SectionHeading from '../components/shared/SectionHeading';
import Card from '../components/shared/Card';

const Services = () => {
  const [active, setActive] = useState(services[0]);

  return (
    <div className="space-y-10 py-10">
      <SectionHeading title="Services" subtitle="End-to-end publishing for print and digital" />
      <div className="grid gap-6 md:grid-cols-[240px,1fr]">
        <div className="space-y-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActive(service)}
              className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${active.id === service.id ? 'border-accent bg-accent/10 text-primary' : 'border-slate-200 bg-white text-slate-700'}`}
            >
              {service.title}
            </button>
          ))}
        </div>
        <Card>
          <h3 className="text-xl font-semibold text-primary">{active.title}</h3>
          <p className="mt-2 text-sm text-slate-700">{active.details}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {active.bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-500">Using InDesign, LaTeX, EPUB workflows, and QA processes tailored to publisher specifications.</p>
        </Card>
      </div>
    </div>
  );
};

export default Services;
