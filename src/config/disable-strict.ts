import type { TypedFlatConfigItem } from "@antfu/eslint-config";

export default {
  name: "ilyasso/strict",
  files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
  rules: {
    "no-await-in-loop": "off",
    "ts/no-magic-numbers": "off",
  },
} as TypedFlatConfigItem;
