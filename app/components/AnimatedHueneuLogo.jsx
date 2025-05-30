'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedHueneuLogo({ className = '' }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Time between 'HUE' and 'NEU' appearing
        delayChildren: 0.2,   // Initial delay before animation starts
      },
    },
  }

  const partVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95], // Smooth, slightly bouncy ease
        delay: i * 0.1 // Slight delay offset for each part if needed, though staggerChildren handles main timing
      },
    }),
  }

  const logoPath = '/images/hueneu-logo.svg'; // Ensure this path is correct

  // For a complex SVG animation, you might break the SVG into parts
  // or use Framer Motion's path animation capabilities.
  // For this MVP, we'll animate the SVG as a whole or conceptually its text parts.
  // If the SVG is structured with IDs for 'HUE' and 'NEU', direct manipulation is possible.
  // Assuming a single SVG that visually separates HUE and NEU:

  return (
    <motion.div 
      className={`relative ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 
        Option 1: Simple fade-in of the whole logo if it's one image.
        This doesn't fully capture the 'HUE' then 'NEU' reveal from IG, 
        but is a good starting point.
      */}
      {/* <motion.div variants={partVariants} custom={0}> 
        <Image 
          src={logoPath} 
          alt="hueneu logo" 
          width={200} // Adjust as needed
          height={100} // Adjust as needed
          priority // Load logo quickly
        />
      </motion.div> */}

      {/* 
        Option 2: Conceptual reveal using text, styled to look like the logo.
        This allows easier animation of 'HUE' and 'NEU' separately.
        This assumes the logo is primarily typographic.
        Actual SVG animation is more complex and would require manipulating SVG paths.
      */}
      <div className="flex items-center justify-center text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
        <motion.span 
          variants={partVariants} 
          custom={0} 
          className="text-accent"
        >
          hue
        </motion.span>
        <motion.span 
          variants={partVariants} 
          custom={1} 
          className="text-primary ml-1"
        >
          neu
        </motion.span>
      </div>
      {/* A subtle underline or dot that animates in under the logo */}
      <motion.div 
        className="h-1 w-1/3 bg-primary/50 mx-auto mt-2 rounded-full"
        initial={{ width: 0, opacity: 0 }}
        animate={{ 
          width: '33.3333%', 
          opacity: 0.5,
          transition: { delay: 1, duration: 0.8, ease: 'easeInOut' }
        }}
      />

      {/* If you have an SVG with distinct parts (e.g., id="hue-part", id="neu-part"),
          you could load the SVG and use Framer Motion to animate those specific parts.
          Example (conceptual - requires SVG structure and potentially a library like react-svg-morph):
          <svg viewBox="0 0 200 50">
            <motion.path id="hue-part" d="..." variants={partVariants} custom={0} className="fill-accent" />
            <motion.path id="neu-part" d="..." variants={partVariants} custom={1} className="fill-primary" />
          </svg>
      */}
    </motion.div>
  )
}
