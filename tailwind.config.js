/** @type {import('tailwindcss').Config} */

import lineClamp from '@tailwindcss/line-clamp'

module.exports = {
    darkMode: ['selector', '[data-theme="dark"]'],
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    prefix: '',
    theme: {
      fontFamily: {
        sans: ['"Lato"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
      },
    },
    plugins: [
      lineClamp,
    ],
  };
  