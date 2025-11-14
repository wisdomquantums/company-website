import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Proper handling for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Vite Configuration — WisdomQuantum Solution Pvt. Ltd.
 *
 * Works on:
 * - Local Development
 * - Vercel Production Deployment
 * - React Router (SPA Pages)
 * - Alias Support (@)
 * - Tailwind + JSX Fast Refresh (HMR)
 */

export default defineConfig({
  plugins: [react()],

  // IMPORTANT for Vercel: enables SPA fallback routing
  appType: "spa",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  server: {
    port: 5173,
    open: true,
    host: "0.0.0.0",
    strictPort: true,

    watch: {
      usePolling: true,
    },

    hmr: {
      overlay: true,
    },

    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },

  build: {
    outDir: "dist",
    sourcemap: false,

    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
