import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#00d082",
          yellow: "#fef84c",
          white: "#ffffff",
          dark: "#0b1f17",
          darker: "#06130e",
          cardDark: "#102a20",
          mutedGreen: "#00a866",
          softGreen: "#ecfdf5",
          softYellow: "#fffde6",
        },
        primary: {
          DEFAULT: "#00d082",
          50: "#eefcf5",
          100: "#d4f8e5",
          200: "#acf1ce",
          300: "#74e5b0",
          400: "#39d494",
          500: "#00d082",
          600: "#00a866",
          700: "#008453",
          800: "#046843",
          900: "#065538",
          950: "#013020",
        },
        accent: {
          DEFAULT: "#fef84c",
          50: "#fefee8",
          100: "#fefdc5",
          200: "#fefb8e",
          300: "#fef84c",
          400: "#fae81b",
          500: "#e4cd0b",
          600: "#b79b06",
          700: "#927409",
          800: "#795c0e",
          900: "#674c11",
        },
      },
      boxShadow: {
        'glow-green': '0 0 25px -5px rgba(0, 208, 130, 0.35)',
        'glow-yellow': '0 0 25px -5px rgba(254, 248, 76, 0.45)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
