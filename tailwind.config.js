/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-color": "#201F1F",
        "light-color": "#FFFF",
      },
      boxShadow: {
        "custom-sh": "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
      },
      fontFamily: {
        borel: ["Borel", "cursive"],
        tech: ["Share Tech Mono", "monospace"]

      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
