import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';
import { ArrowUpRight, Palette, Layout, TrendingUp, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Brand Identity',
    icon: Palette,
    features: ['Logo Design', 'Guidelines', 'Color Strategy', 'Art Direction', 'Brand Strategy'],
    image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691b6f774ec996a8e2c70ec8_Service-Image-1.jpg',
    href: '/services',
  },
  {
    id: 2,
    title: 'UI/UX Strategy',
    icon: Layout,
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Systems'],
    image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691b6f78b7687e089bcefb63_Service-Image-2.jpg',
    href: '/services',
  },
  {
    id: 3,
    title: 'Digital Marketing',
    icon: TrendingUp,
    features: ['SEO Strategy', 'Content Marketing', 'Social Media', 'Analytics', 'PPC Campaigns'],
    image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691b6f788a0e5a2c37a0f8c3_Service-Image-3.jpg',
    href: '/services',
  },
  {
    id: 4,
    title: 'Product Design',
    icon: Box,
    features: ['Product Strategy', 'UI Design', 'Interaction Design', 'Design Sprint', 'MVP Design'],
    image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691b6f78afdb6c6634ed7aea_Service-Image-4.jpg',
    href: '/services',
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionTitle
            label="Our Services"
            title="Creativity Meets Functionality."
            centered={false}
          />
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 ${
                activeTab === index
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card border-border text-foreground hover:border-primary/30'
              }`}
            >
              <span className="text-sm font-medium">
                {String(index + 1).padStart(2, '0')}
              </span>
              <service.icon className="w-5 h-5" />
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Service Details */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-border rounded-3xl p-8 lg:p-10"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              {services[activeTab].title}
            </h3>
            <ul className="space-y-3 mb-8">
              {services[activeTab].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to={services[activeTab].href}
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
            >
              View Details
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right - Service Image */}
          <motion.div
            key={`image-${activeTab}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <img
              src={services[activeTab].image}
              alt={services[activeTab].title}
              className="w-full h-full min-h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
