/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#dcf3ff',
          200: '#b3e8ff',
          300: '#77d9ff',
          400: '#33c0ff',
          500: '#0099e6', // Main primary color
          600: '#007ab8',
          700: '#005c8a',
          800: '#004c73',
          900: '#003e5f',
          950: '#002842',
        },
        secondary: {
          50: '#fff7ed',
          100: '#ffeed5',
          200: '#ffd8ab',
          300: '#ffb86b',
          400: '#ff9933', // Main secondary color
          500: '#ff7a00',
          600: '#e65c00',
          700: '#bf4200',
          800: '#993300',
          900: '#802b00',
          950: '#4d1a00',
        },
        neutral: {
          dark: '#121927', // Near black
          light: '#f8f9fd', // Off-white
        },
        highlight: '#00d0ff', // Highlight for CTAs
        accent: '#ffcc00', // Second highlight color
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
        display: ['Poppins', 'Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        'display': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'headline': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'subheadline': ['clamp(1.25rem, 3vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-lg': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glass-xl': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'glass-2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
        'highlight': '0 0 15px rgba(0, 208, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dotted-grid': 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(12px)',
        'blur-lg': 'blur(24px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'fade-in-down': 'fade-in-down 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
};