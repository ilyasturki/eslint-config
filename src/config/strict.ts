import type { TypedFlatConfigItem } from "@antfu/eslint-config";

export default {
  name: "ilyasso/strict",
  files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-await-in-loop": "error",
    "no-bitwise": "error",
    "ts/no-magic-numbers": [
      "error",
      {
        ignore: [-1, 0, 1, 2, 10],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],
    "no-param-reassign": ["error", { props: true }],
    "no-underscore-dangle": "error",
    "no-invalid-this": "error",
    "ts/no-shadow": "error",
    "ts/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        minimumDescriptionLength: 10,
      },
    ],
    "ts/consistent-type-definitions": ["error", "interface"],
    "vue/no-console": "error",
  },
} as TypedFlatConfigItem;
