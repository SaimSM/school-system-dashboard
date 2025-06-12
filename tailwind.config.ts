import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-gray': 'rgba(162, 161, 168, 1)',
          'white-lightColor': 'var(--white-lightColor)', // Custom color name
      },
      boxShadow: {
        'custom': '8px 8px 48px 8px rgba(0, 0, 0, 0.078)' // equivalent to #00000014 (14% opacity)
      },
    },
  },
  plugins: [],
} satisfies Config;
