/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34495E',       // Charcoal
        secondary: '#BDC3C7',     // Silver
        accent: '#E74C3C',        // Terra Cotta/Coral
        'neutral-light': '#F5F5F5', // Off-White
        'neutral-dark': '#2C3E50',  // Darker Charcoal
        success: '#2ECC71',
        warning: '#F39C12',
        error: '#E74C3C',        // Same as accent, used contextually
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      animation: {
        'logo-reveal': 'logoReveal 2s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'subtle-bob': 'subtleBob 3s infinite ease-in-out',
      },
      keyframes: {
        logoReveal: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtleBob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};