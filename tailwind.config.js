/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // VitePress docs
    "./docs/**/*.{md,vue,js,ts}",
    "./docs/.vitepress/**/*.{js,ts,vue}",

    // Demo playground builds
    "./demos/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [],
};
