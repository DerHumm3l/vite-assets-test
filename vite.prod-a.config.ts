import { defineConfig } from "vite";

export default defineConfig({
  build: {
    assetsDir: "a",
    emptyOutDir: false,
    rollupOptions: {
      input: "a/index.html",
    },
  },
});
