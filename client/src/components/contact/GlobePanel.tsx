import { motion } from 'framer-motion';
import Button from '../shared/Button';

const reassurance = [
  'Dedicated production teams in India and North America',
  '24–48 hr response with a tailored plan',
  'NDAs and secure file handling on request',
];

const GlobePanel = () => (
  <motion.div
    className="relative flex h-full flex-col justify-between gap-4 rounded-2xl bg-gradient-to-br from-primary to-slate-900 p-8 text-white shadow-card ring-1 ring-white/5"
    initial={{ opacity: 0, scale: 0.96, y: 12 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Why contact us</p>
      <h3 className="mt-2 text-xl font-semibold">You’ll get a confident, actionable response</h3>
      <p className="mt-2 text-sm text-white/80">Share your brief and we’ll propose timelines, team mix, and deliverables.</p>
    </div>
    <ul className="space-y-2 text-sm text-white/85">
      {reassurance.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <div className="mt-4 flex flex-col gap-2 rounded-2xl bg-white/10 p-4 text-sm text-white/90">
      <div className="font-semibold">Direct contacts</div>
      <div className="flex flex-wrap gap-3 text-white/80">
        <span>India: +91-9999343638</span>
        <span>US & Canada: +1-647-799-4812</span>
        <span>info@cokrator.com</span>
      </div>
      <Button to="/services" variant="secondary" className="self-start border-white/60 bg-white/10 text-white hover:border-white hover:bg-white/20 hover:text-white">
        Explore capabilities
      </Button>
    </div>
  </motion.div>
);

export default GlobePanel;
