/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pureRed: "var(--pureRed)",
        creamWhite: "var(--creamWhite)",
        blackButton: "var(--blackButton)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "cormorant-garamond": ["Cormorant Garamond", "serif"],
      },
      screens: {
        '2xl': '1300px', // Set 2xl breakpoint to 1300px
      },
    },
  },
  plugins: [],
};
