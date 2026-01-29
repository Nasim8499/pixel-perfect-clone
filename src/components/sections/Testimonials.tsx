import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';
import CounterAnimation from '../CounterAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with Arooth was a seamless experience from start to finish. Their team truly understood our vision and brought it to life through a stunning digital identity. The results exceeded our expectations.",
    author: "Emma Johnson",
    image: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaedad24e443801fc6e0_Testimonial-Image-1.jpg",
  },
  {
    id: 2,
    quote: "Arooth delivered exactly what we were looking for—clean design, clear structure, and a strong brand presence. Their attention to detail and creative approach made the entire process effortless.",
    author: "Emma Johnson",
    image: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaee30cffad6d75f74b4_Testimonial-Image-2.jpg",
  },
  {
    id: 3,
    quote: "The team at Arooth transformed our ideas into a polished and professional digital experience. Communication was smooth, timelines were met, and the final outcome was exceptional.",
    author: "Emma Johnson",
    image: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaeeb6faec471807e4a4_Testimonial-Image-3.jpg",
  },
  {
    id: 4,
    quote: "From concept to execution, Arooth handled everything with precision and creativity. The final design perfectly reflects our brand and has received great feedback from our clients.",
    author: "Emma Johnson",
    image: "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaeef6f6713e50ba3c26_Testimonial-Image-4.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <SectionTitle
          label="Our Testimonials"
          title="Our success is measured by the satisfaction of our clients. We take pride in building long partnerships."
        />

        {/* Testimonial Slider */}
        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-8 md:gap-12 bg-card rounded-3xl p-8 md:p-12 border border-border"
            >
              <div className="shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-5xl text-primary mb-4 font-serif">"</div>
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  {testimonials[currentIndex].quote}
                </p>
                <p className="font-semibold text-foreground">
                  {testimonials[currentIndex].author}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-foreground">
              <CounterAnimation end={95} suffix="%" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">Client Satisfaction Rate</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-foreground">
              <CounterAnimation end={120} suffix="+" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">Global Brands Served Worldwide</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-foreground">
              <CounterAnimation end={5} suffix="X" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">Average Growth Achieved</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
