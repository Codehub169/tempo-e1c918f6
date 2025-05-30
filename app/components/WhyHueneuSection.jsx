'use client';

import React from 'react';
import { motion }_from_ 'framer-motion';
import { Heart, Feather }_from_ 'lucide-react';

const WhyHueneuSection = () => {
  return (
    <section 
      id="why-hueneu"
      className="py-20 md:py-32 bg-primary text-neutral-100 overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-1/3 h-full bg-neutral-800/30 opacity-30 filter blur-3xl -z-0"
        initial={{ x: '-100%' }}
        animate={{ x: '-50%' }}
        transition={{ duration: 40, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-1/4 h-3/4 bg-accent/20 opacity-40 filter blur-3xl -z-0"
        initial={{ y: '100%' }}
        animate={{ y: '20%' }}
        transition={{ duration: 30, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
      />

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Feather className="w-12 h-12 text-accent mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-8">
            Why choose hueneu?
          </h2>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ staggerChildren: 0.3, delayChildren: 0.2, duration: 0.5}}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p 
            className="font-body text-xl md:text-2xl text-neutral-300 leading-relaxed"
            variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
          >
            We don’t just design—<span className="text-accent font-semibold">we decode stories.</span> We listen deeply, uncovering the unique narrative threads that make your brand, *yours*.
          </motion.p>
          <motion.p 
            className="font-body text-xl md:text-2xl text-neutral-300 leading-relaxed"
            variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
          >
            Our designs speak <span className="italic">quietly</span>, but they stay with you. It's about creating that subtle resonance, that calm intrigue, that unexpected moment of connection.
          </motion.p>
          <motion.p 
            className="font-body text-xl md:text-2xl text-neutral-300 leading-relaxed"
            variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
          >
            It’s the <span className="text-white font-medium">balance</span> of bold creativity and grounding calm. The <span className="text-white font-medium">mystery</span> that invites curiosity. The <span className="text-white font-medium">intention</span> in every detail. That's the hueneu way.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay:0.5, ease: 'easeOut' }}
        >
          <Heart className="w-8 h-8 text-accent/70 mx-auto" fill="currentColor"/>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyHueneuSection;
