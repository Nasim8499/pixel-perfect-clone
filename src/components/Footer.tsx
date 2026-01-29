import { Link } from 'react-router-dom';
import Marquee from './Marquee';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Team', href: '/about-us' },
    { name: 'Careers', href: '/contact-us' },
    { name: 'Contact', href: '/contact-us' },
  ],
  services: [
    { name: 'Brand Identity', href: '/services' },
    { name: 'UI/UX Strategy', href: '/services' },
    { name: 'Digital Marketing', href: '/services' },
    { name: 'Product Design', href: '/services' },
  ],
  resources: [
    { name: 'Blog', href: '/projects' },
    { name: 'Case Studies', href: '/projects' },
    { name: 'FAQs', href: '/services' },
    { name: 'Support', href: '/contact-us' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com' },
  { name: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'Instagram', href: 'https://instagram.com' },
  { name: 'Dribbble', href: 'https://dribbble.com' },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8 overflow-hidden">
      {/* CTA Marquee */}
      <div className="mb-16">
        <Marquee className="py-8 border-y border-background/10">
          <span className="text-6xl md:text-8xl font-bold tracking-tight px-8">Let's Work Together</span>
          <span className="text-6xl md:text-8xl font-bold tracking-tight text-primary px-8">•</span>
          <span className="text-6xl md:text-8xl font-bold tracking-tight px-8">Start Your Project</span>
          <span className="text-6xl md:text-8xl font-bold tracking-tight text-primary px-8">•</span>
        </Marquee>
      </div>

      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0L17.5 10.5H28L19.25 17L22.75 28L14 21.5L5.25 28L8.75 17L0 10.5H10.5L14 0Z" fill="hsl(221, 83%, 53%)" />
              </svg>
              <span className="text-xl font-bold">Arooth</span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              We blend creativity with strategy to build digital experiences that move brands forward.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <span className="sr-only">{link.name}</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/60 hover:text-background transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/60 hover:text-background transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/60 hover:text-background transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-background/60 text-sm mb-4">
              Subscribe to get the latest updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 text-sm focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2025 Arooth. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/about-us" className="text-background/60 hover:text-background transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/about-us" className="text-background/60 hover:text-background transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
