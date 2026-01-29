import { motion } from 'framer-motion';
import Marquee from '../Marquee';

const awards = [
  { title: 'Site Of The Day', category: 'Product Design', logo: '🏆' },
  { title: 'Digital Excellence', category: 'Product Design', logo: '⭐' },
  { title: 'Creative Agency', category: 'Product Design', logo: '🎨' },
  { title: 'Innovative Design', category: 'Product Design', logo: '💡' },
  { title: 'Top Branding', category: 'Product Design', logo: '🏅' },
  { title: 'Web Innovation', category: 'Product Design', logo: '🌐' },
];

const Awards = () => {
  return (
    <section className="py-12 bg-foreground text-background overflow-hidden">
      <Marquee className="py-6" speed={35}>
        {awards.map((award, index) => (
          <div key={index} className="flex items-center gap-8 px-8">
            <div className="flex items-center gap-4">
              <span className="text-3xl">{award.logo}</span>
              <div>
                <h3 className="text-lg font-semibold">{award.title}</h3>
                <p className="text-sm text-background/60">{award.category}</p>
              </div>
            </div>
            <div className="w-px h-12 bg-background/20" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Awards;
