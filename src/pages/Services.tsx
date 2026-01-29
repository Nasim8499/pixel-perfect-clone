import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import FAQAccordion from '../components/FAQAccordion';
import Marquee from '../components/Marquee';
import { Palette, Layout, TrendingUp, Box } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Brand Identity',
    description: 'We create consistent brand systems that define your voice, visuals, and positioning across all touchpoints.',
    href: '/services',
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'UI/UX Strategy',
    description: 'We design intuitive user experiences that improve usability, engagement, and conversion across digital products.',
    href: '/services',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Digital Marketing',
    description: 'We grow brands through data-driven digital strategies focused on visibility, engagement, and measurable results.',
    href: '/services',
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: 'Product Design',
    description: 'We design scalable digital products that balance usability, aesthetics, and business goals.',
    href: '/services',
  },
];

const faqItems = [
  { question: 'What services does Arooth offer?', answer: 'Arooth provides end-to-end digital solutions, including web design, development, branding, digital marketing, UI/UX strategy, and SEO optimization — all tailored to help your business grow online.' },
  { question: 'How long does a typical project take?', answer: 'Arooth provides end-to-end digital solutions, including web design, development, branding, digital marketing, UI/UX strategy, and SEO optimization — all tailored to help your business grow online.' },
  { question: 'Do you work with clients worldwide?', answer: 'Arooth provides end-to-end digital solutions, including web design, development, branding, digital marketing, UI/UX strategy, and SEO optimization — all tailored to help your business grow online.' },
  { question: 'How can we get started with Arooth?', answer: 'Arooth provides end-to-end digital solutions, including web design, development, branding, digital marketing, UI/UX strategy, and SEO optimization — all tailored to help your business grow online.' },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="absolute inset-0 hero-gradient" />
          
          <div className="container relative z-10">
            <SectionTitle
              label="Our Services"
              title="Our Creative Solutions."
              highlightWord="Solutions."
              description="At Arooth, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world."
            />
          </div>
        </section>

        {/* Banner Images Marquee */}
        <section className="py-8 overflow-hidden">
          <Marquee speed={40}>
            <div className="flex items-center gap-4 px-2">
              <div className="w-32 h-32 rounded-full bg-primary/20" />
              <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d08c8e3fb09fce6078c_Service-Banner-Image-1.jpg" alt="" className="w-64 h-64 rounded-full object-cover" />
              <div className="w-32 h-32 rounded-full bg-primary/30" />
              <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d0882b2236cd282fe37_Service-Banner-Image-2.jpg" alt="" className="w-64 h-64 rounded-full object-cover" />
              <div className="w-32 h-32 rounded-full bg-primary/40" />
              <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d084673eda36d3786d4_Service-Banner-Image-3.jpg" alt="" className="w-64 h-64 rounded-full object-cover" />
            </div>
          </Marquee>
        </section>

        {/* Quote Section */}
        <section className="py-20">
          <div className="container">
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed">
                " We prioritize trust and believe in honesty, transparency, and reliability. We consistently deliver and maintain open communication to build trust with our clients. "
              </p>
            </motion.blockquote>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container">
            <SectionTitle
              label="FAQ"
              title="Frequently Asked Questions."
              highlightWord="Questions."
            />
            <div className="mt-12 max-w-4xl mx-auto">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
