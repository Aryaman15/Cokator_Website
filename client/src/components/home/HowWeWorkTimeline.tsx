import { motion } from 'framer-motion';
import { howWeWorkSteps } from '../../data/howWeWorkSteps';

const stepVariants = {
  hidden: (isEven: boolean) => ({
    opacity: 0,
    y: 40,
    x: isEven ? 60 : -60,
  }),
  visible: { opacity: 1, y: 0, x: 0 },
};

const HowWeWorkTimeline = () => {
  return (
    <section className="overflow-hidden rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900/70 dark:ring-slate-800 sm:p-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">How we work</p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">A structured, six-step workflow</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            From first brief to final delivery, every phase is orchestrated for clarity, velocity, and quality.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* center line for desktop */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 dark:bg-slate-700 lg:block" />
          {/* left line for mobile */}
          <div className="pointer-events-none absolute left-6 top-8 bottom-8 w-px bg-slate-200 dark:bg-slate-700 lg:hidden" />

          <div className="flex flex-col gap-14 sm:gap-16">
            {howWeWorkSteps.map((step) => {
              const isEven = step.id % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  variants={stepVariants}
                  custom={isEven}
                >
                  <div
                    className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                      isEven ? 'lg:[&>*:first-child]:order-2' : ''
                    }`}
                  >
                    <motion.div
                      className="relative flex justify-center lg:justify-start"
                      whileHover={{ scale: 1.03, rotate: -0.25 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                    >
                      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-white to-accent/10 p-4 shadow-md backdrop-blur">
                        <div className="overflow-hidden rounded-xl bg-white shadow-inner dark:bg-slate-900">
                          <motion.img
                            src={step.image}
                            alt={step.title}
                            className="h-56 w-full object-cover sm:h-64"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <div className="absolute inset-2 -z-10 rounded-[28px] bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" aria-hidden />
                      </div>
                    </motion.div>

                    <motion.div
                      className="relative"
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    >
                      <div
                        className={`absolute ${
                          isEven ? 'lg:-left-[calc(50%+1.5rem)]' : 'lg:-right-[calc(50%+1.5rem)]'
                        } top-6 hidden h-3 w-3 rounded-full bg-primary/10 blur-xl lg:block`}
                        aria-hidden
                      />
                      <div className="relative rounded-3xl bg-white px-6 py-5 shadow-lg shadow-primary/5 transition transform-gpu duration-200 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-950">
                        <div className="absolute -left-[1.15rem] top-6 hidden h-3 w-3 rounded-full bg-primary shadow-md shadow-primary/30 lg:block" aria-hidden />
                        <div className="absolute -right-[1.15rem] top-6 hidden h-3 w-3 rounded-full bg-primary shadow-md shadow-primary/30 lg:block" aria-hidden />
                        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-tight text-primary">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                            {String(step.id).padStart(2, '0')}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-300">Step {step.id}</span>
                        </div>
                        <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">{step.title}</h3>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 sm:text-base">{step.description}</p>
                      </div>
                    </motion.div>
                  </div>

                  <div
                    className="absolute left-1/2 top-6 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-primary text-sm font-semibold text-white shadow-lg shadow-primary/30 dark:border-slate-900 lg:flex"
                  >
                    {String(step.id).padStart(2, '0')}
                  </div>

                  <div className="absolute left-5 top-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-primary text-xs font-semibold text-white shadow-md shadow-primary/30 dark:border-slate-900 lg:hidden">
                    {String(step.id).padStart(2, '0')}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkTimeline;
