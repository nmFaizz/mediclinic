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
        "solid-black-sm": 'var(--solid-black-300)',
        "solid-black-md": 'var(--solid-black-500)',
        "solid-black-lg": 'var(--solid-black-700)',
        "solid-gray": 'var(--solid-gray)',
        "solid-blue": 'var(--solid-blue)',
        "solid-white": 'var(--solid-white)'
      }
    },
  },
  plugins: [],
};
export default config;
