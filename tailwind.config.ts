/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand ION Colors
        "ion-green": "#2A8373",         // Primary brand green
        "ion-green-light": "#B2D9D1",   // Soft mint for background hover
        "ion-green-dark": "#1F6A5E",    // Darker green for hover
    
        "ion-navy": "#0C2E44",          // Primary brand navy (used in text/logo)
        "ion-navy-light": "#3C5C73",    // Light version for subtle text
        "ion-navy-dark": "#081E2F",     // Darker for depth or contrast
    
        // Grayscale & Neutral
        "ion-gray": "#F4F7F9",          // Light background or section block
        "ion-gray-dark": "#A0A0A0",     // Text, border gray
    
        // Accent (Optional highlight tone)
        "ion-accent": "#F9C846",        // Optional warm accent (yellowish highlight)
    
        // Status (Optional)
        "ion-success": "#3BB273",
        "ion-error": "#E35D6A",
        "ion-warning": "#F9C846",
      },
      fontFamily: {
        sans: ["var(--font-opensans)", "sans-serif"],
      },
    },
  },
  plugins: [],
  
};
