/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["18px", "26px"],
      "2xl": ["24px", "32px"],
      "3xl": ["32px", "40px"],
      "4xl": ["40px", "48px"],
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#e53012",
        "color-green": "#00afa0",
        "color-gray": "#F9F9F9",
        "color-black": "#272A41",
      },
      screens: {
        widh: "1008px",
      },
    },
  },
  plugins: [],
};
