import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { toast } from 'sonner';

const projectTypes = ['Development', 'UI/UX Design', 'Branding', 'Marketing'];

const ContactUs = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleTypeToggle = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for reaching out! We will get back to you shortly.');
    setFormData({ name: '', phone: '', email: '', message: '' });
    setSelectedTypes([]);
  };

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
              label="Get In Touch"
              title="Contact Us."
              highlightWord="Us."
              description="At Arooth, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world."
            />
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto bg-primary rounded-3xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* Left Side */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-2 mb-6">
                    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 0L17.5 10.5H28L19.25 17L22.75 28L14 21.5L5.25 28L8.75 17L0 10.5H10.5L14 0Z" fill="hsl(0, 0%, 100%)" />
                    </svg>
                    <span className="text-xl font-bold text-primary-foreground">Arooth</span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary-foreground mb-8">
                    Fill This Form.
                  </h2>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6918bc29c60a086055740d7e_Contact-Image.jpg"
                      alt="Contact"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-8 lg:p-12 bg-primary/90">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-primary-foreground/80 text-sm mb-3">
                        Tell us about your projects*
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleTypeToggle(type)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                              selectedTypes.includes(type)
                                ? 'bg-primary-foreground text-primary'
                                : 'bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full bg-transparent border-b border-primary-foreground/30 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="w-full bg-transparent border-b border-primary-foreground/30 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full bg-transparent border-b border-primary-foreground/30 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground"
                      />
                    </div>

                    <div>
                      <textarea
                        placeholder="Message *"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={4}
                        className="w-full bg-transparent border-b border-primary-foreground/30 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-full font-medium hover:bg-primary-foreground/90 transition-colors"
                    >
                      Get In Touch
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
