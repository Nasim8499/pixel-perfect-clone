import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
  index?: number;
}

const ProjectCard = ({ title, category, image, href, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={href} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-secondary mb-4">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <motion.div
            className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
          </motion.div>
          <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
