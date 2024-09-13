/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBg: {
          DEFAULT: '#1b1b1b', // Dark mode color
          light: '#ffffff',   // Light mode color
          dark: '#1b1b1b',    // Same as default for dark mode
        },
        primary: {
          DEFAULT: '#293897',
          light: '#6cb2eb',
          dark: '#2779bd',
        },
        secondary: {
          DEFAULT: '#ffb84b',
        },
        filterColor: {
          DEFAULT: '#2b2a2a',
        },
      },
      animation: {
        "background-shine": "background-shine 2s linear infinite"
      },
      keyframes: {
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        }
      }
    },
  },
  plugins: [],
};
