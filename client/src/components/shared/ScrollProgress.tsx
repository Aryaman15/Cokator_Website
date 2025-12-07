import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-1 bg-accent/20"
      style={{ scaleX: scrollYProgress, originX: 0 }}
      aria-hidden
    />
  );
};

export default ScrollProgress;
