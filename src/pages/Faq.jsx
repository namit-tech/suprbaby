import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';
import ScrollReveal from '../components/ScrollReveal';

const faqs = [
  {
    question: "1. What is the best rolling paper for beginners?",
    answer: "Pre-rolled cones are the easiest option, as they eliminate the need for manual rolling."
  },
  {
    question: "2. Are unbleached rolling papers better?",
    answer: "Yes, unbleached papers are free from chemicals and provide a cleaner, more natural smoke."
  },
  {
    question: "3. How can I store rolling papers to keep them fresh?",
    answer: "Keep them in a dry place, away from moisture and direct sunlight, to prevent warping or tearing."
  },
  {
    question: "4. Do you offer the finest quality rolling papers?",
    answer: "Yes, Suprbaby rolling papers are engineered to be the finest quality. This guarantees a premium, slow, and perfectly even burn without any harsh paper taste."
  },
  {
    question: "5. Do rolling papers affect the taste of the smoke?",
    answer: "Yes, the material and thickness of the paper can influence the taste. Hemp and rice papers tend to provide a cleaner taste, while flavoured papers add an extra element to your smoking experience."
  },
  {
    question: "6. What is the difference between rice, hemp, and wood pulp rolling papers?",
    answer: "Rice papers are ultra-thin and burn slowly, giving a smooth smoking experience. Hemp papers are slightly thicker, burn evenly, and have a mild natural flavour."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // SEO Schema Markup (JSON-LD)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question.replace(/^\d+\.\s*/, ''),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="bg-secondary min-h-screen pt-32 pb-24 px-5 relative overflow-hidden text-primary">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none text-[25vw] font-black font-primary text-primary/50 mt-10 -mr-10 transform rotate-12 z-0 hidden lg:block">
        FAQ
      </div>

      {/* Inject SEO Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-20">
            <p className="text-primary opacity-70 font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4">
              Learn More
            </p>
            <h1 className="text-primary text-4xl sm:text-5xl lg:text-6xl font-black font-primary leading-tight">
              Frequently Asked Questions
            </h1>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div 
                className={`border-2 rounded-2xl overflow-hidden transition-colors duration-700 ease-in-out ${
                  openIndex === index ? 'bg-primary border-primary shadow-xl' : 'bg-transparent border-primary/20 hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 sm:px-8 sm:py-8 flex justify-between items-center text-left focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <h3 className={`font-bold text-lg md:text-xl pr-6 transition-colors duration-700 font-primary leading-snug ${
                    openIndex === index ? 'text-secondary' : 'text-primary'
                  }`}>
                    {faq.question}
                  </h3>
                  <span className={`flex-shrink-0 transition-transform duration-700 ${openIndex === index ? 'rotate-180 text-secondary' : 'text-primary'}`}>
                    {openIndex === index ? <HiMinus size={24} /> : <HiPlus size={24} />}
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className={`px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-base md:text-lg leading-relaxed font-secondary ${
                    openIndex === index ? 'text-secondary/80' : 'text-primary/80'
                  }`}>
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Faq;
