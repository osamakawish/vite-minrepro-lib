import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "index.ts", // Entry point for your library
      name: "MinReproLib", // Library name
      formats: ["es", "cjs"], // Output formats - ES Module and CommonJS
    },
    rollupOptions: {
      // Make sure external dependencies are not bundled
      external: ["react", "react-dom"],
      output: {
        // Provide global variable names for external dependencies when using UMD format
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
