import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js";

// Importing javascript like that because js is default (also i cant fix that import error issue lol)

const languageImports = {
  python: () =>
    import(
      "monaco-editor/esm/vs/basic-languages/python/python.contribution.js"
    ),
  cpp: () =>
    import("monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution.js"),
  java: () =>
    import("monaco-editor/esm/vs/basic-languages/java/java.contribution.js"),
};

const editor = monaco.editor.create(document.getElementById("code-area"), {
  value: "// Type your code here...",
  language: "javascript",
  theme: "vs-dark",
  automaticLayout: true,
  minimap: { enabled: false },
});

document
  .getElementById("language-selector")
  .addEventListener("change", async (event) => {
    const newLang = event.target.value;
    if (languageImports[newLang]) {
      await languageImports[newLang]();
    }
    monaco.editor.setModelLanguage(editor.getModel(), newLang);
  });
