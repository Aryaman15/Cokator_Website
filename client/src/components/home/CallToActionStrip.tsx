import Button from '../shared/Button';

const CallToActionStrip = () => (
  <section className="my-12 rounded-3xl bg-gradient-to-r from-primary to-primary/90 px-8 py-10 text-white shadow-card">
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h3 className="text-2xl font-semibold">Have a book or digital publishing project in mind?</h3>
        <p className="text-sm text-white/80">Talk to our team for a tailored production plan.</p>
      </div>
      <Button to="/contact" variant="secondary" className="bg-white text-primary hover:bg-slate-100">
        Talk to Our Team
      </Button>
    </div>
  </section>
);

export default CallToActionStrip;
