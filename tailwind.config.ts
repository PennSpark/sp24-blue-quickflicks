import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-ink": "var(--light-ink)",
        "light-primary": "var(--light-primary)",
        "light-secondary": "var(--light-secondary)",
        "variable-collection-base-red": "var(--variable-collection-base-red)",
        "variable-collection-first": "var(--variable-collection-first)",
        "variable-collection-lighter-red": "var(--variable-collection-lighter-red)",
        "variable-collection-middle-light": "var(--variable-collection-middle-light)",
        "variable-collection-middle-red": "var(--variable-collection-middle-red)",
        "variable-collection-slightly-off-white": "var(--variable-collection-slightly-off-white)",
      },
    },
  },
  plugins: [],
};
export default config;
