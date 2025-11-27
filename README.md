# @ilyasso/eslint-config

> Opinionated ESLint configuration for TypeScript, Vue, and Nuxt projects

A strict and opinionated ESLint configuration built on top of [@antfu/eslint-config](https://github.com/antfu/eslint-config). The goal of this configuration is to provide a specific set of rules and conventions that are tailored to the needs of TypeScript projects with Vue 3, Nuxt, and modern tooling.

## Features

- **TypeScript-first** - Opt-in type checking with TypeScript
- **Vue and Nuxt** - Vue 3 optimized, script setup api, Nuxt-specific rules and conventions
- **Import enforcement** - Enforces `~/` and `~~/` aliases over relative `../` paths or `@/` paths
- **Unicorn rules** - All `eslint-plugin-unicorn` rules with sensible overrides
- **Security-first** - Anti-trojan-source protection built-in
- **Flexible overrides** - Easy rule customization with `rules` and `overrides` options
- **Prettier-compatible** - Stylistic rules disabled, use Prettier for formatting
- **Drizzle ORM** - database safety rules (require WHERE clauses)

## Installation

Using Bun (recommended)
```bash
bun add -D @ilyasso/eslint-config eslint typescript
```

Using pnpm
```bash
pnpm add -D @ilyasso/eslint-config eslint typescript
```

Using npm
```bash
npm install -D @ilyasso/eslint-config eslint typescript
```

## Quick Start

### Basic Usage

Create an `eslint.config.ts` (or `.js`) file in your project root:

```typescript
import ilyasso from "@ilyasso/eslint-config";

export default ilyasso();
```

### Advanced Configuration

#### Configuration Options

The `ilyasso()` function accepts an options object with the following properties:

```typescript
interface IlyassoOptions {
  /**
   * TypeScript type-checking configuration
   */
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
   */
  rules?: Record<string, any>;

  /**
   * Additional config objects for advanced customization
   * Can be a single config object or an array of config objects
   */
  overrides?: ConfigObject | ConfigObject[];

  /**
   * Additional options to pass to @antfu/eslint-config
   * (e.g., vue, typescript, markdown, etc.)
   */
  [key: string]: unknown;
}
```

#### Configuration Examples

**Using the `rules` option to override or disable rules:**

```typescript
import ilyasso from "@ilyasso/eslint-config";

export default ilyasso({
  rules: {
    // Disable console warnings in development
    'no-console': 'off',

    // Enforce multi-word component names
    'vue/multi-word-component-names': 'error',

    // Allow magic numbers in specific cases
    'no-magic-numbers': ['warn', { ignore: [-1, 0, 1, 2, 10, 100] }],
  },
});
```

**Using the `overrides` option for file-specific rules:**

```typescript
import ilyasso from "@ilyasso/eslint-config";

export default ilyasso({
  overrides: {
    files: ['*.test.ts', '*.spec.ts'],
    rules: {
      'no-magic-numbers': 'off',
      'no-console': 'off',
    },
  },
});
```

#### Multiple Override Configs

You can pass an array of override configs for different file patterns:

```typescript
import ilyasso from "@ilyasso/eslint-config";

export default ilyasso({
  overrides: [
    {
      files: ['*.test.ts', '*.spec.ts'],
      rules: {
        'no-magic-numbers': 'off',
        'no-console': 'off',
      },
    },
    {
      files: ['scripts/**/*.ts'],
      rules: {
        'no-console': 'off',
        'node/prefer-global/process': 'off',
      },
    },
    {
      files: ['*.config.ts', '*.config.js'],
      rules: {
        'no-magic-numbers': 'off',
      },
    },
  ],
});
```

#### TypeScript Type Checking with Nuxt

If you want to enable type checking rules in a Nuxt project, you'll need to create a custom `tsconfig.eslint.json` file. This is required because Nuxt generates its TypeScript configuration dynamically.

Create a `tsconfig.eslint.json` file in your project root:

```json
{
  "extends": "./.nuxt/tsconfig.json",
  "include": [
    "app/**/*",
    "server/**/*",
    "shared/**/*",
    "*.ts",
    "*.vue"
  ],
  "exclude": [
    "node_modules",
    ".nuxt",
    ".output",
    "dist"
  ]
}
```

Then reference it in your ESLint configuration:

```typescript
import ilyasso from "@ilyasso/eslint-config";

export default ilyasso({
  typecheck: {
    enable: true,
    project: "./tsconfig.eslint.json",
  },
});
```

## Requirements

- **TypeScript** >= 5.0.0 (required)
- **ESLint** >= 9.0.0 (required)
- **Node.js** >= 24.0.0 (recommended)

**Note:** This package is designed for TypeScript projects only. JavaScript projects are not supported.

## Recommended Setup

### With Prettier

This config disables all stylistic rules to avoid conflicts with Prettier. Install Prettier separately:

```bash
bun add -D prettier
```

### Package Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint",
    "lint:fix": "eslint --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

## License

[MIT](./LICENSE) © 2025 [Ilyas Turki](https://github.com/ilyasso)

## Credits

Built on top of [@antfu/eslint-config](https://github.com/antfu/eslint-config) by [Anthony Fu](https://github.com/antfu).

## Contributing

Issues and pull requests are welcome! This is a personal configuration but feedback is appreciated.
