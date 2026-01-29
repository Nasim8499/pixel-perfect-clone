import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import AnimatedButton from '../components/AnimatedButton';
import TeamCard from '../components/TeamCard';
import Marquee from '../components/Marquee';

const teamMembers = [
  { name: 'Devon Lane', role: 'Brand Identity Designer', image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0ffb159d9941921ad2ce_Member-Image-1.jpg' },
  { name: 'James Anderson', role: 'Creative Director', image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0fc30b9e253f89ff04a8_Member-Image-2.jpg' },
  { name: 'Dianne Russell', role: 'Senior Webflow Developer', image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0fb490ad3863d9959b46_Member-Image-3.jpg' },
  { name: 'Annette Black', role: 'UI/UX Strategist', image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0f9cc03a35f586dc7b54_Member-Image-4.jpg' },
  { name: 'Floyd Miles', role: 'Product Designer', image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0f867e29ec200271b37c_Member-Image-5.jpg' },
  { name: 'Savannah Nguyen', role: 'Digital Marketing Lead', image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0f6c1e45f5c5b63fdfc2_Member-Image-6.jpg' },
  { name: 'Leslie Alexander', role: 'Content & Copy Specialist', image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0f506163f9b04d984bbc_Member-Image-7.jpg' },
  { name: 'Wade Warren', role: 'Social Media Manager', image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0ef033baf106960c2a67_Member-Image-8.jpg' },
];

const values = [
  { title: 'Mission', subtitle: 'Focused On Impact', description: 'Our mission is creating experience that inspire, deliver results.', icon: '🎯' },
  { title: 'Vision', subtitle: 'Digital Innovation', description: 'Our vision is to shape the future of digital innovation.', icon: '🔮' },
  { title: 'Goals', subtitle: 'Inspire Growth', description: 'Our goal is to continuously push boundaries & help business.', icon: '🚀' },
];

const testimonials = [
  { quote: "Working with Arooth was a seamless experience from start to finish. Their team truly understood our vision and brought it to life through a stunning digital identity. The results exceeded our expectations.", author: "Emma Johnson", image: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaedad24e443801fc6e0_Testimonial-Image-1.jpg" },
  { quote: "Arooth delivered exactly what we were looking for—clean design, clear structure, and a strong brand presence. Their attention to detail and creative approach made the entire process effortless.", author: "Emma Johnson", image: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaee30cffad6d75f74b4_Testimonial-Image-2.jpg" },
  { quote: "The team at Arooth transformed our innovative ideas into a polished and professional digital experience. Communication was smooth, timelines were consistently met, and the final outcome was exceptionally impressive.", author: "Emma Johnson", image: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaeeb6faec471807e4a4_Testimonial-Image-3.jpg" },
  { quote: "From concept to execution, Arooth handled everything with impressive precision and remarkable creativity. The final design perfectly reflects our brand and has received great positive feedback from our clients.", author: "Emma Johnson", image: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaeef6f6713e50ba3c26_Testimonial-Image-4.jpg" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="absolute inset-0 hero-gradient" />
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Crafting The Future Of Digital <span className="text-primary">Brands.</span>
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-lg text-muted-foreground">
                  At Arooth, we believe that great design goes beyond visuals — it's about creating meaningful digital experiences that connect people and brands.
                </p>
              </motion.div>
            </div>
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

        {/* About Content */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <SectionTitle
                  label="About Us"
                  title="Our team of designers, developers, and thinkers driven by one purpose — to craft digital experiences."
                  centered={false}
                />
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">
                      We reimagine your brand's digital presence and change how individuals interact with your brand.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-card border border-border rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      Our vision is to create meaningful digital experiences that combine creativity, clarity, and purpose.
                    </p>
                  </motion.div>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8 text-muted-foreground"
                >
                  We combine strategy, creativity, and technology to help brands grow in the modern digital landscape. Every project we take on is fueled by curiosity, guided by precision.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <AnimatedButton href="/contact-us" variant="outline">
                    More About Us
                  </AnimatedButton>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12 flex items-center gap-6"
                >
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary">40+</div>
                    <div className="text-sm text-muted-foreground mt-1">Worldwide</div>
                  </div>
                  <div className="h-16 w-px bg-border" />
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6942f0e8d0fe21fb280fe263_About-Us-Image.jpg"
                  alt="About Arooth"
                  className="w-full rounded-3xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <SectionTitle
              label="Team Members"
              title="Our Talented Team Members."
              highlightWord="Talented"
            />
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <SectionTitle
                label="Our Values"
                title="Values Shapes Everything."
                highlightWord="Values"
                centered={false}
              />
              <AnimatedButton href="/projects" variant="outline">
                View All Projects
              </AnimatedButton>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">{value.icon}</span>
                    <span className="text-sm text-muted-foreground">{value.title}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.subtitle}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <SectionTitle
              label="Our Testimonials"
              title="Our success is measured by the satisfaction of our clients. We take pride in building long partnerships."
            />
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-3xl p-8"
                >
                  <div className="flex gap-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-20 h-20 rounded-2xl object-cover shrink-0"
                    />
                    <div>
                      <div className="text-3xl text-primary mb-2">"</div>
                      <p className="text-muted-foreground text-sm mb-4">{testimonial.quote}</p>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
