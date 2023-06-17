import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#7EAEA4",
          100: "#67AA9D",
          200: "#50A796",
          300: "#3FA28F",
          400: "#2E9F89",
          500: "#1D9D84",
          600: "#268270",
          700: "#2A6D60",
          800: "#2C5C52",
          900: "#2C4E47",
          950: "#2B433E",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
} satisfies Config;
