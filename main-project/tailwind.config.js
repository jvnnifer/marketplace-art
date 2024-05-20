/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const CustomStyle = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective-1000": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundPosition: {
      "left-1": "-322px center",
    },
    borderRadius: {
      "super-big": "250px",
      standard: "150px",
      full: "9999px",
      lg: "0.5rem",
      md: "0.7rem",
      xl: "0.9rem",
    },
    extend: {
      colors: {
        "burnt-cheese": "#ED7447",
        "light-cyan": "#CAF1FD",
        "lapis-lazuli": "#005F8F",
        "celestial-blue": "#2B9BCB",
        "happy-yellow": "#FEB800",
        "neutral-blue": "#0090c4",
        "mountain-bluish": "#46a8c9",
        "dark-blue": "#011838",
        "light-pink": "#FA8677",
        "sky-blue": "#7de1fb",
        brownies: "#a93422",
        "calming-green": "#7ba128",
        grayish: "#92b7d1",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        heading: ["Protest Riot", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui"), CustomStyle],
};
