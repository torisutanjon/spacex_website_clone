/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        ".50": "0.50rem",
        ".65": "0.65rem",
      },
    },
  },
  plugins: [],
};
