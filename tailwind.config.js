/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ['"Rampart One"', "cursive"],
        Satisfy: ["Satisfy", "cursive"],
        Rubik: ['"Rubik Dirt"', "cursive"],
      },
    },
  },
  plugins: [],
};
