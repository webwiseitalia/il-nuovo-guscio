/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf8ef',
          100: '#f9edcf',
          200: '#f3d89f',
          300: '#ecc36f',
          400: '#d4a853',
          500: '#c49a3c',
          600: '#a67c2e',
          700: '#8a6425',
          800: '#6e4f1d',
          900: '#523b16',
        },
        dark: {
          50: '#f5f5f6',
          100: '#e5e5e8',
          200: '#cbcbd0',
          300: '#a8a8b0',
          400: '#85858f',
          500: '#6a6a75',
          600: '#545460',
          700: '#43434d',
          800: '#2a2a32',
          900: '#1a1a20',
          950: '#111115',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
