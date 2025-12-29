import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolio } from '../../data/portfolio';
import PdfModal from '../shared/PdfModal';
import Button from '../shared/Button';
import { PortfolioItem } from '../../types';

const SampleCarousel = () => {
  const [active, setActive] = useState<PortfolioItem | null>(null);

  return (
    <section className="py-12">
      <div className="flex gap-4 overflow-x-auto pb-4">
        {portfolio.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="min-w-[260px] rounded-2xl bg-white shadow-card dark:bg-slate-900 dark:text-slate-100"
          >
            <img src={item.thumbnail} alt={item.title} className="h-40 w-full rounded-t-2xl object-cover" />
            <div className="space-y-2 p-4">
              <h4 className="text-base font-semibold text-primary dark:text-white">{item.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">{item.domain} · {item.client}</p>
              <Button onClick={() => setActive(item)} className="w-full text-center">View Sample</Button>
            </div>
          </motion.div>
        ))}
      </div>
      <PdfModal item={active} open={!!active} onClose={() => setActive(null)} />
    </section>
  );
};

export default SampleCarousel;
