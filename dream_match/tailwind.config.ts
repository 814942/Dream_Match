import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "rgb(255 253 249)",
        black: "rgb(22 22 26)",
        gray: "rgb(100 117 110)",
        "green-light": "rgb(0 146 84)",
        green: "rgb(32 54 45)"
      }
    },
  },
  plugins: [],
};
export default config;
