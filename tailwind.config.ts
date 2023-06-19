import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
      },
      colors: {
        brand: {
          50: "#e1f3f0",
          100: "#b5e2d9",
          200: "#85cfc0",
          300: "#56bca7",
          400: "#34ac95",
          500: "#1d9d84",
          600: "#1a9077",
          700: "#167f67",
          800: "#106f59",
          900: "#08533e",
          950: "#03392a",
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
