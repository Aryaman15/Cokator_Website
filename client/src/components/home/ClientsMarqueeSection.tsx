import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import cengagelogo from '../../../public/assets/companylogo/cengage.png';
import nbtindia from '../../../public/assets/companylogo/nbtindia.jpg';
import spi from '../../../public/assets/companylogo/spi.jpg';
import macmillan from '../../../public/assets/companylogo/macmillian.png';

type Client = {
  id: string;
  name: string;
  shortLabel: string;
  logoSrc?: string;
};

const clients: Client[] = [
  { id: 'cengage', name: 'Cengage Group', shortLabel: 'Cengage', logoSrc: cengagelogo },
  { id: 'nbt', name: 'National Book Trust, India', shortLabel: 'NBT India', logoSrc: nbtindia },
  { id: 'spi', name: 'SPI Global', shortLabel: 'SPI', logoSrc: spi },
  { id: 'macmillan', name: 'Macmillan', shortLabel: 'Macmillan', logoSrc: macmillan },
  { id: 'mcgrawhill', name: 'McGraw Hill', shortLabel: 'McGraw Hill' },
  { id: 'oswaal', name: 'Oswaal', shortLabel: 'Oswaal' },
  { id: 'sna', name: 'Sangeet Natak Academy', shortLabel: 'Sangeet Natak Academy' },
  { id: 'xseed', name: 'XSEED Education', shortLabel: 'XSEED Education' },
  { id: 'mps', name: 'MPS', shortLabel: 'MPS' },
  { id: 'uolo', name: 'UOLO', shortLabel: 'UOLO' },
  { id: 'mbd', name: 'MBD', shortLabel: 'MBD' },
];

const ClientsMarqueeSection = () => {
  // store a UNIQUE box id, not just the client id
  const [hoveredBoxId, setHoveredBoxId] = useState<string | null>(null);
  const isPaused = hoveredBoxId !== null;

  const handleEnter = (boxId: string) => setHoveredBoxId(boxId);
  const handleLeave = () => setHoveredBoxId(null);

  return (
    <section className="mx-auto max-w-6xl rounded-3xl border border-slate-200/80 bg-white/90 px-6 py-6 shadow-lg dark:border-slate-800 dark:bg-slate-900 md:px-10 md:py-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          Trusted by leading publishers
        </p>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 md:text-2xl">
          Publishing partners who trust CoKrator
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 md:text-base">
          CoKrator supports STEM, medical, K–12 and higher-education lists for established publishing brands, from sample
          development to full-scale production and digital delivery.
        </p>
      </div>

      <div className="mt-6 rounded-full border border-slate-200/60 bg-slate-50/80 px-2 py-2 dark:border-slate-700/60 dark:bg-slate-800/80">
        {/* IMPORTANT: allow tooltips to overflow vertically */}
        <div
          data-paused={isPaused}
          className="relative overflow-x-hidden overflow-y-visible"
        >
          <div className="marquee-track flex min-w-max items-center gap-4 py-3 pl-4 pr-8 animate-marquee md:gap-6">
            {[...clients, ...clients].map((client, index) => {
              const boxId = `${client.id}-${index}`; // unique per box
              const isActive = hoveredBoxId === boxId;

              return (
                <div key={boxId} className="relative">
                  <button
                    type="button"
                    onMouseEnter={() => handleEnter(boxId)}
                    onMouseLeave={handleLeave}
                    onFocus={() => handleEnter(boxId)}
                    onBlur={handleLeave}
                    className="group inline-flex items-center gap-3 rounded-full border border-slate-200/60 bg-white/60 px-4 py-2 text-left text-slate-600 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:text-slate-900 focus:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700/60 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-slate-900"
                    aria-label={`Learn more about ${client.name}`}
                  >
                    {/* LOGO / DUMMY LOGO */}
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-500 transition group-hover:bg-slate-900 group-hover:text-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-slate-50 dark:group-hover:text-slate-900">
                      {client.logoSrc ? (
                        <img
                          src={client.logoSrc}
                          alt={`${client.shortLabel} logo`}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <span>{client.shortLabel.slice(0, 3)}</span> // fallback dummy logo
                      )}
                    </div>

                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold text-slate-800 transition group-hover:text-slate-950 dark:text-slate-100 dark:group-hover:text-white">
                      {client.shortLabel}
                    </span>
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{ duration: 0.18 }}
                      className="pointer-events-none absolute left-1/2 z-10 w-56 max-w-xs -translate-x-1/2 md:bottom-full md:mb-10 md:top-auto md:translate-y-0 top-full mt-3"
                    >
                      <div className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-left shadow-lg ring-1 ring-slate-100/70 dark:border-slate-700/70 dark:bg-slate-900 dark:ring-slate-800/60">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {client.name}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarqueeSection;
