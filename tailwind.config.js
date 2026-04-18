/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Fira Code"', 'monospace', 'sans-serif'],
      },
      colors: {
        indigo: colors.emerald,
        purple: colors.teal,
        gray: {
          ...colors.zinc,
          900: '#0d1117',
          800: '#161b22',
        }
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeInSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 5px rgba(16, 185, 129, 0.4))' },
          '50%': { opacity: .8, filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.9))' },
        }
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "float": "float 4s ease-in-out infinite",
        "fade-in-up": "fadeInSlideUp 0.8s ease-out forwards",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite"
      },
    },
  },

  plugins: [],
};
