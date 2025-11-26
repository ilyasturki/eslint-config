import type { TypedFlatConfigItem } from "@antfu/eslint-config";
import antiTrojanPlugin from "eslint-plugin-anti-trojan-source";

export default {
  name: "ilyasso/security",
  plugins: {
    "anti-trojan-source": antiTrojanPlugin,
  },
  rules: {
    ...antiTrojanPlugin.configs.recommended.rules,
  },
} as TypedFlatConfigItem;
