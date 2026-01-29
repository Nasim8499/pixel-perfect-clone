import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Awards from '../components/sections/Awards';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Testimonials from '../components/sections/Testimonials';
import Blog from '../components/sections/Blog';
import FAQ from '../components/sections/FAQ';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Awards />
        <Services />
        <Projects />
        <Testimonials />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
