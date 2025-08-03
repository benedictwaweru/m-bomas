import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["**/dist/**", "**/node_modules/**"],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,

      parserOptions: {
        project: "./apps/*/tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "@typescript-eslint": ts,
    },
    rules: {
      // Your rules here
    },
  },
];
