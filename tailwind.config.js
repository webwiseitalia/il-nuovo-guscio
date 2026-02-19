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
          100: '#f3e8d0',
          200: '#e6d1a1',
          300: '#d4b574',
          400: '#be9b5f',
          500: '#a68343',
          600: '#8a6a30',
          700: '#6e5225',
          800: '#523d1b',
          900: '#382a12',
        },
        dark: {
          50: '#e8e4df',
          100: '#c8c4bf',
          200: '#98948f',
          300: '#68645f',
          400: '#48443f',
          500: '#28242f',
          600: '#1e1a25',
          700: '#141418',
          800: '#0f0f12',
          900: '#0a0a0c',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        heading: ['Instrument Serif', 'Georgia', 'serif'],
        body: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
