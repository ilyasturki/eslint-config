import type { TypedFlatConfigItem } from "@antfu/eslint-config";

export default {
  name: "ilyasso/comments",
  files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
  rules: {
    "eslint-comments/no-unlimited-disable": "warn",
  },
} as TypedFlatConfigItem;
