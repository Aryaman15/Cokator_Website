type Props = {
  title: string;
  subtitle?: string;
};

const SectionHeading = ({ title, subtitle }: Props) => (
  <div className="mb-8 space-y-2 text-center">
    <h2 className="text-2xl font-bold text-primary md:text-3xl">{title}</h2>
    {subtitle && <p className="text-sm text-slate-600 md:text-base">{subtitle}</p>}
  </div>
);

export default SectionHeading;
