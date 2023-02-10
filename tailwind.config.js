/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        "hero-slider-1": "url('/image/slider-1.jpg')",
        "hero-slider-2": "url('/image/slider-2.jpg')",
        "hero-slider-3": "url('/image/slider-3.jpg')",
      },
    },
  },
  plugins: [],
};
