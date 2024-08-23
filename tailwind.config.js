/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        beausite: ["BeausiteClassic", "sans-serif"],
        rebond: ["ESRebondGrotesque", "sans-serif"],
      },
      colors: {
        custom: "#000D49",
        pale: "#3B4767",
        myPurple: "#6950F9",
      },
      borderRadius: {
        100: "100px",
      },
      boxShadow: {
        hairdresserCard: "0px 10px 48px 0px #1017300A",
        seeMoreButton: "0px 10px 48px 0px #0000000A",
      },
    },
  },
  plugins: [],
};
