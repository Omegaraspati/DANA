import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        "blue-dana" : "#008ceb",
        "biru-dana" : "#1b7ce6",
        "abu-bg" : "#f5f5f5",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
export default config;
