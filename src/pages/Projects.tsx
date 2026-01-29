import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const projects = [
  { id: 1, title: 'Pixel Forge', category: 'UI/UX Design', image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c9d9db2b8811c1f2f51_Project-Image-1.jpg', href: '/projects' },
  { id: 2, title: 'Studio Nova', category: 'UI/UX Design', image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163ca08474f6ede5554410_Project-Image-2.jpg', href: '/projects' },
  { id: 3, title: 'Brand Orbit', category: 'UI/UX Design', image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d638bec0e84a11ff019_Project-Image-3.jpg', href: '/projects' },
  { id: 4, title: 'Vision Core', category: 'UI/UX Design', image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d432b3ca5e849c8d6ec_Project-Image-4.jpg', href: '/projects' },
  { id: 5, title: 'Design Flow', category: 'UI/UX Design', image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c4a9db173af5aef85ba_Project-Image-5.jpg', href: '/projects' },
  { id: 6, title: 'Creative Labs', category: 'Branding', image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163a5192d7749a090ca88b_Blog-Image-1.jpg', href: '/projects' },
];

const ProjectsPage = () => {
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
              label="Our Works"
              title="Our Latest Projects."
              highlightWord="Projects."
              description="At Arooth, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world."
            />
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  href={project.href}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
              >
                Have a project in mind?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
              >
                Let's collaborate and bring your vision to life. We're here to help you create something amazing.
              </motion.p>
              <motion.a
                href="/contact-us"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-full font-medium hover:bg-background/90 transition-colors"
              >
                Get In Touch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
                  <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
