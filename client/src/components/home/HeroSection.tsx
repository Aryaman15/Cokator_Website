import { motion } from 'framer-motion';
import Button from '../shared/Button';

const books = [
  { title: 'K–12 Maths', color: 'bg-accent/80' },
  { title: 'Nursing', color: 'bg-teal/70' },
  { title: 'Engineering', color: 'bg-primary/80' },
];

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-10 py-16 lg:flex-row">
      <div className="space-y-6 lg:w-1/2">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Publishing partner</p>
        <h1 className="text-3xl font-bold leading-tight text-primary md:text-4xl">
          Digital Content & Book Production
          <br />
          for Global Publishers & eLearning Companies
        </h1>
        <p className="text-base text-slate-700 md:text-lg">
          CoKrator provides composition, illustrations, eBook delivery, and editorial services across engineering, medical,
          math, business, and education programs with rigorous quality control.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/contact">Get a Project Quote</Button>
          <Button to="/portfolio" variant="secondary">
            View Portfolio
          </Button>
        </div>
      </div>
      <div className="relative grid w-full max-w-md grid-cols-1 gap-4 lg:w-1/2">
        {books.map((book, idx) => (
          <motion.div
            key={book.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ rotate: -2, y: -6 }}
            className={`rounded-xl ${book.color} p-6 text-white shadow-xl`}
          >
            <p className="text-sm uppercase tracking-wide">Signature Series</p>
            <h3 className="mt-2 text-2xl font-semibold">{book.title}</h3>
            <p className="mt-1 text-sm text-white/80">Structured layouts, crisp art, and accessible delivery.</p>
          </motion.div>
        ))}
        <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-r from-accent/20 to-teal/20 blur-2xl" aria-hidden />
      </div>
    </section>
  );
};

export default HeroSection;
