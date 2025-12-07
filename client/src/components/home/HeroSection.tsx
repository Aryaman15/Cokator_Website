import { motion } from 'framer-motion';
import Button from '../shared/Button';

const highlights = [
  { label: 'Disciplines', value: 'STEM, Medicine, Business' },
  { label: 'Formats', value: 'Print, eBook, Interactive' },
  { label: 'Turnaround', value: 'Agile, schedule-driven pods' },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-white to-accent/10 px-6 py-12 shadow-sm lg:flex lg:items-center lg:gap-10 lg:px-12 lg:py-16">
      <div className="space-y-6 lg:w-1/2">
        <p className="text-xs uppercase tracking-[0.35em] text-primary">Publishing & Digital Content Studio</p>
        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Build books, courses, and digital experiences with a partner that sweats every detail.
        </h1>
        <p className="text-base text-slate-700 sm:text-lg">
          CoKrator Content Solutions Pvt. Ltd. blends editorial precision, design craft, and technology-first workflows to deliver
          production-ready assets for global publishers and learning leaders.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button to="/contact">Discuss a Project</Button>
          <Button to="/portfolio" variant="secondary">
            View Portfolio
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-inner backdrop-blur"
            >
              <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 grid flex-1 place-items-center lg:mt-0">
        <div className="relative h-full w-full max-w-xl">
          <div className="absolute -inset-8 -z-10 rounded-[36px] bg-gradient-to-br from-primary/20 via-accent/10 to-white blur-3xl" aria-hidden />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-px bg-slate-100">
              {[1, 2, 3, 4].map((card) => (
                <div key={card} className="bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Storyboard {card}</p>
                  <p className="mt-2 text-sm text-slate-700">
                    Accessible layouts, art direction, and QA wrapped into cohesive production pods.
                  </p>
                  <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${70 + card * 5}%` }}
                      transition={{ delay: card * 0.1, duration: 0.6 }}
                      className="h-2 rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
