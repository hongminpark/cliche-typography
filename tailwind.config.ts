import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Helvetica Neue", "Arial", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
