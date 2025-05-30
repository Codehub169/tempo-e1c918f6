'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function ScrollDownIndicator({ targetId = 'story', className = '' }) {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      aria-label="Scroll to next section"
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 1.5, duration: 0.8, ease: 'easeInOut' },
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{
          y: [0, 8, 0], // Playful bobbing animation
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.5 // Start bobbing after initial appearance
        }}
      >
        <ArrowDown size={28} className="text-primary stroke-[1.5px]" />
      </motion.div>
    </motion.button>
  )
}
