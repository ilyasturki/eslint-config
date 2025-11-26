import type { TypedFlatConfigItem } from "@antfu/eslint-config";

export default {
  name: "ilyasso/antfu",
  files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
  rules: {
    "antfu/indent-unindent": "warn",
    "antfu/no-ts-export-equal": "warn",
    "antfu/top-level-function": "warn",
  },
} as TypedFlatConfigItem;
