/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBg: {
          DEFAULT: '#1b1b1b',
          light: '#ffffff',
          dark: '#1b1b1b',
        },
        primary: {
          DEFAULT: '#293897',
          light: '#6cb2eb',
          dark: '#2779bd',
        },
        secondary: {
          DEFAULT: '#ffb84b',
          // light: '#6cb2eb',
          // dark: '#2779bd',
        },
        filterColor: {
          DEFAULT: '#2b2a2a',
          // light: '#6cb2eb',
          // dark: '#2779bd',
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
}