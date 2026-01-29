import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';
import AnimatedButton from '../AnimatedButton';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Designing for Emotion: The Secret to Memorable Brands.',
    category: 'Advice',
    date: 'Nov 14, 2025',
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163a5192d7749a090ca88b_Blog-Image-1.jpg',
    href: '/projects',
  },
  {
    id: 2,
    title: 'The Power of Minimalism in Modern Web Design.',
    category: 'Advice',
    date: 'Nov 14, 2025',
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163a37dc79e51d34432ff1_Blog-Image-2.jpg',
    href: '/projects',
  },
  {
    id: 3,
    title: 'Building Digital Trust Through Strong Brand Identity.',
    category: 'Advice',
    date: 'Nov 14, 2025',
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163a128551ce062ec12c66_Blog-Image-3.jpg',
    href: '/projects',
  },
];

const Blog = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <SectionTitle
              label="News & Articles"
              title="Fresh Perspectives On Strategy."
              centered={false}
            />
            <p className="mt-4 text-muted-foreground max-w-lg">
              We combine strategy, creativity, and technology to help brands grow in the modern digital landscape.
            </p>
          </div>
          <AnimatedButton href="/projects" variant="outline">
            View All Articles
          </AnimatedButton>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={post.href} className="block">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-4">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  <span>Read More</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
