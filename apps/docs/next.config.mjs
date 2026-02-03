import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Avoid @mdx-js/react's context-based provider in RSC.
    // We don't currently rely on MDXProvider in these docs pages.
    providerImportSource: undefined,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: "standalone",
  transpilePackages: ["bharat-ui"],
  eslint: {
    // The root repo uses a Vite-oriented eslint setup; keep docs builds unblocked.
    ignoreDuringBuilds: true,
  },
};

export default withMDX(nextConfig);
