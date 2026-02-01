import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Bharat UI",
  description: "Accessible, India-first UI components for React.",
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: "Components", link: "/components/aadhaar-input" },
      { text: "GitHub", link: "https://github.com/" },
    ],
    sidebar: {
      "/components/": [
        {
          text: "Components",
          items: [{ text: "AadhaarInput", link: "/components/aadhaar-input" }],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/" }],
    footer: {
      message: "Built with VitePress",
      copyright: "Copyright © Bharat UI",
    },
  },
});
