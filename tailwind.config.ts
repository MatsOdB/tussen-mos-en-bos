import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|link|navbar|ripple|spinner).js",
  ],
  theme: {
    extend: {
      colors: {
        custom_indigo: "#5f6f9b",
        custom_green: "#cad1a7",
        custom_rose: "#d75e6d",
        custom_orange: "#e68e4a",
        custom_brown: "#5d3b2c",
        custom_light_brown: "#695247",
      },
      fontFamily: {
        veryberry: ["var(--font-veryberry)", "cursive"],
        alice: ["var(--font-alice)", "serif"],
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
} satisfies Config;
