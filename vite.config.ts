/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    force: true,
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      '@clerk/clerk-react',
      '@tanstack/react-query'
    ],
  },
  build: {
    target: "esnext",
    sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  server: {
    port: 5173,
  },
});
