import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        ink: "#1d1d1f", // primary text
        mute: "#6e6e73", // secondary text
        cloud: "#f5f5f7", // section background
        hairline: "#d2d2d7",
        apple: "#2f55c8", // quiet accent blue
      },
      maxWidth: {
        page: "1024px",
      },
    },
  },
  plugins: [],
};

export default config;
