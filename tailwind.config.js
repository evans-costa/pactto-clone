/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#ffba03",
        "yellow-light": "#ffdd81",
        gray: "#b8b8b8",
        "gray-dark": "#2f2f2f",
        "gray-light": "#f3f3f2",
        green: "#7e9c3d",
        "green-light": "#1cbaa6",
        red: "#d92336",
      },
    },
  },
  plugins: [],
};
