import type { TypedFlatConfigItem } from "@antfu/eslint-config";
// @ts-expect-error no typescript declaration
import drizzlePlugin from "eslint-plugin-drizzle";

export default {
  // https://github.com/drizzle-team/drizzle-orm/issues/2491
  name: "ilyasso/drizzle",
  files: ["**/*.ts"],
  plugins: {
    drizzle: drizzlePlugin,
  },
  rules: {
    ...drizzlePlugin.configs.all.rules,
    "drizzle/enforce-update-with-where": [
      "error",
      {
        drizzleObjectName: ["db", "database"],
      },
    ],
    "drizzle/enforce-delete-with-where": [
      "error",
      {
        drizzleObjectName: ["db", "database"],
      },
    ],
  },
} as TypedFlatConfigItem;
