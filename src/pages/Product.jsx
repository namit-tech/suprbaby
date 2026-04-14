import { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowLeft, HiOutlineShoppingBag } from 'react-icons/hi';
import ScrollReveal from '../components/ScrollReveal';
import products, { categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const scrollRef = useRef(null);

  if (!product) {
    return (
      <div className="bg-secondary min-h-screen flex items-center justify-center text-primary px-5">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4 font-primary">Product Not Found</h1>
          <Link to="/shop" className="font-bold underline hover:opacity-80 transition-opacity">Return to Shop</Link>
        </div>
      </div>
    );
  }

  // Carousel images (Hardcoded as requested)
  const images = [
    '/images/descbg.png',
    '/images/descbg.png',
    '/images/descbg.png',
    '/images/descbg.png',
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      if (index !== activeImageIndex) {
        setActiveImageIndex(index);
      }
    }
  };

  const scrollToImage = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  // Related products
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);
  const categoryLabel = categories.find(c => c.key === product.category)?.label || product.category;

  return (
    <div className="bg-secondary relative overflow-hidden">
      
      {/* ===== SECTION 1: PRODUCT HERO ===== */}
      <section className="min-h-[100vh] lg:h-[100vh] w-full flex flex-col lg:flex-row relative">
        
        {/* LEFT/TOP PORTION: SCROLLABLE CAROUSEL */}
        <div 
          className="w-full h-[65vh] lg:h-[100vh] lg:w-1/2 bg-primary relative flex flex-col items-center justify-center z-10"
          style={{ 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          
          {/* Main Display Carousel (Scrollable) */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="relative z-20 w-full h-full flex items-center overflow-x-auto snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
          >
            {images.map((img, index) => (
              <div key={index} className="min-w-full h-full flex items-center justify-center snap-center">
                <img 
                  src={img} 
                  alt={`${product.name} ${index + 1}`} 
                  className="w-full h-full object-contain transition-transform duration-1000 ease-out hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>

          {/* CAROUSEL DOTS - Overlapping bottom */}
          <div className="flex gap-3 absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-30">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToImage(index)}
                className={`transition-all duration-500 rounded-full shadow-lg ${
                  activeImageIndex === index 
                    ? 'w-10 h-2 bg-secondary' 
                    : 'w-2 h-2 bg-secondary/40 hover:bg-secondary/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

        {/* RIGHT/BOTTOM PORTION: PRODUCT DETAILS */}
        <div className="w-full min-h-[30vh] lg:h-[100vh] lg:w-1/2 bg-primary px-5 py-5 sm:py-6 lg:px-16 lg:py-0 flex flex-col justify-between relative shadow-[-20px_0_50px_rgba(0,0,0,0.15)] z-20">
          
          <div className="absolute top-0 right-[-10%] opacity-[0.07] pointer-events-none text-[35vw] font-black font-primary text-secondary -mt-16 transform rotate-12 z-0 hidden lg:block">
            {product.name.split(' ')[0]}
          </div>

          <div className="flex flex-col justify-center flex-1 lg:pt-16 relative z-10 mb-4 lg:mb-0">
            <ScrollReveal>
              <p className="text-secondary opacity-70 font-semibold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-1.5 sm:mb-2">
                {categoryLabel}
              </p>
              
              <div className="flex justify-between items-start mb-2 sm:mb-4 lg:mb-8">
                <h1 className="text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-black font-primary leading-[0.95] pr-4">
                  {product.name}
                </h1>
                <span className="text-secondary font-black text-xl sm:text-3xl lg:text-4xl shrink-0 mt-1">
                  ₹{product.price}
                </span>
              </div>
              
              <div className="w-10 sm:w-16 h-1 bg-secondary/20 mb-3 sm:mb-6 rounded-full hidden lg:block"></div>
              
              <p className="text-secondary opacity-90 text-xs sm:text-sm lg:text-lg leading-snug lg:leading-relaxed mb-5 lg:mb-10 font-secondary italic line-clamp-3 lg:line-clamp-none max-w-lg">
                {product.description}
              </p>

              {/* Desktop specific features */}
              <div className="hidden lg:grid grid-cols-2 gap-8 pt-10 border-t border-secondary/15">
                <div>
                  <h4 className="text-secondary font-bold mb-1 text-lg">Slow Burn</h4>
                  <p className="text-secondary opacity-70 text-sm">Flawless watermark engineering.</p>
                </div>
                <div>
                  <h4 className="text-secondary font-bold mb-1 text-lg">100% Natural</h4>
                  <p className="text-secondary opacity-70 text-sm">Unbleached & chemical-free.</p>
                </div>
                <div className="mt-4">
                  <h4 className="text-secondary font-bold mb-1 text-lg">Premium Quality</h4>
                  <p className="text-secondary opacity-70 text-sm">Hand-picked natural fibers.</p>
                </div>
                <div className="mt-4">
                  <h4 className="text-secondary font-bold mb-1 text-lg">Eco-Friendly</h4>
                  <p className="text-secondary opacity-70 text-sm">Sustainable sourcing & production.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* CTA Section */}
          <ScrollReveal delay={0.2} className="shrink-0 pb-6 lg:pb-12 relative z-10">
            <button className="w-full bg-secondary text-primary font-black text-base lg:text-lg px-8 py-4 sm:py-5 rounded-xl lg:rounded-full transition-all duration-700 ease-premium hover:opacity-90 hover:-translate-y-1 shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center justify-center gap-3 active:scale-95">
              <HiOutlineShoppingBag className="text-xl lg:text-2xl" /> Add to Cart — ₹{product.price}
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 2: MORE CHOICES ===== */}
      {relatedProducts.length > 0 && (
         <section className="w-full bg-secondary py-20 px-5 relative z-10 border-t border-primary/10">
            <div className="max-w-7xl mx-auto w-full">
              <ScrollReveal>
                <div className="text-center mb-12 lg:mb-20">
                  <p className="text-primary opacity-70 font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm mb-2 sm:mb-4">
                    Keep it going
                  </p>
                  <h2 className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-primary">
                    More Smooth Choices
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((p, i) => (
                  <ScrollReveal key={p.id} delay={i * 0.15}>
                    <ProductCard product={p} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
         </section>
      )}

    </div>
  );
};

export default Product;
