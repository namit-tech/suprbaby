import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiPlus, HiMinus, HiTrash, HiArrowRight, HiShoppingBag } from 'react-icons/hi';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const {
    items,
    totalItems,
    subtotal,
    shipping,
    total,
    updateQuantity,
    removeItem,
    isDrawerOpen,
    closeDrawer,
  } = useCart();

  const navigate = useNavigate();

  const handleCheckout = () => {
    closeDrawer();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-full sm:w-[440px] bg-secondary z-[101] shadow-[-20px_0_60px_rgba(0,0,0,0.3)] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b-2 border-primary/10">
              <div className="flex items-center gap-3">
                <HiShoppingBag className="text-primary text-2xl" />
                <h2 className="text-primary font-black text-xl font-primary tracking-tight">
                  Your Cart
                </h2>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-primary text-secondary text-xs font-bold px-2.5 py-0.5 rounded-full"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </div>
              <button
                onClick={closeDrawer}
                className="text-primary hover:opacity-70 transition-opacity p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close cart"
              >
                <HiX size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <HiShoppingBag className="text-primary/40 text-4xl" />
                  </div>
                  <h3 className="text-primary font-bold text-lg mb-2 font-primary">
                    Your cart is empty
                  </h3>
                  <p className="text-primary/60 font-secondary text-sm mb-6">
                    Looks like you haven't added anything yet.
                  </p>
                  <button
                    onClick={() => {
                      closeDrawer();
                      navigate('/shop');
                    }}
                    className="bg-primary text-secondary font-bold text-sm px-6 py-3 rounded-xl transition-all duration-700 ease-in-out hover:opacity-90 flex items-center gap-2"
                  >
                    Browse Products <HiArrowRight />
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40, height: 0, marginBottom: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.05,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="flex gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10 relative group"
                      >
                        {/* Product Image */}
                        <div className="w-20 h-20 rounded-xl bg-primary overflow-hidden flex-shrink-0 relative">
                          {item.overlayImage ? (
                            <img
                              src={item.overlayImage}
                              alt={item.name}
                              className="w-full h-full object-contain p-1"
                            />
                          ) : (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              style={{ objectPosition: item.imagePosition || 'center' }}
                            />
                          )}
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-primary font-bold text-sm font-primary leading-tight mb-0.5 truncate">
                            {item.name}
                          </h4>
                          <p className="text-primary/60 font-secondary text-xs mb-2">
                            {item.description}
                          </p>

                          <div className="flex items-center justify-between">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-0 border-2 border-primary/20 rounded-full overflow-hidden">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-all duration-300"
                                aria-label="Decrease quantity"
                              >
                                <HiMinus size={14} />
                              </button>
                              <span className="w-8 text-center text-sm font-bold text-primary font-primary">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-all duration-300"
                                aria-label="Increase quantity"
                              >
                                <HiPlus size={14} />
                              </button>
                            </div>

                            {/* Price */}
                            <span className="text-primary font-extrabold text-base font-secondary">
                              ₹{item.price * item.quantity}
                            </span>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="absolute top-3 right-3 text-primary/30 hover:text-red-500 transition-colors p-1 opacity-0 group-hover:opacity-100"
                          aria-label="Remove item"
                        >
                          <HiTrash size={16} />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer — Order Summary & Checkout */}
            {items.length > 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border-t-2 border-primary/10 px-6 py-5 space-y-3"
              >
                <div className="flex justify-between text-sm text-primary/70 font-secondary">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm text-primary/70 font-secondary">
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-700">FREE</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-primary/50 font-secondary">
                    Free shipping on orders above ₹299
                  </p>
                )}
                <div className="flex justify-between text-primary font-black text-lg pt-2 border-t border-primary/10">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-primary text-secondary font-black text-base px-8 py-4 rounded-xl transition-all duration-700 ease-in-out hover:opacity-90 hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(184,94,67,0.3)] flex items-center justify-center gap-3 active:scale-[0.98] mt-2"
                >
                  Checkout <HiArrowRight className="text-lg" />
                </button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
