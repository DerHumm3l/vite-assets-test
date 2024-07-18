import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        A: "a/index.html",
        B: "b/index.html",
      },
    },
  },
});
