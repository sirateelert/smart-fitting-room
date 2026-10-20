import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build also works from a GitHub Pages project URL.
export default defineConfig({ base: "./", plugins: [react()] });
