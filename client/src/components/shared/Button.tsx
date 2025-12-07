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
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2';
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent/90 shadow-sm',
    secondary: 'border border-primary text-primary hover:bg-primary hover:text-white',
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
