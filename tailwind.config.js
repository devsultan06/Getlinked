/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "purple-lens-flare": "url('../public/image/purple-lens-flare-png.png')",
      },
      screens: {
        "1000px": "1000px",
      },
    },
  },
  plugins: [],
};
