/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ff8200",
        secondary: "#ed8900",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
