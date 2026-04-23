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
