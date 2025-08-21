import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig } from "eslint/config";

export default defineConfig([
   js.configs.recommended,
   tseslint.configs.recommended,
   pluginReact.configs.flat.recommended,

   {
      files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      languageOptions: {
         globals: globals.browser,
         parser: tseslint.parser,
      },
      settings: {
         react: {
            version: "detect",
         },
      },
      plugins: {
         js,
         css,
         react: pluginReact,
         "unused-imports": unusedImports,
      },
      rules: {
         "react/react-in-jsx-scope": "off",
         "@typescript-eslint/ban-ts-comment": "warn",
         "react/no-deprecated": "off",
         "unused-imports/no-unused-imports": "error",
         "@typescript-eslint/no-unused-vars": "warn",
         "react/display-name": "off",
         "@typescript-eslint/no-explicit-any": 'warn', // Исправлено с eslintreact/display
         // Неиспользуемые переменные (игнорировать, если начинается с _)
         "unused-imports/no-unused-vars": [
            "warn",
            { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
         ],
      },
   },
]);