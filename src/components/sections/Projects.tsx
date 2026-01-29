import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';
import ProjectCard from '../ProjectCard';
import AnimatedButton from '../AnimatedButton';

const projects = [
  {
    id: 1,
    title: 'Pixel Forge',
    category: 'UI/UX Design',
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c9d9db2b8811c1f2f51_Project-Image-1.jpg',
    href: '/projects',
  },
  {
    id: 2,
    title: 'Studio Nova',
    category: 'UI/UX Design',
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163ca08474f6ede5554410_Project-Image-2.jpg',
    href: '/projects',
  },
  {
    id: 3,
    title: 'Brand Orbit',
    category: 'UI/UX Design',
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d638bec0e84a11ff019_Project-Image-3.jpg',
    href: '/projects',
  },
  {
    id: 4,
    title: 'Vision Core',
    category: 'UI/UX Design',
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d432b3ca5e849c8d6ec_Project-Image-4.jpg',
    href: '/projects',
  },
];

const Projects = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionTitle
            label="Our Projects"
            title="Our Latest Projects."
            centered={false}
          />
          <AnimatedButton href="/projects" variant="outline">
            View All Projects
          </AnimatedButton>
        </div>

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
  );
};

export default Projects;
