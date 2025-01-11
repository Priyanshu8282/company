/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // Example font family
        // Add other font families as needed
      },
    },
  },
  plugins: [],
}