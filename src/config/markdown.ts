import type { TypedFlatConfigItem } from "@antfu/eslint-config";

export default {
  name: "ilyasso/markdown",
  files: ["**/*.md", "**/*.md/**"],
  rules: {
    "markdown/fenced-code-language": "error",
    "markdown/heading-increment": "error",
    "markdown/no-duplicate-definitions": "error",
    "markdown/no-empty-definitions": "error",
    "markdown/no-empty-images": "error",
    "markdown/no-empty-links": "error",
    "markdown/no-invalid-label-refs": "error",
    "markdown/no-missing-atx-heading-space": "error",
    "markdown/no-missing-label-refs": "error",
    "markdown/no-missing-link-fragments": "error",
    "markdown/no-multiple-h1": "error",
    "markdown/no-reference-like-urls": "error",
    "markdown/no-reversed-media-syntax": "error",
    "markdown/no-space-in-emphasis": "error",
    "markdown/no-unused-definitions": "error",
    "markdown/require-alt-text": "error",
    "markdown/table-column-count": "error",

    "ts/no-unused-vars": "off",
    "unicorn/filename-case": "off",
    "import/no-duplicates": "off",
    "no-duplicate-imports": "off",
    "import/first": "off",
    "no-magic-numbers": "off",
    "ts/no-magic-numbers": "off",
  },
} as TypedFlatConfigItem;
