import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  image: string;
  logo?: string;
}

const TestimonialCard = ({ quote, author, image, logo }: TestimonialCardProps) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-6 md:gap-10 bg-card rounded-3xl p-6 md:p-10 border border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="shrink-0">
        <img
          src={image}
          alt={author}
          className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover"
        />
      </div>
      <div className="flex-1">
        {logo && (
          <img src={logo} alt="Company logo" className="h-6 mb-4 opacity-60" />
        )}
        <div className="text-4xl text-primary mb-4">"</div>
        <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
          {quote}
        </p>
        <p className="font-semibold text-foreground">{author}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
