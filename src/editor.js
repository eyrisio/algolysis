import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js";
import "monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution.js";
import "monaco-editor/esm/vs/basic-languages/java/java.contribution.js";
import "monaco-editor/esm/vs/basic-languages/python/python.contribution.js";

const editor = monaco.editor.create(document.getElementById("code-area"), {
  value: "// Type your code here...",
  language: "javascript", // default languages for now are just js, cpp, java, python
  theme: "vs-dark",
  automaticLayout: true,
  minimap: {
    enabled: false,
  },
});

document
  .getElementById("language-selector")
  .addEventListener("change", (event) => {
    const newLang = event.target.value;
    monaco.editor.setModelLanguage(editor.getModel(), newLang);
  });

document.addEventListener("htmx:configRequest", () => {
  document.getElementById("hidden-code").value = editor.getValue();
  document.getElementById("hidden-language").value =
    document.getElementById("language-selector").value;
});
