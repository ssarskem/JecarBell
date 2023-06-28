/** @type {import('tailwindcss').Config} */

const defaultTheme =require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        notojp: ['var(--font-notojp)', ...defaultTheme.fontFamily.sans],
        montserrat: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
        kiwimaru: ['var(--font-kiwimaru)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite"
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 5px, #1b1b1b 100px);',
      },
    },
  },
  plugins: [],
}
