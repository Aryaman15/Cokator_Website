import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { howWeWorkSteps } from '../../data/howWeWorkSteps';

const fadeVariants = (isEven: boolean) => ({
  initial: { opacity: 0, y: 40, x: isEven ? 30 : -30 },
  animate: { opacity: 1, y: 0, x: 0 },
});

type StepItemProps = {
  index: number;
  title: string;
  description: string;
  visualTone: string;
  activeIndex: number;
  onActive: (index: number) => void;
};

const StepItem = ({
  index,
  title,
  description,
  visualTone,
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
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-card transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
              <span className="text-sm font-semibold text-primary">Step {String(index + 1).padStart(2, '0')}</span>
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
