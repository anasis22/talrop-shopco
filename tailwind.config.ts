import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000"
      },
      fontWeight: {
        xxbold: "900"
      },
      fontSize: {
        xxs: "0.5rem"
      },
      screens: {
        xs: '300px', // Extra small screens
        sm: '640px', // Small screens
        md: '768px', // Medium screens
        lg: '1024px', // Large screens
        xl: '1280px', // Extra large screens
        xxl: '1536px', // Double extra large screens
      },
      
    },
  },
  plugins: [
    function ({ addUtilities } : any) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none", /* Internet Explorer 10+ */
          "scrollbar-width": "none", /* Firefox */
          "&::-webkit-scrollbar": {
            display: "none", /* Safari and Chrome */
          },
        },
      });
    },
  ],
} satisfies Config;
