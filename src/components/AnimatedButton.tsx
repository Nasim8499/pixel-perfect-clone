import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  type?: 'button' | 'submit';
}

const AnimatedButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: AnimatedButtonProps) => {
  const baseStyles = "group relative inline-flex items-center gap-3 rounded-full font-medium transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-foreground text-background hover:bg-foreground/90 px-6 py-3",
    outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-6 py-3",
    white: "bg-card text-foreground hover:bg-card/90 px-6 py-3 shadow-lg",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2 overflow-hidden">
        <span className="inline-flex flex-col h-[1.2em] overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: 0 }}
            whileHover={{ y: '-100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.span>
          <motion.span
            className="block"
            initial={{ y: 0 }}
            whileHover={{ y: '-100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.span>
        </span>
      </span>
      <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground shrink-0">
        <ArrowUpRight className="w-4 h-4" />
      </span>
    </>
  );

  if (href) {
    return (
      <Link to={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default AnimatedButton;
