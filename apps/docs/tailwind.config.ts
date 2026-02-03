import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Pull classes from the package source while developing.
    "../../src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: "hsl(var(--saffron) / <alpha-value>)",
        ashoka: "hsl(var(--ashoka) / <alpha-value>)",
        indiaGreen: "hsl(var(--india-green) / <alpha-value>)",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.zinc.800"),
            "--tw-prose-headings": theme("colors.zinc.900"),
            "--tw-prose-links": theme("colors.saffron"),
            "--tw-prose-bold": theme("colors.zinc.900"),
            "--tw-prose-counters": theme("colors.zinc.500"),
            "--tw-prose-bullets": theme("colors.zinc.300"),
            "--tw-prose-hr": theme("colors.zinc.200"),
            "--tw-prose-quotes": theme("colors.zinc.900"),
            "--tw-prose-quote-borders": theme("colors.zinc.200"),
            "--tw-prose-captions": theme("colors.zinc.500"),
            "--tw-prose-code": theme("colors.zinc.900"),
            "--tw-prose-pre-code": theme("colors.zinc.100"),
            "--tw-prose-pre-bg": theme("colors.zinc.900"),
            "--tw-prose-th-borders": theme("colors.zinc.200"),
            "--tw-prose-td-borders": theme("colors.zinc.100"),
            a: {
              textDecoration: "underline",
              textDecorationColor: "hsl(var(--saffron) / 0.45)",
              textUnderlineOffset: "3px",
            },
            "a:hover": {
              color: theme("colors.indiaGreen"),
              textDecorationColor: "hsl(var(--india-green) / 0.5)",
            },
            code: {
              fontWeight: "500",
            },
            "::selection": {
              backgroundColor: "hsl(var(--saffron) / 0.22)",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
