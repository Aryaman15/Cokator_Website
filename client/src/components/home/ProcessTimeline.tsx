import { motion } from 'framer-motion';

const steps = [
  'Project Initiation & Briefing',
  'Editorial & Design Planning',
  'Sample Development & Approval',
  'Full Production & Composition',
  'Quality Assurance & Corrections',
  'Final Delivery & Ongoing Support',
];

const ProcessTimeline = () => {
  return (
    <section className="py-12">
      <div className="space-y-6 rounded-2xl bg-white p-6 shadow-card">
        <h3 className="text-xl font-semibold text-primary">How We Work</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-3"
            >
              <div className="mt-1 h-8 w-8 rounded-full bg-accent/10 text-center text-sm font-semibold leading-8 text-accent">
                {idx + 1}
              </div>
              <p className="text-sm text-slate-700">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
