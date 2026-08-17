import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F4EFE7", charcoal: "#171816", muted: "#5F625A", earth: "#8C5F3D",
        terra: "#B45B3E", forest: "#233A30", olive: "#66705A", sand: "#D8C6A9", berry: "#6F243D",
      },
      fontFamily: { sans: ["var(--font-manrope)"], serif: ["var(--font-instrument)"] },
    },
  },
  plugins: [],
} satisfies Config;
