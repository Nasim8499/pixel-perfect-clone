import { motion } from 'framer-motion';

interface SectionTitleProps {
  label?: string;
  title: string;
  highlightWord?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ label, title, highlightWord, description, centered = true, light = false }: SectionTitleProps) => {
  const renderTitle = () => {
    if (!highlightWord) return title;
    
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-primary">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
            light ? 'border-background/20 text-background/80' : 'border-border text-muted-foreground'
          } text-sm font-medium`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={light ? 'text-background' : 'text-primary'}>
              <path d="M8 0L10 6H16L11 9.5L13 16L8 12L3 16L5 9.5L0 6H6L8 0Z" fill="currentColor" />
            </svg>
            {label}
          </span>
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-background' : 'text-foreground'
        }`}
      >
        {renderTitle()}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg ${light ? 'text-background/70' : 'text-muted-foreground'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
