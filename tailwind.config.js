/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        laptop: "1100px",
      },
      colors: {
        accent: "#4CAF4F",

        "light-400": "#F5F7FA",

        "dark-200": "#89939E",
        "dark-300": "#717171",
        "dark-400": "#4D4D4D",
        "dark-500": "#263238",
        "dark-600": "#18191F",
      },
    },
  },
  plugins: [],
};
