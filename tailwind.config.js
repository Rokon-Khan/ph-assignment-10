/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ['"Work Sans", sans-serif'],
      },
      backgroundImage: {
        banner: "url('./assets/slider-1.jpg')",
        banner_1: "url('./assets/slider-2.jpg')",
        banner_2: "url('./assets/slider-3.jpg')",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
