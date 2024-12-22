/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2E86C1',
        secondary: '#27AE60',
        neutral: {
          DEFAULT: '#FFFFFF',
          dark: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#BDC3C7',
          dark: '#2d3436',
        },
        highlight: '#F4D03F',
      },
    },
  },
  plugins: [],
};