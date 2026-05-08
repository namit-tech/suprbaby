import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import {
  HiArrowLeft,
  HiArrowRight,
  HiCheck,
  HiShoppingBag,
  HiLocationMarker,
  HiCreditCard,
  HiPlus,
  HiMinus,
  HiTrash,
  HiShieldCheck,
  HiUser,
} from 'react-icons/hi';
import { useCart } from '../context/CartContext';
import { orderService } from '../services/api';

const STEPS = [
  { id: 1, label: 'Order Review', icon: HiShoppingBag },
  { id: 2, label: 'Delivery', icon: HiLocationMarker },
  { id: 3, label: 'Payment', icon: HiCreditCard },
];

// Step progress bar component
const StepIndicator = ({ currentStep }) => (
  <div className="flex items-center justify-center gap-0 w-full max-w-md mx-auto mb-8 sm:mb-12">
    {STEPS.map((step, index) => {
      const isActive = currentStep === step.id;
      const isCompleted = currentStep > step.id;
      const StepIcon = step.icon;

      return (
        <div key={step.id} className="flex items-center flex-1 last:flex-initial">
          <div className="flex flex-col items-center relative">
            <motion.div
              animate={{
                scale: isActive ? 1.1 : 1,
                backgroundColor: isActive || isCompleted ? '#b85e43' : 'transparent',
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                isActive || isCompleted
                  ? 'border-primary shadow-[0_6px_20px_rgba(184,94,67,0.35)]'
                  : 'border-primary/25'
              }`}
            >
              {isCompleted ? (
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <HiCheck className="text-secondary text-lg sm:text-xl" />
                </motion.div>
              ) : (
                <StepIcon
                  className={`text-lg sm:text-xl transition-colors duration-500 ${
                    isActive ? 'text-secondary' : 'text-primary/30'
                  }`}
                />
              )}
            </motion.div>
            <span
              className={`absolute -bottom-6 text-[10px] sm:text-xs font-bold whitespace-nowrap transition-all duration-500 ${
                isActive || isCompleted ? 'text-primary' : 'text-primary/30'
              }`}
            >
              {step.label}
            </span>
          </div>

          {/* Connector Line */}
          {index < STEPS.length - 1 && (
            <div className="flex-1 h-0.5 mx-2 sm:mx-3 bg-primary/15 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: isCompleted ? '100%' : '0%' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-primary rounded-full"
              />
            </div>
          )}
        </div>
      );
    })}
  </div>
);

// Slide animation variants
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};

// ===== STEP 1: ORDER REVIEW =====
const OrderReviewStep = ({ onNext }) => {
  const { items, subtotal, shipping, total, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <HiShoppingBag className="text-primary/40 text-4xl" />
        </div>
        <h3 className="text-primary font-bold text-xl mb-2 font-primary">No items in cart</h3>
        <p className="text-primary/60 font-secondary text-sm mb-6 max-w-xs">
          Add some products to your cart before checking out.
        </p>
        <Link
          to="/shop"
          className="bg-primary text-secondary font-bold text-sm px-6 py-3 rounded-xl transition-all duration-700 hover:opacity-90 inline-flex items-center gap-2"
        >
          Browse Products <HiArrowRight />
        </Link>
      </motion.div>
    );
  }

  return (
    <div>
      <h2 className="text-primary text-2xl sm:text-3xl font-black font-primary mb-6">
        Review Your Order
      </h2>

      {/* Product Cards */}
      <div className="space-y-4 mb-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-4 sm:gap-6 p-4 sm:p-5 bg-primary/5 rounded-2xl border border-primary/10 relative group"
          >
            {/* Image */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-primary overflow-hidden flex-shrink-0">
              {item.overlayImage ? (
                <img src={item.overlayImage} alt={item.name} className="w-full h-full object-contain p-1.5" />
              ) : (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: item.imagePosition || 'center' }}
                />
              )}
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div>
                <h4 className="text-primary font-bold text-base sm:text-lg font-primary leading-tight mb-0.5">
                  {item.name}
                </h4>
                <p className="text-primary/50 font-secondary text-xs sm:text-sm">{item.description}</p>
                <p className="text-primary/40 font-secondary text-xs mt-0.5">₹{item.price} each</p>
              </div>

              <div className="flex items-center justify-between mt-3">
                {/* Quantity */}
                <div className="flex items-center gap-0 border-2 border-primary/20 rounded-full overflow-hidden">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-9 h-9 flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-all duration-300"
                  >
                    <HiMinus size={14} />
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-primary font-primary">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-all duration-300"
                  >
                    <HiPlus size={14} />
                  </button>
                </div>

                <span className="text-primary font-extrabold text-lg sm:text-xl font-secondary">
                  ₹{item.price * item.quantity}
                </span>
              </div>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeItem(item.id)}
              className="absolute top-3 right-3 text-primary/20 hover:text-red-500 transition-colors p-1.5 rounded-full hover:bg-red-50"
              aria-label="Remove item"
            >
              <HiTrash size={16} />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Order Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-primary rounded-2xl p-6 text-secondary space-y-3"
      >
        <h3 className="font-bold text-lg font-primary mb-3">Order Summary</h3>
        <div className="flex justify-between text-sm font-secondary opacity-80">
          <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between text-sm font-secondary opacity-80">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
        </div>
        {shipping > 0 && (
          <p className="text-xs opacity-50 font-secondary">
            Add ₹{299 - subtotal} more for free shipping
          </p>
        )}
        <div className="border-t border-secondary/20 pt-3 flex justify-between font-black text-xl">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </motion.div>

      {/* Continue */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => navigate('/shop')}
          className="flex-1 sm:flex-none border-2 border-primary/20 text-primary font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-700 hover:border-primary/40 flex items-center justify-center gap-2"
        >
          <HiArrowLeft /> Continue Shopping
        </button>
        <button
          onClick={onNext}
          className="flex-1 bg-primary text-secondary font-black text-base px-8 py-3.5 rounded-xl transition-all duration-700 ease-in-out hover:opacity-90 hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(184,94,67,0.3)] flex items-center justify-center gap-3 active:scale-[0.98]"
        >
          Continue to Delivery <HiArrowRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

// ===== STEP 2: DELIVERY ADDRESS =====
const DeliveryStep = ({ onNext, onBack, address, setAddress }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!address.fullName?.trim()) newErrors.fullName = 'Full name is required';
    if (!address.phone?.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(address.phone.trim())) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!address.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(address.email.trim())) newErrors.email = 'Enter a valid email';
    if (!address.address?.trim()) newErrors.address = 'Address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onNext();
  };

  const inputClasses = (field) =>
    `w-full bg-white border-2 ${
      errors[field] ? 'border-red-400' : 'border-primary/15 focus:border-primary/40'
    } rounded-xl px-4 py-3.5 text-primary text-sm font-secondary font-medium transition-all duration-500 outline-none placeholder:text-primary/30`;

  const handleChange = (field) => (e) => {
    setAddress((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div>
      <h2 className="text-primary text-2xl sm:text-3xl font-black font-primary mb-2">
        Delivery Details
      </h2>
      <p className="text-primary/50 font-secondary text-sm mb-8">
        Where should we send your order?
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Personal Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <HiUser className="text-primary/40" />
            <span className="text-primary/60 font-bold text-xs uppercase tracking-widest">
              Your Details
            </span>
          </div>

          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={address.fullName || ''}
              onChange={handleChange('fullName')}
              className={inputClasses('fullName')}
            />
            {errors.fullName && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs mt-1 font-secondary">
                {errors.fullName}
              </motion.p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={address.email || ''}
                onChange={handleChange('email')}
                className={inputClasses('email')}
              />
              {errors.email && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs mt-1 font-secondary">
                  {errors.email}
                </motion.p>
              )}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={address.phone || ''}
                onChange={handleChange('phone')}
                maxLength={10}
                className={inputClasses('phone')}
              />
              {errors.phone && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs mt-1 font-secondary">
                  {errors.phone}
                </motion.p>
              )}
            </div>
          </div>

          <div>
            <textarea
              placeholder="Complete Address (House No, Street, City, State, PIN Code)"
              value={address.address || ''}
              onChange={handleChange('address')}
              rows={3}
              className={`${inputClasses('address')} resize-none`}
            />
            {errors.address && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs mt-1 font-secondary">
                {errors.address}
              </motion.p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 sm:flex-none border-2 border-primary/20 text-primary font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-700 hover:border-primary/40 flex items-center justify-center gap-2"
          >
            <HiArrowLeft /> Back
          </button>
          <button
            type="submit"
            className="flex-1 bg-primary text-secondary font-black text-base px-8 py-3.5 rounded-xl transition-all duration-700 ease-in-out hover:opacity-90 hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(184,94,67,0.3)] flex items-center justify-center gap-3 active:scale-[0.98]"
          >
            Continue to Payment <HiArrowRight className="text-lg" />
          </button>
        </div>
      </form>
    </div>
  );
};

// Generate a unique order ID
const generateOrderId = () => {
  const now = new Date();
  const date = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  const seq = String(Math.floor(10000 + Math.random() * 90000));
  return `SPRB-${date}-${seq}`;
};

// ===== STEP 3: PAYMENT =====
const PaymentStep = ({ onBack, address }) => {
  const { items, subtotal, shipping, total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId] = useState(() => generateOrderId());
  const [orderDate] = useState(() => new Date());
  const navigate = useNavigate();

  const handleConfirmPayment = async () => {
    setIsProcessing(true);
    try {
      const orderData = {
        orderId,
        customer: {
          fullName: address.fullName,
          email: address.email,
          phone: address.phone,
          address: address.address
        },
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          image: item.image
        })),
        subtotal,
        shipping,
        total
      };

      await orderService.create(orderData);
      setIsProcessing(false);
      setOrderPlaced(true);
    } catch (error) {
      console.error('Order submission failed:', error);
      setIsProcessing(false);
      alert('Something went wrong while placing your order. Please try again.');
    }
  };

  const formattedDate = orderDate.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const formattedTime = orderDate.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  // ===== ORDER CONFIRMED SCREEN =====
  if (orderPlaced) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-8"
      >
        {/* Success Icon */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5"
          >
            <HiCheck className="text-green-600 text-3xl" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-primary text-2xl sm:text-3xl font-black font-primary mb-1"
          >
            Order Submitted!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-primary/50 font-secondary text-sm"
          >
            Your order will be confirmed after payment verification
          </motion.p>
        </div>

        {/* Order Receipt Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white rounded-2xl border-2 border-primary/10 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] mb-6"
        >
          {/* Receipt Header */}
          <div className="bg-primary px-6 py-4 text-center">
            <p className="text-secondary/60 font-secondary text-[10px] uppercase tracking-[0.3em] mb-1">
              Order Confirmation
            </p>
            <p className="text-secondary font-black text-lg font-primary tracking-wider">
              {orderId}
            </p>
          </div>

          {/* Receipt Body */}
          <div className="px-6 py-5 space-y-4">
            {/* Date & Time */}
            <div className="flex justify-between text-xs font-secondary text-primary/50 border-b border-dashed border-primary/10 pb-3">
              <span>Date: {formattedDate}</span>
              <span>Time: {formattedTime}</span>
            </div>

            {/* Items */}
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm font-secondary text-primary/80">
                <span>{item.name} × {item.quantity}</span>
                <span className="font-semibold">₹{item.price * item.quantity}</span>
              </div>
            ))}

            <div className="border-t border-dashed border-primary/10 pt-3 space-y-1.5">
              <div className="flex justify-between text-xs font-secondary text-primary/50">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-xs font-secondary text-primary/50">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
              </div>
            </div>

            <div className="border-t-2 border-primary/10 pt-3 flex justify-between font-black text-lg text-primary">
              <span>Total Paid</span>
              <span>₹{total}</span>
            </div>

            {/* Delivery Info */}
            <div className="bg-primary/5 rounded-xl p-3.5 mt-2">
              <p className="text-primary/40 font-bold text-[10px] uppercase tracking-widest mb-1.5">Ship To</p>
              <p className="text-primary font-bold text-xs font-primary">{address.fullName}</p>
              <p className="text-primary/60 font-secondary text-[11px] leading-relaxed mt-0.5">{address.address}</p>
              <p className="text-primary/40 font-secondary text-[11px] mt-1">📞 {address.phone}</p>
            </div>

            {/* Payment Status */}
            <div className="flex items-center gap-2 bg-amber-50 rounded-xl p-3 border border-amber-200/50">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <p className="text-amber-700 font-secondary text-xs font-medium">
                Payment verification pending — your order will be confirmed shortly
              </p>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-3"
        >
          <button
            onClick={() => {
              clearCart();
              navigate('/');
            }}
            className="flex-1 bg-primary text-secondary font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-700 hover:opacity-90 flex items-center justify-center gap-2"
          >
            Back to Home <HiArrowRight />
          </button>
        </motion.div>
      </motion.div>
    );
  }

  // ===== PAYMENT SCREEN WITH QR =====
  return (
    <div>
      <h2 className="text-primary text-2xl sm:text-3xl font-black font-primary mb-2">
        Scan & Pay
      </h2>
      <p className="text-primary/50 font-secondary text-sm mb-6">
        Scan the QR code below to complete your payment
      </p>

      {/* Order ID Banner */}
      <div className="flex items-center justify-between bg-primary/5 rounded-xl px-4 py-3 border border-primary/10 mb-6">
        <div>
          <p className="text-primary/40 font-bold text-[10px] uppercase tracking-widest">Order ID</p>
          <p className="text-primary font-black text-sm font-primary tracking-wider">{orderId}</p>
        </div>
        <div className="text-right">
          <p className="text-primary/40 font-bold text-[10px] uppercase tracking-widest">Amount</p>
          <p className="text-primary font-black text-lg font-primary">₹{total}</p>
        </div>
      </div>

      {/* QR Code Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-2xl border-2 border-primary/10 p-6 sm:p-8 mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      >
        <div className="flex flex-col items-center">
          {/* QR Image */}
          <div className="w-full h-[24rem] sm:w-[32rem] sm:h-[32rem] rounded-2xl overflow-hidden border-2 border-primary/10 mb-5 bg-white p-2">
            <img
              src="/images/qr.jpeg"
              alt="Payment QR Code"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Amount Badge */}
          <div className="bg-primary text-secondary px-6 py-2.5 rounded-full font-black text-lg font-primary mb-4 shadow-[0_6px_20px_rgba(184,94,67,0.3)]">
            Pay ₹{total}
          </div>

          {/* Instructions */}
          <div className="text-center space-y-2 w-full max-w-xs">
            <div className="flex items-start gap-3 text-left">
              <span className="text-primary font-black text-xs bg-primary/10 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <p className="text-primary/70 font-secondary text-xs">Open any UPI app (Google Pay, PhonePe, Paytm)</p>
            </div>
            <div className="flex items-start gap-3 text-left">
              <span className="text-primary font-black text-xs bg-primary/10 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <p className="text-primary/70 font-secondary text-xs">Scan the QR code and pay <span className="font-bold text-primary">₹{total}</span></p>
            </div>
            <div className="flex items-start gap-3 text-left">
              <span className="text-primary font-black text-xs bg-primary/10 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <p className="text-primary/70 font-secondary text-xs">After payment, tap <span className="font-bold text-primary">"I've Completed Payment"</span> below</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Order Summary (Compact) */}
      <div className="bg-primary rounded-2xl p-5 text-secondary space-y-2 mb-6">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-bold text-sm font-primary">Order Summary</h3>
          <span className="text-secondary/50 font-secondary text-[10px] tracking-wider">{orderId}</span>
        </div>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-xs font-secondary opacity-80">
            <span>{item.name} × {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="border-t border-secondary/20 pt-2 flex justify-between text-xs font-secondary opacity-70">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
        </div>
        <div className="border-t border-secondary/20 pt-2 flex justify-between font-black text-base">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      {/* Security & Trust */}
      <div className="flex items-center gap-2 justify-center text-primary/40 text-xs font-secondary mb-6">
        <HiShieldCheck className="text-lg" />
        <span>Secure UPI payment · Order ID: {orderId}</span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 sm:flex-none border-2 border-primary/20 text-primary font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-700 hover:border-primary/40 flex items-center justify-center gap-2"
        >
          <HiArrowLeft /> Back
        </button>
        <button
          onClick={handleConfirmPayment}
          disabled={isProcessing}
          className="flex-1 bg-primary text-secondary font-black text-base px-8 py-4 rounded-xl transition-all duration-700 ease-in-out hover:opacity-90 hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(184,94,67,0.3)] flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {isProcessing ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 border-2 border-secondary/30 border-t-secondary rounded-full"
              />
              Verifying...
            </>
          ) : (
            <>
              I've Completed Payment <HiCheck className="text-lg" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// ===== MAIN CHECKOUT PAGE =====
const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [address, setAddress] = useState({});
  const { items } = useCart();

  const goNext = () => {
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const goBack = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="bg-secondary min-h-screen pt-20 sm:pt-24 pb-12">
      {/* Decorative background elements */}
      <div className="fixed top-0 right-0 w-[50vw] h-[50vw] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, #b85e43 0%, transparent 70%)' }} />
      <div className="fixed bottom-0 left-0 w-[40vw] h-[40vw] opacity-[0.02] blur-[80px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, #b85e43 0%, transparent 70%)' }} />

      <div className="max-w-2xl mx-auto px-5 relative z-10">
        {/* Step Indicator */}
        <StepIndicator currentStep={currentStep} />

        {/* Step Content */}
        <div className="mt-12 relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {currentStep === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <OrderReviewStep onNext={goNext} />
              </motion.div>
            )}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <DeliveryStep onNext={goNext} onBack={goBack} address={address} setAddress={setAddress} />
              </motion.div>
            )}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <PaymentStep onBack={goBack} address={address} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
