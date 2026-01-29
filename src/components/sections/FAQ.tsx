import SectionTitle from '../SectionTitle';
import FAQAccordion from '../FAQAccordion';

const faqItems = [
  {
    question: 'What services does Arooth offer?',
    answer: 'Arooth provides end-to-end digital solutions, including web design, development, branding, digital marketing, UI/UX strategy, and SEO optimization — all tailored to help your business grow online.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Arooth provides end-to-end digital solutions, including web design, development, branding, digital marketing, UI/UX strategy, and SEO optimization — all tailored to help your business grow online.',
  },
  {
    question: 'Do you work with clients worldwide?',
    answer: 'Arooth provides end-to-end digital solutions, including web design, development, branding, digital marketing, UI/UX strategy, and SEO optimization — all tailored to help your business grow online.',
  },
  {
    question: 'How can we get started with Arooth?',
    answer: 'Arooth provides end-to-end digital solutions, including web design, development, branding, digital marketing, UI/UX strategy, and SEO optimization — all tailored to help your business grow online.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'Arooth provides end-to-end digital solutions, including web design, development, branding, digital marketing, UI/UX strategy, and SEO optimization — all tailored to help your business grow online.',
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <SectionTitle
          label="FAQ"
          title="Frequently Asked Questions."
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
