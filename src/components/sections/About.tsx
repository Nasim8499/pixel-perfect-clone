import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';
import AnimatedButton from '../AnimatedButton';
import CounterAnimation from '../CounterAnimation';

const About = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div>
            <SectionTitle
              label="About Us"
              title="Our team of designers, developers, and thinkers driven by one purpose — to craft digital experiences."
              centered={false}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-muted-foreground"
            >
              We combine strategy, creativity, and technology to help brands grow in the modern digital landscape. Every project we take on is fueled by curiosity, guided by precision.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <AnimatedButton href="/about-us" variant="outline">
                More About Us
              </AnimatedButton>
            </motion.div>

            {/* Awards Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="text-center">
                <div className="text-5xl font-bold text-primary">40+</div>
                <div className="text-sm text-muted-foreground mt-1">Worldwide</div>
              </div>
              <div className="h-16 w-px bg-border" />
              <div className="text-sm text-muted-foreground">
                Awards Won
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Image */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691f399a64049d0423783289_About-Stat-Image.jpg"
                alt="About Arooth"
                className="w-full rounded-3xl"
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-foreground">
                      <CounterAnimation end={95} suffix="%" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Clients Satisfied and Repeating
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-foreground">
                      <CounterAnimation end={125} suffix="+" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Projects Completed In 24 Countries
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
