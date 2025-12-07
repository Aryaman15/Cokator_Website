import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">{children}</div>;
};

export default PageWrapper;
