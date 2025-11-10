const vitest = require("eslint-plugin-vitest");
module.exports = {
  globals: {
    ...vitest.environments.env.globals,
    process: "readonly",
  },
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:vitest/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@typescript-eslint", "unused-imports"],
  rules: {
    "react-refresh/only-export-components": [
      "off",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": "error",

    "unused-imports/no-unused-imports-ts": "error",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
