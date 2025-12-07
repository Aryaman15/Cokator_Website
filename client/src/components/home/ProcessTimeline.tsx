import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { howWeWorkSteps } from '../../data/howWeWorkSteps';

const fadeVariants = (isEven: boolean) => ({
  initial: { opacity: 0, y: 40, x: isEven ? 30 : -30 },
  animate: { opacity: 1, y: 0, x: 0 },
});

const stepIllustrations = [
  (
    <svg viewBox="0 0 120 120" className="h-20 w-20 text-amber-500" aria-hidden="true">
      <rect x="18" y="26" width="84" height="68" rx="12" fill="currentColor" opacity="0.1" />
      <rect x="32" y="38" width="52" height="10" rx="5" fill="currentColor" opacity="0.2" />
      <rect x="32" y="54" width="38" height="10" rx="5" fill="currentColor" opacity="0.35" />
      <circle cx="82" cy="78" r="14" stroke="currentColor" strokeWidth="6" fill="none" />
      <path d="M76 78l4 4 8-10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 120 120" className="h-20 w-20 text-sky-500" aria-hidden="true">
      <rect x="18" y="30" width="84" height="60" rx="12" fill="currentColor" opacity="0.08" />
      <path d="M30 74c12-14 24-20 40-16s24 2 32-8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="46" cy="50" r="10" fill="currentColor" opacity="0.35" />
      <circle cx="68" cy="56" r="8" fill="currentColor" opacity="0.45" />
      <circle cx="86" cy="44" r="9" fill="currentColor" opacity="0.25" />
    </svg>
  ),
  (
    <svg viewBox="0 0 120 120" className="h-20 w-20 text-emerald-500" aria-hidden="true">
      <rect x="20" y="28" width="80" height="64" rx="14" fill="currentColor" opacity="0.1" />
      <rect x="32" y="40" width="56" height="8" rx="4" fill="currentColor" opacity="0.35" />
      <rect x="32" y="54" width="40" height="8" rx="4" fill="currentColor" opacity="0.5" />
      <rect x="32" y="68" width="50" height="8" rx="4" fill="currentColor" opacity="0.25" />
      <path d="M76 60l12 10 12-18" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 120 120" className="h-20 w-20 text-purple-500" aria-hidden="true">
      <rect x="20" y="28" width="80" height="64" rx="12" fill="currentColor" opacity="0.08" />
      <rect x="32" y="40" width="24" height="40" rx="6" fill="currentColor" opacity="0.45" />
      <rect x="60" y="40" width="28" height="28" rx="6" fill="currentColor" opacity="0.3" />
      <rect x="60" y="72" width="16" height="8" rx="3" fill="currentColor" opacity="0.5" />
      <path d="M74 46h6" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 120 120" className="h-20 w-20 text-rose-500" aria-hidden="true">
      <rect x="22" y="28" width="76" height="64" rx="14" fill="currentColor" opacity="0.08" />
      <path d="M34 70l16 12 36-34" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <circle cx="40" cy="50" r="8" fill="currentColor" opacity="0.3" />
      <circle cx="58" cy="58" r="9" fill="currentColor" opacity="0.35" />
      <circle cx="78" cy="46" r="10" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 120 120" className="h-20 w-20 text-lime-600" aria-hidden="true">
      <rect x="22" y="28" width="76" height="64" rx="14" fill="currentColor" opacity="0.08" />
      <rect x="36" y="38" width="48" height="10" rx="5" fill="currentColor" opacity="0.4" />
      <rect x="36" y="54" width="30" height="10" rx="5" fill="currentColor" opacity="0.25" />
      <rect x="36" y="70" width="56" height="10" rx="5" fill="currentColor" opacity="0.35" />
      <path d="M74 72l10 10 14-18" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

type StepItemProps = {
  index: number;
  title: string;
  description: string;
  visualTone: string;
  illustration: ReactNode;
  activeIndex: number;
  onActive: (index: number) => void;
};

const StepItem = ({
  index,
  title,
  description,
  visualTone,
  illustration,
  activeIndex,
  onActive,
}: StepItemProps) => {
  const isEven = index % 2 === 1;
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.55 });

  useEffect(() => {
    if (inView) {
      onActive(index);
    }
  }, [inView, index, onActive]);

  const isActive = activeIndex === index;

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 items-center gap-6 pl-14 md:grid-cols-2 md:gap-12 md:pl-0"
    >
      <div
        className={`order-1 flex justify-center ${isEven ? 'md:order-2 md:justify-start' : 'md:order-1 md:justify-end'}`}
      >
        <motion.div
          variants={fadeVariants(!isEven)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.05 * index }}
          className="group relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br"
        >
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${visualTone} blur-3xl transition duration-500 group-hover:scale-105`}
          />
          <div className="relative flex h-full items-center justify-center rounded-2xl border border-white/30 bg-white/70 backdrop-blur-sm">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/90 shadow-card transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
              {illustration}
            </div>
          </div>
        </motion.div>
      </div>

      <div className={`order-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <motion.div
          variants={fadeVariants(isEven)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.05 * index + 0.05 }}
          className={`group relative rounded-2xl border bg-white/80 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-7 ${
            isActive ? 'border-accent/50 shadow-lg shadow-accent/10' : 'border-slate-100'
          }`}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/40 to-white/0 opacity-0 transition duration-300 group-hover:opacity-100" />
          <div className="relative flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition duration-300 ${
                isActive ? 'border-accent bg-accent text-white shadow shadow-accent/20' : 'border-slate-200 bg-white text-primary'
              }`}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={`${isActive ? 'text-accent' : 'text-slate-500'}`}>How we work</span>
          </div>
          <h4 className="relative mt-3 text-lg font-semibold text-primary sm:text-xl">{title}</h4>
          <p className="relative mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>
        </motion.div>
      </div>

      <div className="absolute left-6 top-1/2 h-12 w-12 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-semibold transition duration-300 ${
            isActive
              ? 'border-accent bg-accent text-white shadow-lg shadow-accent/30'
              : 'border-slate-200 bg-white text-primary'
          }`}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = howWeWorkSteps.length;
  const progressHeight = ((activeStep + 1) / totalSteps) * 100;

  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">How we work</p>
          <h3 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">A simple, collaborative path to delivery</h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            From discovery through launch, we keep each stage transparent, collaborative, and measurable so you always know
            how your project is progressing.
          </p>
        </div>

        <div className="relative rounded-3xl bg-white/70 p-6 shadow-card ring-1 ring-slate-100 backdrop-blur-sm sm:p-10">
          <div className="absolute left-6 top-0 bottom-0 w-[3px] -translate-x-1/2 rounded-full bg-slate-200 md:left-1/2">
            <motion.div
              className="absolute left-0 top-0 w-full rounded-full bg-accent"
              initial={{ height: `${progressHeight}%` }}
              animate={{ height: `${progressHeight}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 22 }}
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {howWeWorkSteps.map((step, index) => (
              <StepItem
                key={step.title}
                index={index}
                title={step.title}
                description={step.description}
                visualTone={step.visualTone}
                illustration={stepIllustrations[index]}
                activeIndex={activeStep}
                onActive={setActiveStep}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
