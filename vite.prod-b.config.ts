import { defineConfig } from "vite";

export default defineConfig({
  build: {
    assetsDir: "b",
    emptyOutDir: false,
    rollupOptions: {
      input: "b/index.html",
    },
  },
});
