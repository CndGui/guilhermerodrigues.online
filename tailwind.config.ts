import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'Poppins, sans-serif',
        'inter': 'Inter, sans-serif'
      },

      colors: {
        "light-page": "#ffffff",
        "dark-page": "#151515"
      }
    },
  },
  plugins: [],
};
export default config;