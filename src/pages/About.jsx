import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  const stats = [
    { value: '2023', label: 'Founded' },
    { value: '100%', label: 'Unbleached' },
    { value: '50K+', label: 'Happy Smokers' },
    { value: 'ZERO', label: 'Chemicals' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* ===== HERO — PRIMARY BG ===== */}
      <section className="bg-primary min-h-[70svh] flex items-center pt-28 pb-12 px-5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <ScrollReveal>
            <div className='px-5'>
              <p className="text-secondary opacity-70 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
                Our Story
              </p>
              <h1 className="text-secondary text-3xl md:text-6xl font-black leading-[1.1] mb-6">
                Born from a love of doing things right.
              </h1>
              <p className="text-secondary opacity-80 text-lg leading-relaxed">
                Suprbaby started with a simple idea — rolling papers shouldn't just be functional, they should be an experience. Every detail, from the paper thickness to the packaging, is designed to slow you down and help you savour the moment.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex justify-center relative">
              <img
                src="/images/ourstory.png"
                alt="Suprbaby brand showcase"
                className="w-full max-w-lg"
              />
              {/* Text Overlay */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full z-20">
                 <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                      hidden: {},
                      visible: { 
                        transition: { 
                          staggerChildren: 0.15, 
                          delayChildren: 0.2 
                        } 
                      }
                    }}
                 >
                    <h3 className="text-left px-8 text-4xl sm:text-5xl font-primary text-secondary font-extrabold tracking-widest leading-[1]">
                      {[
                        { text: 'I', primary: false },
                        { text: 'See', primary: false },
                        { text: 'You', primary: true },
                      ].map((item, i) => (
                        <span key={i} className="block overflow-hidden pb-1">
                          <motion.span
                            variants={{
                              hidden: { opacity: 0, x: -40, filter: 'blur(12px)' },
                              visible: { 
                                opacity: 1, 
                                x: 0, 
                                filter: 'blur(0px)',
                                transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
                              }
                            }}
                            className={`inline-block ${item.primary ? 'text-primary' : ''}`}
                          >
                            {item.text}
                          </motion.span>
                        </span>
                      ))}
                    </h3>
                 </motion.div>
              </div>

              {/* Sparkle Overlay */}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== STATS — SECONDARY BG ===== */}
      <section className="bg-secondary py-16 px-5 relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.12}>
              <div className="text-center">
                <p className="text-primary text-4xl md:text-5xl font-black mb-2">
                  {stat.value}
                </p>
                <p className="text-primary opacity-70 text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== PHILOSOPHY — PRIMARY BG ===== */}
      <section className="bg-primary px-5 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

          <ScrollReveal>
            <div>
              <p className="text-secondary opacity-70 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
                Our Philosophy
              </p>
              <h2 className="text-secondary text-3xl md:text-4xl font-black mb-6 leading-[1.1]">
                Slow & Smooth <br /> isn't just a tagline.
              </h2>
              <p className="text-secondary opacity-80 text-base leading-relaxed mb-6">
                It's our design principle. We believe that the best things in life shouldn't be rushed. Our papers burn 40% slower than conventional brands because we use a proprietary blend of unbleached plant fibers — no accelerants, no chemicals, no shortcuts.
              </p>
              <p className="text-secondary opacity-80 text-base leading-relaxed">
                Every booklet is hand-inspected for consistency. Every pack is sealed to preserve freshness. Every experience is crafted to be effortlessly smooth.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="flex justify-center relative overflow-hidden mt-8">
              <img
                src="/images/ourphilosphy.png"
                alt="Rolling paper close-up detail"
                className="w-full max-w-lg"
              />
              {/* Text Overlay */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full z-20">
                 <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                      hidden: {},
                      visible: { 
                        transition: { 
                          staggerChildren: 0.15, 
                          delayChildren: 0.2 
                        } 
                      }
                    }}
                 >
                    <h3 className="text-left px-8 text-4xl sm:text-5xl font-primary text-secondary font-extrabold tracking-widest leading-[1]">
                      {[
                        { text: 'Just', primary: false },
                        { text: 'For', primary: false },
                        { text: 'You', primary: true },
                      ].map((item, i) => (
                        <span key={i} className="block overflow-hidden pb-1">
                          <motion.span
                            variants={{
                              hidden: { opacity: 0, x: -40, filter: 'blur(12px)' },
                              visible: { 
                                opacity: 1, 
                                x: 0, 
                                filter: 'blur(0px)',
                                transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
                              }
                            }}
                            className={`inline-block ${item.primary ? 'text-primary' : ''}`}
                          >
                            {item.text}
                          </motion.span>
                        </span>
                      ))}
                    </h3>
                 </motion.div>
              </div>

              {/* Sparkle Overlay */}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SUSTAINABILITY — SECONDARY BG ===== */}
      <section className="bg-secondary py-20 px-5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary opacity-70 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
                Responsibility
              </p>
              <h2 className="text-primary text-[clamp(2rem,6svh,3.5rem)] md:text-4xl font-black leading-[1.1]">
                Better for You. Better for the Planet.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: 'Clean Materials',
                desc: 'Our papers are made from 100% unbleached plant fibres. No chlorine, no dyes, no mysterious additives. What you see is what you get — pure, honest paper.',
              },
              {
                title: 'Minimal Packaging',
                desc: "We don't believe in excess. Our packaging is made from recycled kraft paper and uses soy-based inks. No plastic wraps, no unnecessary layers — just enough to protect and present.",
              },
              {
                title: 'Local Manufacturing',
                desc: 'Proudly made in India. We partner with local manufacturers who share our values, keeping our carbon footprint low and our community connections strong.',
              },
              {
                title: 'Giving Back',
                desc: 'A portion of every sale goes toward environmental restoration projects across India. When you choose Suprbaby, you choose a brand that cares beyond the product.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.12}>
                <div className="border-2 border-primary rounded-2xl p-6 md:p-8 transition-all duration-700 ease-in-out hover:bg-primary group">
                  <h3 className="text-primary text-xl font-bold mb-3 transition-all duration-700 ease-in-out group-hover:text-secondary">
                    {item.title}
                  </h3>
                  <p className="text-primary opacity-80 text-base leading-relaxed transition-all duration-700 ease-in-out group-hover:text-secondary group-hover:opacity-80">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA — PRIMARY BG ===== */}
      <section className="bg-primary py-24 px-5 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-secondary text-[clamp(2rem,7svh,4.5rem)] md:text-5xl font-black mb-6 leading-[1.1]">
              Ready to experience the difference?
            </h2>
            <p className="text-secondary opacity-80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Pick up your first pack and feel what slow & smooth really means.
            </p>
            <Link
              to="/shop"
              className="bg-secondary text-primary font-bold text-base px-8 py-4 rounded-xl transition-all duration-700 ease-in-out hover:bg-primary hover:text-secondary border-2 border-secondary min-h-[44px] inline-flex items-center gap-2"
            >
              Shop Now <HiArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
