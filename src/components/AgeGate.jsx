import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ageImg from '../../public/images/2.webp';

const AgeGate = ({ onVerified }) => {
  const [notYet, setNotYet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);

  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const handleVerified = () => {
    localStorage.setItem('suprbaby_age_verified', 'true');
    onVerified();
  };

  const handleNotYet = () => {
    setNotYet(true);
    setTimeout(() => {
      window.location.href = 'https://www.google.com';
    }, 2800);
  };

  /* ── Shared "Not Yet" screen ── */
  const NotYetScreen = (
    <motion.div
      key="not-yet"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
        style={{ textAlign: 'center', padding: '0 36px' }}
      >
        <p
          style={{
            fontFamily: 'Pinyon Script, cursive',
            color: '#b85e43',
            fontSize: isDesktop ? '64px' : '52px',
            lineHeight: 1.2,
            marginBottom: '22px',
          }}
        >
          Not yet, baby.
        </p>
        <p
          style={{
            fontFamily: 'League Spartan, sans-serif',
            color: 'rgba(255,255,234,0.68)',
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.75,
            maxWidth: '260px',
            margin: '0 auto',
          }}
        >
          Some things are worth the wait. Come back when you're ready.
        </p>
      </motion.div>
    </motion.div>
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#080707',
        overflow: 'hidden',
      }}
    >
      <AnimatePresence mode="wait">
        {notYet ? NotYetScreen : isDesktop ? (

          /* ══════════════════════════════
             DESKTOP — two-column layout
          ══════════════════════════════ */
          <motion.div
            key="age-gate-desktop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {/* ── LEFT: image panel (55%) ── */}
            <div style={{ width: '55%', position: 'relative', overflow: 'hidden' }}>
              {/* Full background photo */}
              <img
                src={ageImg}
                alt=""
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  filter: 'brightness(0.5) saturate(0.75)',
                }}
              />


              {/* Right-edge fade into the dark panel */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to right, transparent 60%, #080707 100%)',
                }}
              />
            </div>

            {/* ── RIGHT: content panel (45%) ── */}
            <div
              style={{
                width: '45%',
                backgroundColor: '#080707',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '60px 52px',
                position: 'relative',
              }}
            >

              {/* Main content */}
              <div>
                {/* 18+ circle */}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    border: '2px solid #b85e43',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <span
                    style={{
                      color: '#ffffea',
                      fontSize: '13px',
                      fontWeight: 700,
                      fontFamily: 'League Spartan, sans-serif',
                    }}
                  >
                    18+
                  </span>
                </div>

                {/* Adults Only */}
                <p
                  style={{
                    color: '#b85e43',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    fontFamily: 'League Spartan, sans-serif',
                    marginBottom: '12px',
                  }}
                >
                  Adults Only
                </p>

                {/* Heading */}
                <h1
                  style={{
                    fontFamily: 'League Spartan, sans-serif',
                    fontWeight: 900,
                    fontSize: '52px',
                    lineHeight: '1.04',
                    color: '#ffffea',
                    marginBottom: '20px',
                  }}
                >
                  Before We
                  <br />
                  <span style={{ color: '#b85e43' }}>Begin</span>
                </h1>

                {/* Body copy */}
                <p
                  style={{
                    color: 'rgba(255,255,234,0.62)',
                    fontSize: '14px',
                    lineHeight: '1.7',
                    fontFamily: 'League Spartan, sans-serif',
                    fontWeight: 400,
                    marginBottom: '20px',
                    maxWidth: '340px',
                  }}
                >
                  This experience is crafted for those who've learned the art of
                  patience. Every slow burn starts with a choice.
                </p>

                {/* Cursive question */}
                <p
                  style={{
                    fontFamily: 'Pinyon Script, cursive',
                    color: '#b85e43',
                    fontSize: '26px',
                    marginBottom: '32px',
                    lineHeight: 1.3,
                  }}
                >
                  Are you 18 or older?
                </p>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleVerified}
                    style={{
                      flex: 1,
                      maxWidth: '200px',
                      backgroundColor: '#b85e43',
                      color: '#ffffea',
                      fontFamily: 'League Spartan, sans-serif',
                      fontWeight: 700,
                      fontSize: '13px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '16px 20px',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#9d4932')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#b85e43')}
                  >
                    Yes, I'm In &nbsp;→
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleNotYet}
                    style={{
                      flex: 1,
                      maxWidth: '200px',
                      backgroundColor: 'transparent',
                      color: 'rgba(255,255,234,0.72)',
                      fontFamily: 'League Spartan, sans-serif',
                      fontWeight: 700,
                      fontSize: '13px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '16px 20px',
                      border: '1px solid rgba(255,255,234,0.25)',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,234,0.55)';
                      e.currentTarget.style.color = '#ffffea';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,234,0.25)';
                      e.currentTarget.style.color = 'rgba(255,255,234,0.72)';
                    }}
                  >
                    Not Yet
                  </motion.button>
                </div>

                {/* Legal disclaimer */}
                <p
                  style={{
                    color: 'rgba(255,255,234,0.3)',
                    fontSize: '11px',
                    lineHeight: 1.6,
                    fontFamily: 'League Spartan, sans-serif',
                    fontWeight: 400,
                    maxWidth: '340px',
                    marginBottom: '16px',
                  }}
                >
                  By entering, you confirm you are 18 years of age or older.
                  Suprbaby products are intended for legal adult use only. We do
                  not sell tobacco or any controlled substance.
                </p>

                {/* Decorative dash */}
                <div
                  style={{
                    width: '32px',
                    height: '2px',
                    backgroundColor: 'rgba(184,94,67,0.4)',
                  }}
                />
              </div>
            </div>
          </motion.div>

        ) : (

          /* ══════════════════════════════
             MOBILE — single column
          ══════════════════════════════ */
          <motion.div
            key="age-gate-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'absolute', inset: 0 }}
          >
            {/* Full-page background photo */}
            <img
              src={ageImg}
              alt=""
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center top',
                filter: 'brightness(0.55) saturate(0.75)',
                zIndex: 0,
              }}
            />

            {/* Gradient: clear at top → solid black at bottom */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to bottom, rgba(8,7,7,0.05) 0%, rgba(8,7,7,0.08) 40%, rgba(8,7,7,0.75) 58%, rgba(8,7,7,0.97) 72%, #080707 85%)',
                zIndex: 1,
              }}
            />

            {/* Foreground */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >

              {/* Content pushed to bottom */}
              <div
                style={{
                  marginTop: 'auto',
                  padding: '0 28px 44px',
                  maxWidth: '420px',
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {/* 18+ circle */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: '2px solid #b85e43',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                  }}
                >
                  <span
                    style={{
                      color: '#ffffea',
                      fontSize: '13px',
                      fontWeight: 700,
                      fontFamily: 'League Spartan, sans-serif',
                    }}
                  >
                    18+
                  </span>
                </div>

                <p
                  style={{
                    color: '#b85e43',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    fontFamily: 'League Spartan, sans-serif',
                    marginBottom: '10px',
                  }}
                >
                  Adults Only
                </p>

                <h1
                  style={{
                    fontFamily: 'League Spartan, sans-serif',
                    fontWeight: 900,
                    fontSize: '44px',
                    lineHeight: '1.04',
                    color: '#ffffea',
                    marginBottom: '16px',
                  }}
                >
                  Before We
                  <br />
                  <span style={{ color: '#b85e43' }}>Begin</span>
                </h1>

                <p
                  style={{
                    color: 'rgba(255,255,234,0.62)',
                    fontSize: '14px',
                    lineHeight: '1.7',
                    fontFamily: 'League Spartan, sans-serif',
                    fontWeight: 400,
                    marginBottom: '18px',
                  }}
                >
                  This experience is crafted for those who've learned the art of
                  patience. Every slow burn starts with a choice.
                </p>

                <p
                  style={{
                    fontFamily: 'Pinyon Script, cursive',
                    color: '#b85e43',
                    fontSize: '24px',
                    marginBottom: '30px',
                    lineHeight: 1.3,
                  }}
                >
                  Are you 18 or older?
                </p>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleVerified}
                    style={{
                      flex: 1,
                      backgroundColor: '#b85e43',
                      color: '#ffffea',
                      fontFamily: 'League Spartan, sans-serif',
                      fontWeight: 700,
                      fontSize: '13px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '15px 16px',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#9d4932')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#b85e43')}
                  >
                    Yes, I'm In &nbsp;→
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleNotYet}
                    style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      color: 'rgba(255,255,234,0.72)',
                      fontFamily: 'League Spartan, sans-serif',
                      fontWeight: 700,
                      fontSize: '13px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '15px 16px',
                      border: '1px solid rgba(255,255,234,0.25)',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,234,0.55)';
                      e.currentTarget.style.color = '#ffffea';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,234,0.25)';
                      e.currentTarget.style.color = 'rgba(255,255,234,0.72)';
                    }}
                  >
                    Not Yet
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AgeGate;
