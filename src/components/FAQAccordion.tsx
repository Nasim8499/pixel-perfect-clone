import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="border border-border rounded-2xl overflow-hidden bg-card"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground font-medium">
                question {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                {item.question}
              </h3>
            </div>
            <div className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center">
              {openIndex === index ? (
                <Minus className="w-4 h-4 text-foreground" />
              ) : (
                <Plus className="w-4 h-4 text-foreground" />
              )}
            </div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-[calc(4rem+1rem)] border-l-2 border-primary/20">
                    <h4 className="text-sm font-semibold text-primary mb-2">Question Answer:</h4>
                    <p className="text-muted-foreground mb-4">{item.answer}</p>
                    <AnimatedButton href="/about-us" variant="outline">
                      More About Us
                    </AnimatedButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQAccordion;
