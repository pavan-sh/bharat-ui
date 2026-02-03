import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname),
  base: "/demos/aadhaar-input/",
  build: {
    outDir: path.resolve(__dirname, "../../docs/public/demos/aadhaar-input"),
    emptyOutDir: true,
  },
});
