import { motion } from 'framer-motion';
import AnimatedButton from '../AnimatedButton';
import Marquee from '../Marquee';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container relative z-10">
        {/* VISION Text with embedded image */}
        <div className="flex items-center justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            {/* V */}
            <span className="text-[80px] md:text-[140px] lg:text-[200px] font-bold text-primary leading-none">
              V
            </span>
            {/* I */}
            <span className="text-[80px] md:text-[140px] lg:text-[200px] font-bold text-primary leading-none">
              I
            </span>
            {/* S */}
            <span className="text-[80px] md:text-[140px] lg:text-[200px] font-bold text-primary leading-none">
              S
            </span>
            {/* I */}
            <span className="text-[80px] md:text-[140px] lg:text-[200px] font-bold text-primary leading-none">
              I
            </span>
            {/* O with image inside */}
            <div className="relative vision-letter-o mx-[-20px] md:mx-[-30px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/10 rounded-full" />
              <img
                src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image.jpg"
                alt="Vision"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full"
              />
            </div>
            {/* N */}
            <span className="text-[80px] md:text-[140px] lg:text-[200px] font-bold text-primary leading-none">
              N
            </span>
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Crafting Modern Vision For the Ambitious Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            We blend creativity with strategy to build digital experiences that move brands forward. From crafting standout websites.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <AnimatedButton href="/contact-us" variant="primary">
              Get Started Now
            </AnimatedButton>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="border-y border-border bg-card/50 backdrop-blur-sm"
      >
        <Marquee className="py-4" speed={25}>
          <span className="text-lg font-medium text-foreground px-6">Real Results</span>
          <span className="text-lg font-medium text-primary px-6">*</span>
          <span className="text-lg font-medium text-foreground px-6">Modern Design</span>
          <span className="text-lg font-medium text-primary px-6">*</span>
          <span className="text-lg font-medium text-foreground px-6">Real Results</span>
          <span className="text-lg font-medium text-primary px-6">*</span>
        </Marquee>
      </motion.div>

      {/* Second CTA Row */}
      <div className="container py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-md"
          >
            At Arooth, we blend creativity with strategy to build digital experiences that move brands forward. From crafting standout websites.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedButton href="/contact-us" variant="primary">
              Get Started Now
            </AnimatedButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
