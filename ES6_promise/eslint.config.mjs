export default [
  {
    files: ["*.js"],  // Apply this configuration to all JS files
    languageOptions: {
      globals: {
        console: "readonly",  // Allow the use of console
        window: "readonly",   // For browser globals
        document: "readonly", // For browser globals
        module: "readonly",   // For Node.js globals
        require: "readonly"   // For Node.js globals
      }
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "off"
    }
  }
];