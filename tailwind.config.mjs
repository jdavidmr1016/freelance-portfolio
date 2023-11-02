/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#020312",
        foreground: "#ffffff",
        /* Violet */
        primary: {
          50: "#f2e6ff",
          100: "#d3b8fd",
          200: "#b489f7",
          300: "#955bf2",
          400: "#772ced",
          500: "#5e12d3",
          600: "#490da5",
          700: "#340877",
          800: "#1f0449",
          900: "#0c001d",
          DEFAULT: "#5e12d3",
        },
        /* Green */
        secondary: {
          50: "#dffff3",
          100: "#b3ffdd",
          200: "#84fec8",
          300: "#56feb3",
          400: "#33fe9d",
          500: "#25e584",
          600: "#19b266",
          700: "#0d8048",
          800: "#004d2b",
          900: "#001b0c",
          DEFAULT: "#004d2b",
        },
        /* Gold */
        info: {
          50: "#fffadc",
          100: "#fdf0b0",
          200: "#f9e682",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#dbb80a",
          600: "#ab8f03",
          700: "#7a6600",
          800: "#493d00",
          900: "#1a1400",
          DEFAULT: "#dbb80a",
        },
        /* Red */
        warning: {
          50: "#ffe1e8",
          100: "#ffb1bb",
          200: "#ff7f8e",
          300: "#ff4c63",
          400: "#ff1a36",
          500: "#e6001c",
          600: "#b40015",
          700: "#81000f",
          800: "#500006",
          900: "#210000",
          DEFAULT: "#e6001c",
        },
      },
    },
  },
  plugins: [],
};
