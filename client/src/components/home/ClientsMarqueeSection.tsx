const logos = [
  'Macmillan',
  'McGraw Hill',
  'Pearson',
  'Cengage',
  'Oxford',
  'SAGE',
  'Wiley',
  'Springer',
];

const ClientsMarqueeSection = () => {
  return (
    <section className="relative mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-80" aria-hidden />
      <div className="relative z-10 flex items-center gap-8 px-6 py-4">
        <div className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Trusted by publishers such as
        </div>
        <div className="relative flex-1 overflow-hidden" role="presentation">
          <div className="marquee-track flex min-w-max gap-10 whitespace-nowrap" style={{ animationDuration: '22s' }}>
            {logos.concat(logos).map((logo, idx) => (
              <div
                key={`${logo}-${idx}`}
                className="flex h-12 w-28 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 px-3 text-sm font-semibold text-slate-500 shadow-inner"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarqueeSection;
