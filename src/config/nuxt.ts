import type { TypedFlatConfigItem } from "@antfu/eslint-config";
import pluginNuxt from "@nuxt/eslint-plugin";

export default {
  name: "nuxt",
  plugins: {
    nuxt: pluginNuxt,
  },
  rules: {
    "nuxt/prefer-import-meta": "error",
  },
} as TypedFlatConfigItem;
