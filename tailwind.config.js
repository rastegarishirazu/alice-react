/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      helperWarning: "rgba(245, 149, 105, 1)",
      primaryText: "rgba(var(--color-primaryText), 1)",
      formCardBackground: "rgba(61, 61, 61, 1)",
      uptime: "rgb(var(--color-uptime))",
      cardBackground: "rgba(var(--color-cardBackground), 1)",
      primaryMain: "rgba(var(--color-primaryMain), 1)",
      primaryL3: {
        DEFAULT: "rgba(var(--color-primaryL3), 1)",
        50: "rgba(var(--color-primaryL3), 0.5)",
        20: "rgba(var(--color-primaryL3), 0.2)",
        80: "rgba(var(--color-primaryL3), 0.8)",
      },
      myPrimary: "rgb(var(--color-primary))",
      primary: "rgba(var(--color-primary), 1)",

      mysecondary: {
        DEFAULT: "rgb(var(--color-secondary))",
        20: "rgba(245, 149, 105, 0.2)",
      },
      black: "#323245",
      white: "#FFFFFF",
      pacificBlue: "#23B5D3",
    },
    extend: {
      colors: {
        gray: "#6F7787",
        helperWarning: "#F59569",
        primary: "rgba(var(--color-primary), 1)",
        mysecondary: "rgba(245, 149, 105), 1)",
        black: "#323245",
        white: "#FFFFFF",
        pacificBlue: "#23B5D3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
