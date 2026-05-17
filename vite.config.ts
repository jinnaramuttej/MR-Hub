import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }

          if (
            id.includes("/node_modules/react/") ||
            id.includes("/node_modules/react-dom/") ||
            id.includes("/node_modules/scheduler/") ||
            id.includes("/node_modules/@tanstack/")
          ) {
            return "vendor-react";
          }

          if (id.includes("/node_modules/framer-motion/") || id.includes("/node_modules/motion/")) {
            return "vendor-motion";
          }

          if (id.includes("/node_modules/lucide-react/")) {
            return "vendor-icons";
          }

          if (
            id.includes("/node_modules/three/") ||
            id.includes("/node_modules/gsap/") ||
            id.includes("/node_modules/recharts/")
          ) {
            return "vendor-visuals";
          }

          if (
            id.includes("/node_modules/@radix-ui/") ||
            id.includes("/node_modules/cmdk/") ||
            id.includes("/node_modules/sonner/") ||
            id.includes("/node_modules/embla-carousel-react/") ||
            id.includes("/node_modules/react-hook-form/") ||
            id.includes("/node_modules/react-day-picker/") ||
            id.includes("/node_modules/react-resizable-panels/") ||
            id.includes("/node_modules/input-otp/") ||
            id.includes("/node_modules/vaul/")
          ) {
            return "vendor-ui";
          }

          return "vendor";
        },
      },
    },
  },
  tanstackStart: {
    server: {
      entry: "./server.ts",
    },
  },
});