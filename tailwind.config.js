/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F8F6F1',
        primary: '#1A1A1A',
        accent: '#2C5F8A',
        'accent-light': '#E8EFF5',
        divider: '#DEDBD4',
        white: '#FFFFFF',
        'dark-bg': '#1A2F45',
        'warm-white': '#F5F3EE',
        'warm-gray': '#5F5644',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
