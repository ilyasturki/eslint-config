import type { TypedFlatConfigItem } from "@antfu/eslint-config";

export default function node(files: string[]): TypedFlatConfigItem {
  return {
    name: "ilyasso/node",
    files,
    ignores: ["**/drizzle.config.ts"],
    rules: {
      "node/callback-return": "warn",
      "node/file-extension-in-import": ["warn", "never"],
      "node/no-callback-literal": "warn",
      "node/no-extraneous-import": "warn",
      "node/no-process-env": "warn",
      "node/no-process-exit": "warn",
      "node/no-unpublished-bin": "warn",
      "node/no-unpublished-import": "warn",
      "node/prefer-global/text-decoder": "warn",
      "node/prefer-global/url-search-params": "warn",
      "node/prefer-node-protocol": "warn",
      "node/prefer-promises/dns": "warn",
      "node/prefer-promises/fs": "warn",
      "node/hashbang": "warn",
    },
  };
}
