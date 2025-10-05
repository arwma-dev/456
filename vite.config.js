import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/456/", // 👈 مهم جدًا علشان GitHub Pages يعرف المسار
});
