import { motion } from 'framer-motion';
import Button from '../shared/Button';

const services = [
  {
    title: 'Editorial & Development',
    description: 'Manuscript cleanup, copy-editing, indexing, and SME alignment for higher-ed and professional titles.',
  },
  {
    title: 'Design, Art & Illustration',
    description: 'Template creation, complex page design, info-graphics, medical and STEM illustration, and cover design.',
  },
  {
    title: 'Digital Production',
    description: 'XML-first workflows, accessible ePub/HTML5, LMS packaging, animation, and media QA for global platforms.',
  },
  {
    title: 'Program Management',
    description: 'Dedicated pods, sprint planning, and reporting tuned to your publishing calendar and quality gates.',
  },
];

const ServicesOverviewSection = () => (
  <section className="space-y-6">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Services</p>
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Full-stack production across print and digital.</h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          We build books, courses, and digital-first products end-to-end or plug into your workflows as a specialized extension of your team.
        </p>
      </div>
      <Button to="/services" variant="secondary" className="w-full sm:w-auto">Explore Services</Button>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {services.map((service, idx) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: idx * 0.05 }}
          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 via-accent/70 to-primary/70" aria-hidden />
          <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-2 text-sm text-slate-700">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesOverviewSection;
