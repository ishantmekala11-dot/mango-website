import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Repo deploys to GitHub Pages at /mango-website/, so assets must resolve relative to that base.
export default defineConfig({
  base: "/mango-website/",
  plugins: [react(), tailwindcss()],
});
