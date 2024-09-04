/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2e5b3d', // You can change this value to your desired primary color
          light: '#6cb2eb',
          dark: '#2779bd',
        },
        secondary: {
          DEFAULT: '#0052a3', // You can change this value to your desired primary color
          // light: '#6cb2eb',
          // dark: '#2779bd',
        },
      },
    },
  },
  plugins: [],
}
