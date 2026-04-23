declare module "eslint-plugin-drizzle" {
  const plugin: import("eslint").ESLint.Plugin & {
    configs: {
      all: { rules: import("eslint").Linter.RulesRecord };
      recommended: { rules: import("eslint").Linter.RulesRecord };
    };
  };
  export default plugin;
}

declare module "eslint-plugin-anti-trojan-source" {
  const plugin: import("eslint").ESLint.Plugin & {
    configs: {
      recommended: { rules: import("eslint").Linter.RulesRecord };
    };
  };
  export default plugin;
}

declare module "eslint-plugin-promise" {
  const plugin: import("eslint").ESLint.Plugin & {
    configs: {
      recommended: { rules: import("eslint").Linter.RulesRecord };
      "flat/recommended": { rules: import("eslint").Linter.RulesRecord };
    };
  };
  export default plugin;
}

declare module "eslint-plugin-security" {
  const plugin: import("eslint").ESLint.Plugin & {
    configs: {
      recommended: { rules: import("eslint").Linter.RulesRecord };
    };
  };
  export default plugin;
}

declare module "eslint-plugin-sonarjs" {
  const plugin: import("eslint").ESLint.Plugin & {
    configs: {
      recommended: { rules: import("eslint").Linter.RulesRecord };
    };
  };
  export default plugin;
}

declare module "eslint-plugin-depend" {
  const plugin: import("eslint").ESLint.Plugin & {
    configs: {
      recommended: { rules: import("eslint").Linter.RulesRecord };
      "flat/recommended": { rules: import("eslint").Linter.RulesRecord };
    };
  };
  export default plugin;
}
