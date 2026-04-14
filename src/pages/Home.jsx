import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiStar, HiSparkles } from 'react-icons/hi';
import { FaCannabis } from 'react-icons/fa';
import { FaFire, FaInfinity } from 'react-icons/fa6';
import { TbCut, TbNumber0, TbZzz } from 'react-icons/tb';
import ScrollReveal from '../components/ScrollReveal';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import creamComboImg from '../../public/images/weloverolling.png';
import productBoxImg from '../../assets/Untitled design (9).png';

const SlowBurnIcon = ({ className }) => (
  <div className={`relative inline-flex items-center justify-center ${className}`}>
    <FaFire className="w-[1em] h-[1em]" />
    <TbZzz className="absolute -top-[50%] -right-[30%] text-[0.6em] rotate-[0deg] opacity-90 delay-100" />
  </div>
);

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  const reviews = [
    {
      id: 1,
      name: 'Aman S.',
      text: 'Easily the smoothest papers I’ve ever rolled. No harsh aftertaste, just pure flavor. A new staple in my ritual.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Karan M.',
      text: 'The heavy-duty filter tips are a gamechanger. They hold structure perfectly, are super easy to fold, and never get soggy.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Rohan D.',
      text: 'Love the eco-conscious approach. You can actually feel the premium quality the second you hold the pack.',
      rating: 5,
    },
  ];

  const values = [
    {
      icon: SlowBurnIcon,
      title: 'Slow Burn',
      desc: 'Taste only your herbs with a session that lasts 25% longer. Our ultra-thin, unbleached papers and natural gum ensure even, slow-burning combustion with zero paper aftertaste and minimal ash.',
    },
    {
      icon: FaInfinity,
      title: 'Smooth Flow',
      desc: 'Enjoy a clean, cooled draw without the frustration of soggy or collapsing tips. Perforated for a perfect "W" fold, our wide virgin kraft tips provide a sturdy structure that never fails.',
    },
    {
      icon: HiSparkles,
      title: 'Smart Pack',
      desc: 'Keep your gear fresh and organized in any pocket or bag. Our integrated connoisseur booklets protect your papers from creasing and matching tips from crushing for a professional ritual on the go.',
    },
  ];

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="bg-primary h-[100svh] w-full flex flex-col justify-center px-5 pt-[14svh] pb-[4svh] sm:pt-24 sm:pb-8 lg:pt-[8vh] relative overflow-hidden">

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center flex-1">
          {/* Text */}
          <div className="flex flex-col h-full lg:text-left">
            <div className="flex-1 flex flex-col justify-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                  },
                },
              }}
              className="text-left text-secondary font-primary text-[clamp(2.7rem,10.8svh,4rem)] sm:text-[4rem] md:text-[6vh] lg:text-[8.5vh] xl:text-[10vh] font-black leading-[1] mb-[2.5svh] md:mb-[3vh]"
            >
              {['World\'s', 'Finest', 'Quality', 'Rolling', 'Papers'].map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
                    }
                  }}
                  className="block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-secondary text-left text-[clamp(0.85rem,2svh,1rem)] sm:text-base md:text-lg lg:text-xl max-w-lg mb-[3.5svh] md:mb-[4vh] leading-snug md:leading-relaxed font-secondary italic tracking-widest opacity-90"
            >
              With Love from Spain to India.
            </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-[2svh] sm:gap-4 justify-start items-center w-[85%] sm:w-[75%] md:w-[65%] lg:w-full lg:max-w-md mx-auto lg:mx-0 mt-auto"
            >
              <Link
                to="/shop"
                className="w-full bg-secondary text-primary font-bold text-sm sm:text-base px-2 sm:px-8 py-[1.3svh] sm:py-4 rounded-full transition-all duration-1200 ease-premium hover:bg-primary hover:text-secondary border-2 border-secondary min-h-[40px] sm:min-h-[44px] flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap"
              >
                Explore <HiArrowRight />
              </Link>
              <Link
                to="/about"
                className="w-full border-2 border-secondary text-secondary font-bold text-sm sm:text-base px-2 sm:px-8 py-[1.3svh] sm:py-4 rounded-full transition-all duration-1200 ease-premium hover:bg-secondary hover:text-primary min-h-[40px] sm:min-h-[44px] flex items-center justify-center text-center whitespace-nowrap"
              >
                Our Story
              </Link>
            </motion.div>
          </div>

          {/* ===== Hero Abstract Visual (Desktop Only) ===== */}
          <div className="hidden lg:flex items-center justify-center relative w-full h-full">
            
            {/* Soft Ambient Aurora/Bloom */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[40vh] h-[40vh] rounded-full bg-secondary blur-[80px] pointer-events-none"
            />

            {/* Rotating Editorial Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="relative w-[35vh] h-[35vh] xl:w-[45vh] xl:h-[45vh]"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
                  <path
                    id="textPath"
                    d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                    fill="transparent"
                  />
                  <text className="text-[15.5px] font-bold font-primary tracking-[0.22em] uppercase fill-secondary/90">
                    <textPath href="#textPath" startOffset="0%">
                       SUPRBABY KINGS • SLOW & SMOOTH • 100% NATURAL • 
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              
              {/* Center Icon */}
              <div className="absolute text-secondary text-[8vh] xl:text-[10vh] drop-shadow-md">
                <FaCannabis />
              </div>

            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== SECTION 2 — FULL SCREEN HERO (Mobile) ===== */}
      <section className="md:hidden w-full relative overflow-hidden">
        {/* Full Section Background Image */}
        <div className="w-full relative z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            viewport={{ once: true }}
            src={creamComboImg}
            alt="Suprbaby Forest Vibe"
            className="w-full h-auto object-contain"
            loading="eager"
          />
          {/* Top Tint Overlay behind text */}
          <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10" />
        </div>

        {/* Top Text Content */}
        <div className="absolute top-[10%] z-20 w-full px-6 text-secondary">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2,
                }
              }
            }}
          >
            <h3 className="text-left px-5 uppercase text-4xl md:text-5xl font-primary text-secondary font-extrabold tracking-widest leading-[1]">
              {[
                { text: 'We', primary: false },
                { text: 'Love', primary: true },
                { text: 'Rolling', primary: false },
                { text: 'Like', primary: false },
                { text: 'You', primary: false },
                { text: 'Do', primary: false }
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

      </section>

      <section className="bg-primary py-12 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] opacity-15 blur-[150px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, #B85E43 0%, transparent 70%)' }} />
        <div className="absolute bottom-[0%] right-[0%] w-[40vw] h-[40vw] opacity-10 blur-[120px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, #FFFFEA 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto relative z-10 px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-secondary opacity-70 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
                Our Collection
              </p>
              <h2 className="text-secondary text-4xl md:text-5xl font-black">
                Featured Products
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.15}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                to="/shop"
                className="bg-secondary text-primary font-bold text-base px-8 py-4 rounded-full transition-all duration-1200 ease-premium hover:bg-primary hover:text-secondary border-2 border-secondary min-h-[44px] inline-flex items-center gap-2"
              >
                View All Products <HiArrowRight />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BRAND VALUES ===== */}
      <section className="bg-secondary py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary opacity-70 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
                Why Suprbaby
              </p>
              <h2 className="text-primary text-4xl md:text-5xl font-black">
                The Anatomy of Perfection
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.15}>
                <div className="border-2 border-primary rounded-2xl p-8 text-center transition-all duration-1200 ease-premium hover:bg-primary hover:text-secondary group">
                  <value.icon className="text-primary text-4xl mx-auto mb-5 transition-all duration-1200 ease-premium group-hover:text-secondary" />
                  <h3 className="text-primary text-xl font-bold mb-3 transition-all duration-1200 ease-premium group-hover:text-secondary">
                    {value.title}
                  </h3>
                  <p className="text-primary opacity-80 text-base leading-relaxed transition-all duration-1200 ease-premium group-hover:text-secondary group-hover:opacity-80">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* How to Roll Steps — Marquee */}
          <ScrollReveal>
            <div className="mt-20">
              <h3 className="text-primary text-2xl md:text-3xl font-bold text-center mb-12">
                How to Roll — The Suprbaby Way
              </h3>
              <div className="overflow-hidden">
                <style>{`
                  @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  .marquee-track {
                    display: flex;
                    gap: 24px;
                    animation: marquee-scroll 35s linear infinite;
                    width: max-content;
                  }
                  .marquee-track:hover {
                    animation-play-state: paused;
                  }
                  .marquee-item {
                    flex-shrink: 0;
                    width: 150px;
                    height: 150px;
                  }
                  @media (min-width: 768px) {
                    .marquee-item {
                      width: 180px;
                      height: 180px;
                    }
                  }
                `}</style>
                <div className="marquee-track">
                  {[...Array(2)].map((_, dupeIdx) =>
                    [
                      { num: 1, label: 'Pick', file: 'one.png' },
                      { num: 2, label: 'Open', file: 'two (1).png' },
                      { num: 3, label: 'Fill', file: 'three.png' },
                      { num: 4, label: 'Tuck', file: 'four.png' },
                      { num: 5, label: 'Seal', file: 'five.png' },
                      { num: 6, label: 'Shape', file: 'six.png' },
                      { num: 7, label: 'Enjoy', file: 'seven.png' },
                    ].map((step) => (
                      <div key={`${dupeIdx}-${step.num}`} className="marquee-item">
                        <div className="bg-secondary overflow-hidden rounded-2xl group cursor-pointer transition-all duration-1200 ease-premium group-hover:scale-105 flex items-center justify-center p-4" style={{ width: 150, height: 150 }}>
                          <img
                            src={`/images/${step.file}`}
                            alt={`Step ${step.num}: ${step.label}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-secondary text-xs font-bold uppercase tracking-wider block text-center mt-3">
                          {step.num}. {step.label}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== COMMUNITY LOVE (REVIEWS) ===== */}
      <section className="bg-primary py-24 px-5 border-b-2 border-primary/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-secondary opacity-70 font-semibold uppercase tracking-[0.3em] text-sm mb-4">
                Community Love
              </p>
              <h2 className="text-secondary text-4xl md:text-5xl font-black font-primary">
                Don't Just Take Our Word For It
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.id} delay={i * 0.15}>
                <div className="bg-secondary text-primary border-2 border-primary p-8 rounded-2xl shadow-[15px_15px_40px_rgba(0,0,0,0.08)] relative transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[20px_20px_50px_rgba(0,0,0,0.12)] flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, idx) => (
                        <HiStar key={idx} className="text-primary text-xl opacity-90 transition-transform duration-1200 ease-premium group-hover:scale-110" style={{ transitionDelay: `${idx * 50}ms` }} />
                      ))}
                    </div>
                    <p className="font-secondary text-lg leading-relaxed mb-8 opacity-90 italic tracking-wide">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center font-bold font-primary text-primary opacity-90 text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <span className="font-bold font-primary tracking-widest uppercase text-sm opacity-90">{review.name}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="bg-secondary py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-primary text-3xl md:text-4xl font-black mb-4">
              Stay in the Loop
            </h2>
            <p className="text-primary opacity-80 text-base mb-8 leading-relaxed">
              Join the Suprbaby community. Get first access to drops, stories, and good vibes.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-primary text-secondary placeholder:text-secondary/60 border-2 border-primary rounded-full px-6 py-4 text-base font-medium focus:outline-none min-h-[44px] transition-all duration-1200 ease-premium"
              />
              <button
                type="submit"
                className="bg-primary text-secondary font-bold text-base px-8 py-4 rounded-full transition-all duration-1200 ease-premium hover:bg-secondary hover:text-primary border-2 border-primary min-h-[44px] whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
