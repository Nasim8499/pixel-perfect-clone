import { motion } from 'framer-motion';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: number;
}

const Marquee = ({ children, className = '', reverse = false, speed = 30 }: MarqueeProps) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: reverse ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        <div className="flex shrink-0">
          {children}
          {children}
        </div>
        <div className="flex shrink-0">
          {children}
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
