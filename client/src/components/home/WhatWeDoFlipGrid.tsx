import { motion } from 'framer-motion';
import { services } from '../../data/services';
import Card from '../shared/Card';

const WhatWeDoFlipGrid = () => {
  return (
    <section className="py-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <motion.div key={service.id} whileHover={{ rotateY: 8, scale: 1.02 }} className="[transform-style:preserve-3d]">
            <Card className="h-full">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-accent">{service.title}</div>
              <p className="text-sm text-slate-700">{service.shortDescription}</p>
              <ul className="mt-3 space-y-1 text-xs text-slate-600">
                {service.bullets.slice(0, 3).map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoFlipGrid;
