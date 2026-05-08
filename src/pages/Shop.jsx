import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import ProductCard from '../components/ProductCard';
import products, { categories } from '../data/products';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-secondary min-h-screen pt-28 pb-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary opacity-70 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Browse
            </p>
            <h1 className="text-primary text-4xl md:text-6xl font-black mb-4">
              Our Products
            </h1>
            <p className="text-primary opacity-70 text-base max-w-xl mx-auto leading-relaxed">
              Every Suprbaby product is crafted with care — slow-burning, unbleached, and built for those who like it smooth.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`font-bold text-sm px-6 py-3 rounded-xl transition-all duration-700 ease-in-out min-h-[44px] border-2 border-primary ${
                  activeCategory === cat.key
                    ? 'bg-primary text-secondary'
                    : 'bg-secondary text-primary hover:bg-primary hover:text-secondary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center py-20"
          >
            <p className="text-primary opacity-60 text-xl font-semibold">
              No products in this category yet.
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="mt-16 border-2 border-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-primary text-2xl md:text-3xl font-bold mb-3">
              Can't decide?
            </h3>
            <p className="text-primary opacity-70 text-base mb-6 max-w-md mx-auto leading-relaxed">
              Start with our Classic Rolling Papers — our bestseller and the perfect introduction to Suprbaby.
            </p>
            <button
              onClick={() => setActiveCategory('papers')}
              className="bg-primary text-secondary font-bold text-base px-8 py-4 rounded-xl transition-all duration-700 ease-in-out hover:bg-secondary hover:text-primary border-2 border-primary min-h-[44px]"
            >
              View Rolling Papers
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Shop;
