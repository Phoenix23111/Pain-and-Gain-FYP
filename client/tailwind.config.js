/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        3000: "3000ms",
      },
      fontFamily: {
        "material-symbols-outlined": [
          '"Material Symbols Outlined"',
          "sans-serif",
        ],
        "material-symbols-rounded": [
          '"Material Symbols Rounded"',
          "sans-serif",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
});
