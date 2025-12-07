import { useState } from 'react';
import { portfolio } from '../data/portfolio';
import SectionHeading from '../components/shared/SectionHeading';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import PdfModal from '../components/shared/PdfModal';
import { PortfolioItem } from '../types';

const filters = ['All', 'K–12 / School', 'Higher Education', 'Medical & Nursing', 'Engineering & Technical', 'Business & Management', 'Multilingual & International'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const filtered = activeFilter === 'All' ? portfolio : portfolio.filter((item) => item.domain === activeFilter);

  return (
    <div className="space-y-8 py-10">
      <SectionHeading title="Portfolio" subtitle="Breadth across K–12, higher-ed, medical, and multilingual projects" />
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm ${filter === activeFilter ? 'border-accent bg-accent text-white' : 'border-slate-200 bg-white text-slate-700'}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {filtered.map((item) => (
          <Card key={item.id} className="p-0">
            <img src={item.thumbnail} alt={item.title} className="h-40 w-full rounded-t-2xl object-cover" />
            <div className="space-y-2 p-4">
              <h4 className="text-lg font-semibold text-primary">{item.title}</h4>
              <p className="text-xs text-slate-600">{item.domain} · {item.client}</p>
              <p className="text-xs text-slate-600">{item.services.join(', ')}</p>
              <Button onClick={() => setSelected(item)} className="w-full text-center">View Sample</Button>
            </div>
          </Card>
        ))}
      </div>
      <p className="text-sm text-slate-600">Due to confidentiality and NDAs, only curated samples are displayed. Additional samples can be shared on request.</p>
      <PdfModal item={selected} open={!!selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Portfolio;
