/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        turquoise: "#40E0D0", // Explicitly define the color
      },
      fontFamily: {
        sans: ["var(--font-opensans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
