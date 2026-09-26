import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://chipper-lamington-8da97a.netlify.app",
  output: "static",
  compressHTML: true,
  trailingSlash: "never",
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
