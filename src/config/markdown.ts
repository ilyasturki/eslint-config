import type { TypedFlatConfigItem } from "@antfu/eslint-config";

export default {
  name: "ilyasso/markdown",
  files: ["**/*.md", "**/*.md/**"],
  rules: {
    "ts/no-unused-vars": "off",
    "unicorn/filename-case": "off",
    "import/no-duplicates": "off",
    "no-duplicate-imports": "off",
    "import/first": "off",
    "no-magic-numbers": "off",
    "ts/no-magic-numbers": "off",
  },
} as TypedFlatConfigItem;
