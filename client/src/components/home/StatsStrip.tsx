import { motion } from 'framer-motion';
import { stats } from '../../data/stats';

const StatsStrip = () => (
  <section className="py-12">
    <div className="grid gap-4 rounded-2xl bg-primary px-6 py-8 text-white shadow-card md:grid-cols-4">
      {stats.map((stat, idx) => (
        <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
          <div className="text-2xl font-semibold">{stat.value}</div>
          <p className="text-sm">{stat.label}</p>
          <p className="text-xs text-white/80">{stat.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsStrip;
