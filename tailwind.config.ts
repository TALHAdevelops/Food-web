import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logTalbites': "url('./src/assets/logTalBites.png')",
        'food-image': "url('./src/assets/foodimage.jpg')",
      },
        
    },
  },
  plugins: [],
} satisfies Config;
