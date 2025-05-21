/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        dark: "#1a1a1a",
        light: "#f9f9f9",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
}
