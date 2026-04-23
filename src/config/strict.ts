import type { TypedFlatConfigItem } from "@antfu/eslint-config";

export default {
  name: "ilyasso/strict",
  files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
  rules: {
    "no-console": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "error",
    "no-magic-numbers": "error",
    "ts/no-magic-numbers": "error",
    "no-param-reassign": ["error", { props: true }],
    "no-underscore-dangle": "error",
    "no-invalid-this": "error",
    "no-shadow": "error",
    "ts/no-shadow": "error",
    "ts/ban-ts-comment": "error",
    "ts/consistent-type-definitions": ["error", "interface"],
    "vue/no-console": "error",
  },
} as TypedFlatConfigItem;
