import type { TypedFlatConfigItem } from "@antfu/eslint-config";
import eslintConfigPrettier from "eslint-config-prettier";
import antfu from "@antfu/eslint-config";

import antfuLint from "./config/antfu";
import comments from "./config/comments";
import drizzle from "./config/drizzle";
import eslint from "./config/eslint";
import imports from "./config/imports";
import markdown from "./config/markdown";
import node from "./config/node";
import nuxt from "./config/nuxt";
import security from "./config/security";
import tseslint from "./config/tseslint";
import tseslintTypecheck from "./config/tseslint-typecheck";
import unicorn from "./config/unicorn";
import vue from "./config/vue";
import vueOverrides from "./config/vue-overrides";
import disableStrict from "./config/disable-strict";

export interface IlyassoOptions {
  typecheck?: {
    /**
     * Enable TypeScript type-checking rules
     * @default false
     */
    enable: boolean;
    /**
     * Path to TypeScript project configuration file
     * @default './tsconfig.json'
     */
    project?: string;
  };

  /**
   * Enable strict mode, some rules may slow you down
   * @default false
   */
  strict?: boolean;

  /**
   * Enable Drizzle ORM linting rules
   * @default false
   */
  drizzle?: boolean;

  /**
   * Files and directories to ignore
   * @default []
   */
  ignores?: string[];

  /**
   * Override or add specific ESLint rules
   * Applied as the final config, giving it highest priority
   * @example
   * ```ts
   * { rules: { 'no-console': 'off', 'vue/multi-word-component-names': 'error' } }
   * ```
   */
  rules?: TypedFlatConfigItem["rules"];

  /**
   * Additional config objects for advanced customization
   * Can be a single config object or an array of config objects
   * @example
   * ```ts
   * { overrides: { files: ['*.test.ts'], rules: { 'no-magic-numbers': 'off' } } }
   * ```
   */
  overrides?: TypedFlatConfigItem | TypedFlatConfigItem[];

  /**
   * Additional options to pass to @antfu/eslint-config
   */
  [key: string]: unknown;
}

// https://github.com/antfu/eslint-config
export default function ilyasso(options: IlyassoOptions = {}) {
  const {
    typecheck,
    strict: enableStrict = false,
    drizzle: enableDrizzle = false,
    ignores = [],
    rules: userRules,
    overrides: userOverrides,
    ...restOptions
  } = options;

  const {
    enable: enableTypecheck = false,
    project: typecheckProject = "./tsconfig.json",
  } = typecheck ?? {};

  const configs: TypedFlatConfigItem[] = [
    eslint,
    tseslint,
    unicorn,
    vue,
    vueOverrides,
    nuxt,
    antfuLint,
    imports,
    node,
    security,
    markdown,
    comments,
  ];

  if (enableTypecheck) {
    configs.push(tseslintTypecheck(typecheckProject));
  }
  if (enableDrizzle) {
    configs.push(drizzle);
  }
  if (!enableStrict) {
    configs.push(disableStrict);
  }

  if (userOverrides) {
    if (Array.isArray(userOverrides)) {
      configs.push(...userOverrides);
    } else {
      configs.push(userOverrides);
    }
  }

  if (userRules) {
    configs.push({
      name: "ilyasso/user-rules",
      rules: userRules,
    });
  }

  configs.push({
    ...eslintConfigPrettier,
    name: "prettier-compat",
  });

  return antfu(
    {
      stylistic: false,
      vue: {
        a11y: true,
      },
      typescript: true,

      ignores,
      ...restOptions,
    },
    ...configs,
  ).override("antfu/node/rules", {
    rules: {
      "node/prefer-global/process": ["warn", "always"],
    },
  });
}
