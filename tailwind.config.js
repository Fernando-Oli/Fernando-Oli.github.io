/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background)",
          footer: "#050609",
        },
        primary: {
          DEFAULT: "var(--primary)",
          hover: "#b83333",
        },
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        success: "#4caf7d",
      },
      fontFamily: {
        // font-['Poppins'] -> font-sans
        sans: ['"Poppins"', "sans-serif"],
        // font-['Cheque'] -> font-display
        display: ['"Monograph"', "sans-serif"],
      },
    },
  },
  plugins: [],
}