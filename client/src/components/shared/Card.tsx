import { cn } from '../../utils/cn';

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn('rounded-2xl bg-white p-6 shadow-card', className)}>{children}</div>
);

export default Card;
