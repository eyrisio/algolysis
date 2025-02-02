import { defineConfig } from "vite";
import monacoEditorPlugin from "vite-plugin-monaco-editor";

export default defineConfig({
  plugins: [
    monacoEditorPlugin.default({
      languageWorkers: ["editorWorkerService"],
      languages: ["javascript", "python", "cpp", "java"],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("monaco-editor")) {
            return "monaco";
          }
        },
      },
    },
  },
});
