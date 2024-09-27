/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('/image.png')",
      },
      fontFamily: {
        saiba: ["SAIBA-45", "sans-serif"],
      },
    },
  },
  plugins: [],
};
