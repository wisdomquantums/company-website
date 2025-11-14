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
 * Features:
 *  - React + TailwindCSS integration
 *  - Auto HMR (Hot Reload)
 *  - Proxy setup for backend (Express)
 *  - Clean alias for imports (@)
 *  - Optimized build setup
 */

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // allows "@/components/..." etc.
    },
  },

  server: {
    port: 5173, // Frontend dev port
    open: true, // Auto-open browser
    host: "0.0.0.0", // Allow LAN access
    strictPort: true, // Don’t auto-switch port

    watch: {
      usePolling: true, // Fix for HMR on Windows
    },

    hmr: {
      overlay: true, // Show compile errors in browser
    },

    proxy: {
      "/api": {
        target: "http://localhost:5000", // Express backend
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 800, // slightly increased
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
