import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  index?: number;
}

const ServiceCard = ({ icon, title, description, href, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={href}
        className="group block bg-card border border-border rounded-3xl p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <div className="text-primary group-hover:text-primary-foreground transition-colors">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
        <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          <span>View Details</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
