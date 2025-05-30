'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Corrected import
import AnimatedHueneuLogo from './AnimatedHueneuLogo'; // Added import
import ScrollDownIndicator from './ScrollDownIndicator'; // Added import

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
        {/* Animated hueneu logo reveal placeholder - now uses actual component */}
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
      
      {/* Smooth scroll-down indicator placeholder - now uses actual component */}
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
