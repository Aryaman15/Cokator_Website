import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discover & Scope',
    description: 'We gather requirements, align on templates, accessibility specs, and success criteria with your publishing team.',
  },
  {
    title: 'Design & Build',
    description: 'Cross-functional pods handle manuscript cleanup, design, art, XML/ePub conversion, and platform-ready packaging.',
  },
  {
    title: 'Quality & Deliver',
    description: 'Multi-level QA, SME reviews, and accessibility validation ensure release-ready assets delivered on schedule.',
  },
];

const HowWeWorkSection = () => (
  <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200/60">
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-primary">How we work</p>
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Built like a studio, aligned like a partner.</h2>
      </div>
      <p className="max-w-xl text-sm text-slate-600">
        Consistent governance, transparent communication, and modular teams tuned for higher-ed, K–12, professional, and corporate learning programs.
      </p>
    </div>
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {steps.map((step, idx) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.05 }}
          className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 p-6"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 via-accent/70 to-primary/70" aria-hidden />
          <div className="flex items-center justify-between text-sm font-semibold text-primary">
            <span>Step {idx + 1}</span>
            <span className="text-slate-400">•</span>
          </div>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
          <p className="mt-2 text-sm text-slate-700">{step.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default HowWeWorkSection;
