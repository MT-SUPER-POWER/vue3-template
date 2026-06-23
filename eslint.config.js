import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default [
  // global ignore
  {
    ignores: ["dist/", "node_modules/"],
  },

  // base JS/TS rules
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,vue}"],
    rules: {
      "no-undef": "off",
    },
  },

  // Vue 3
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["*.vue", "src/**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: "module",
      },
    },
  },

  // disable rules that conflict with Prettier
  prettier,
];
