import type { TypedFlatConfigItem } from "@antfu/eslint-config";

export default {
  name: "ilyasso/comments",
  files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
  rules: {
    // 'eslint-comments/disable-enable-pair': 'warn',
    "eslint-comments/no-unused-disable": "warn",
    "eslint-comments/no-unlimited-disable": "off",
  },
} as TypedFlatConfigItem;
