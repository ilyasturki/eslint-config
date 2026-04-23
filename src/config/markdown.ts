import type { TypedFlatConfigItem } from "@antfu/eslint-config";

export default {
  name: "ilyasso/markdown",
  files: ["**/*.md", "**/*.md/**"],
  rules: {
    // Antfu applies @eslint/markdown's recommended config but disables these two
    "markdown/fenced-code-language": "error",
    "markdown/no-missing-label-refs": "error",

    "ts/no-unused-vars": "off",
    "unicorn/filename-case": "off",
    "import/no-duplicates": "off",
    "no-duplicate-imports": "off",
    "import/first": "off",
    "no-magic-numbers": "off",
    "ts/no-magic-numbers": "off",
  },
} as TypedFlatConfigItem;
