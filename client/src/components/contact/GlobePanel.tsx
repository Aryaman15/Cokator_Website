import { motion } from 'framer-motion';

const markers = [
  { label: 'India – Production & Project Management', position: 'top-1/3 left-1/3' },
  { label: 'US & Canada – Client Liaison', position: 'top-1/2 right-1/4' },
];

const GlobePanel = () => (
  <motion.div
    className="relative flex h-full items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-white shadow-card"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
  >
    <div className="relative h-72 w-72 overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.15),transparent)]">
      <div className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_45deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" aria-hidden />
      {markers.map((marker) => (
        <div key={marker.label} className={`absolute ${marker.position}`}>
          <div className="h-3 w-3 rounded-full bg-accent shadow" title={marker.label} />
          <div className="mt-2 max-w-[120px] text-xs text-white/80">{marker.label}</div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default GlobePanel;
