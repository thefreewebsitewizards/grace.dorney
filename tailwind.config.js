/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors for dusk till dorn
        burgundy: '#71151a',
        butter: '#fff4cf',
        'soft-pink': '#ff69b4', // Adjusted to match provided logo pink
        'logo-dark': '#2f3030',
        charcoal: '#36454f',
      },
      fontFamily: {
        // Custom fonts for brand identity
        'lazy-dog': ['LazyDog', 'serif'], // For "dorn"
        'moon-time': ['MoonTime', 'sans-serif'], // For "dusk till"
        'agrandir': ['Agrandir Wide', 'sans-serif'], // For headings
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'zoom-in': 'zoomIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}