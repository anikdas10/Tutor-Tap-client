/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "340px",
      md: "640px",
      lg: "890px",
      xl: "1180px",
      "2xl": "1400px",
    },
    extend: {},
    fontFamily: {
      sans: ["Lora", "serif"],
    },
    container: {
      center: true,
      padding: {
        default: "1rem",
        md: "2rem",
      },
    },
  },
  plugins: [],
};

