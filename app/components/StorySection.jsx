'use client';

import React from 'react';
import { motion }_from_ 'framer-motion';
import { Sparkles }_from_ 'lucide-react';

const StorySection = () => {
  return (
    <section 
      id="story"
      className="py-20 md:py-32 bg-white text-neutral-800 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text content area */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
            The <span className="text-accent">Hue</span> and <span className="text-neutral-500">Neu</span> of Hueneu
          </h2>
          <p className="font-body text-lg text-neutral-700 mb-4 leading-relaxed">
            At hueneu, we believe in the power of duality. 'Hue' represents the vibrant bursts of creativity, the unexpected color, the playful spark that brings a story to life. It's the boldness in our quiet approach.
          </p>
          <p className="font-body text-lg text-neutral-700 mb-6 leading-relaxed">
            'Neu' is the grounding neutrality, the calm foundation, the intentional whitespace that allows the story to breathe and resonate. It's the sophisticated whisper that makes a lasting impact.
          </p>
          <p className="font-body text-lg text-neutral-700 leading-relaxed">
            Together, they create designs that are not just seen, but felt – balanced, evocative, and always memorable.
          </p>
        </motion.div>

        {/* "Who Knew?" visual pop-out area */}
        <motion.div 
          className="md:w-1/2 flex items-center justify-center p-8 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
        >
          <div className="relative w-full max-w-md aspect-square bg-neutral-100 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <Sparkles className="w-16 h-16 text-accent mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-5xl md:text-6xl text-primary font-bold">WHO</h3>
            <h3 className="font-display text-5xl md:text-6xl text-accent font-bold rotate-[-3deg] mt-[-10px] ml-[20px]">KNEW?</h3>
            <p className="font-body text-neutral-600 mt-4 text-center text-sm">
              That quiet could be so captivating? We craft those surprising moments.
            </p>
            <motion.div 
              className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
              initial={{ scale:0, rotate: -45}}
              whileInView={{ scale:1, rotate: 0}}
              viewport={{ once: true}}
              transition={{delay: 0.8, type: 'spring', stiffness:300, damping:10}}
            >
              ✨
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
