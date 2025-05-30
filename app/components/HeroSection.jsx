'use client';

import React from 'react';
import { motion }_from_ 'framer-motion';
// Placeholder for AnimatedHueneuLogo - will be implemented in a later batch
const AnimatedHueneuLogo = () => (
  <div className="w-48 h-48 bg-neutral-200 flex items-center justify-center rounded-full shadow-lg">
    <span className="text-primary font-display text-2xl">hueneu</span>
  </div>
);

// Placeholder for ScrollDownIndicator - will be implemented in a later batch
const ScrollDownIndicator = () => (
  <motion.div 
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
      <path d="M12 5V19M12 19L7 14M12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 p-8 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-center flex flex-col items-center"
      >
        {/* Animated hueneu logo reveal placeholder */}
        <AnimatedHueneuLogo />

        <motion.h1 
          className="font-display text-4xl md:text-6xl text-primary mt-12 mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Where stories find their aesthetic.
        </motion.h1>
        <motion.p 
          className="font-body text-lg md:text-xl text-neutral-800 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          Designs that whisper loud stories.
        </motion.p>
      </motion.div>
      
      {/* Smooth scroll-down indicator placeholder */}
      <ScrollDownIndicator />

      {/* Subtle background elements for visual interest */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full filter blur-2xl -z-10"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/20 rounded-full filter blur-2xl -z-10"
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default HeroSection;
