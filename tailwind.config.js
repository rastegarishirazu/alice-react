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
      myPrimary: "rgb(var(--color-primary))",
      primary: {
        DEFAULT: "rgb(var(--color-primary))",
        50: "rgba(var(--color-primary), 0.5)",
        20: "rgba(var(--color-primary), 0.2)",
        80: "rgba(var(--color-primary), 0.8)",
      },
      mysecondary: {
        DEFAULT: "rgb(var(--color-secondary))",
        20: "rgba(245, 149, 105, 0.2)",
      },
      primary13: "rgba(81, 88, 246, 0.13)",
      black: "#323245",
      white: "#FFFFFF",
      pacificBlue: "#23B5D3",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          50: "rgba(var(--color-primary), 0.5)",
          80: "rgba(var(--color-primary), 0.8)",
        },
        mysecondary: {
          DEFAULT: "rgb245, 149, 105)",
          20: "rgba(245, 149, 105), 0.2)",
        },
        mysecondary: "rgb(245, 149, 105)",
        primary13: "rgba(81, 88, 246, 0.13)",
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
    // screens: {
    //   sm: "640px",
    //   // => @media (min-width: 640px) { ... }

    //   md: "768px",
    //   // => @media (min-width: 768px) { ... }

    //   lg: "1366px",
    //   // => @media (min-width: 1024px) { ... }

    //   xl: "1536px",
    //   // => @media (min-width: 1280px) { ... }

    //   "2xl": "1920px",
    //   // => @media (min-width: 1536px) { ... }
    // },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
