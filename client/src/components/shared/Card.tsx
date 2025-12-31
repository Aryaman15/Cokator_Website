import { cn } from '../../utils/cn';

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div
    className={cn(
      'rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100 dark:bg-slate-900 dark:text-slate-100 dark:ring-slate-800',
      className
    )}
  >
    {children}
  </div>
);

export default Card;
