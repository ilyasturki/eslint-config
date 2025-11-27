import type { TypedFlatConfigItem } from "@antfu/eslint-config";

import tsParser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser";

export default function tseslintTypecheck(
  project: string,
): TypedFlatConfigItem {
  return {
    name: "ilyasso/typescript-typecheck",
    files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
    ignores: [
      "eslint.config.ts",
      "**/*.md",
      "**/*.md/*.ts",
      "**/*.md/*.tsx",
      "**/*.md/*.vue",
    ],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        project,
        parser: tsParser,
      },
    },
    rules: {
      "ts/strict-boolean-expressions": "error",
    },
  };
}
