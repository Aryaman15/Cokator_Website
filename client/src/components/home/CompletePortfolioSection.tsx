import Button from '../shared/Button';

const CompletePortfolioSection = () => {
  const portfolioPdf = '/assets/pdf/Complete_Portfolio.pdf';
  const portfolioThumbnail = '/assets/pdfThumbnail/Complete_Portfolio_page-0001.jpg';

  return (
    <section className="py-12">
      <div className="grid gap-8 rounded-2xl bg-slate-50 p-6 shadow-card dark:bg-slate-900/60 md:grid-cols-2 md:items-center md:p-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Complete Portfolio</p>
          <h3 className="text-2xl font-bold text-primary dark:text-white md:text-3xl">Explore Our End-to-End Capabilities</h3>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Discover our comprehensive digital services portfolio that showcases the full spectrum of solutions we deliver
            for publishing and eLearning partners. From composition and editorial to art, accessibility, and production,
            this portfolio highlights the quality and consistency our clients trust.
          </p>
          <Button to={portfolioPdf} className="w-fit">View Portfolio PDF</Button>
        </div>
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card dark:border-slate-700 dark:bg-slate-800">
          <a href={portfolioPdf} target="_blank" rel="noreferrer" className="block">
            <img
              src={portfolioThumbnail}
              alt="Complete portfolio cover"
              className="w-full object-cover"
              loading="lazy"
            />
          </a>
          <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white">
            <span>Complete Portfolio</span>
            <a href={portfolioPdf} target="_blank" rel="noreferrer" className="text-accent hover:underline">
              Open PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompletePortfolioSection;
