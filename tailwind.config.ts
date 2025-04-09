import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ion-green": "#2A8373",
        "ion-green-light": "#B2D9D1",
        "ion-green-dark": "#1F6A5E",
        "ion-navy": "#0C2E44",
        "ion-navy-light": "#3C5C73",
        "ion-navy-dark": "#081E2F",
        "ion-gray": "#F4F7F9",
        "ion-gray-dark": "#A0A0A0",
        "ion-accent": "#F9C846",
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

export default config;
