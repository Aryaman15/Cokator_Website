import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

type ButtonProps = {
  to?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({ to, children, className, variant = 'primary', onClick, type = 'button' }: ButtonProps) => {
  const base =
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900';
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent/90 shadow-sm dark:shadow-accent/20',
    secondary:
      'border border-primary text-primary hover:bg-primary hover:text-white dark:border-slate-300 dark:text-slate-100 dark:hover:bg-white dark:hover:text-primary',
  };

  if (to) {
    return (
      <Link to={to} className={cn(base, variants[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </button>
  );
};

export default Button;
