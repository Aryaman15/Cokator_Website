import Button from '../shared/Button';

const CallToActionSection = () => (
  <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent px-8 py-10 text-white shadow-sm">
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/80">Ready when you are</p>
        <h2 className="text-2xl font-semibold sm:text-3xl">See our portfolio or tell us about your next launch.</h2>
        <p className="max-w-2xl text-sm text-white/80">
          Show us your templates, pilot brief, or creative vision—we will assemble the right pod and move quickly.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button to="/portfolio" variant="secondary" className="border-white text-white hover:bg-white hover:text-primary">
          View Portfolio
        </Button>
        <Button to="/contact" className="bg-white text-primary hover:bg-white/90 hover:text-primary">
          Contact CoKrator
        </Button>
      </div>
    </div>
  </section>
);

export default CallToActionSection;
