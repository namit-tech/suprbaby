import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AgeGate.css';

// Import the brand imagery
import bgImage from '../../assets/Untitled design (4)/2.png';
import logoCream from '../../assets/Suprbabycream.png';

const AgeGate = ({ onVerified }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  // Staggered reveal on mount
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    // Store age verification in localStorage
    localStorage.setItem('suprbaby_age_verified', 'true');
    localStorage.setItem('suprbaby_age_verified_at', new Date().toISOString());
    // Delay to let exit animation play
    setTimeout(() => {
      onVerified();
    }, 1400);
  };

  const handleExit = () => {
    window.location.href = 'https://www.google.com';
  };

  // Smooth easing matching the brand
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="agegate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: premiumEase }}
          className="agegate"
        >
          {/* ===== Background Layer ===== */}
          <div className="agegate__bg">
            <motion.img
              src={bgImage}
              alt=""
              className="agegate__bg-img"
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 3, ease: 'easeOut' }}
            />
            <div className="agegate__bg-overlay" />
            <div className="agegate__bg-vignette" />
          </div>

          {/* ===== Ambient Glow — breathing terracotta light ===== */}
          <motion.div
            className="agegate__glow agegate__glow--top"
            animate={{
              opacity: [0.08, 0.18, 0.08],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="agegate__glow agegate__glow--bottom"
            animate={{
              opacity: [0.05, 0.12, 0.05],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />

          {/* ===== Content ===== */}
          <div className="agegate__content">
            {showContent && (
              <>
                {/* Logo */}
                <motion.div
                  className="agegate__logo-wrap"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: premiumEase, delay: 0.1 }}
                >
                  <img src={logoCream} alt="Suprbaby" className="agegate__logo" />
                </motion.div>

                {/* Decorative line */}
                <motion.div
                  className="agegate__divider"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 0.4 }}
                  transition={{ duration: 1.5, ease: premiumEase, delay: 0.4 }}
                />

                {/* Whisper tagline */}
                <motion.p
                  className="agegate__whisper"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: premiumEase, delay: 0.6 }}
                >
                  Some rituals are worth the wait…
                </motion.p>

                {/* Main heading */}
                <motion.h1
                  className="agegate__heading"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: premiumEase, delay: 0.8 }}
                >
                  Are You <span className="agegate__heading-accent">18+</span> ?
                </motion.h1>

                {/* Disclaimer text */}
                <motion.div
                  className="agegate__disclaimer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: premiumEase, delay: 1.0 }}
                >
                  <p>
                    This website contains products intended for adults only.
                    By entering, you confirm that you are at least 18 years
                    of age and legally permitted to purchase smoking accessories
                    in your jurisdiction.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="agegate__actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: premiumEase, delay: 1.2 }}
                >
                  <button
                    onClick={handleEnter}
                    onMouseEnter={() => setHoveredButton('enter')}
                    onMouseLeave={() => setHoveredButton(null)}
                    className="agegate__btn agegate__btn--enter"
                    id="age-gate-enter"
                  >
                    <span className="agegate__btn-text">
                      Unwrap the Experience
                    </span>
                    <motion.span
                      className="agegate__btn-shimmer"
                      animate={{
                        x: hoveredButton === 'enter' ? ['0%', '200%'] : '0%',
                      }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                  </button>

                  <button
                    onClick={handleExit}
                    className="agegate__btn agegate__btn--exit"
                    id="age-gate-exit"
                  >
                    Not Yet
                  </button>
                </motion.div>

                {/* Bottom legal whisper */}
                <motion.p
                  className="agegate__legal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, ease: premiumEase, delay: 1.5 }}
                >
                  By entering you agree to our{' '}
                  <span className="agegate__legal-link">Terms of Service</span>{' '}
                  &amp;{' '}
                  <span className="agegate__legal-link">Privacy Policy</span>
                </motion.p>

                {/* Tagline at the very bottom */}
                <motion.p
                  className="agegate__tagline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.8, ease: premiumEase, delay: 1.8 }}
                >
                  Burns Like Desire, Flows Like Dream
                </motion.p>
              </>
            )}
          </div>
        </motion.div>
      )}

      {/* ===== Exit Curtain Animation ===== */}
      {isExiting && (
        <motion.div
          key="curtain"
          className="agegate__curtain"
          initial={{ clipPath: 'circle(0% at 50% 50%)' }}
          animate={{ clipPath: 'circle(150% at 50% 50%)' }}
          transition={{ duration: 1.4, ease: premiumEase }}
        />
      )}
    </AnimatePresence>
  );
};

export default AgeGate;
