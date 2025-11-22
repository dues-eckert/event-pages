/** @type {import("prettier").Config} */
export default {
  // Global settings
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  endOfLine: 'lf',
  bracketSpacing: true,

  plugins: ['prettier-plugin-astro'],

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.jsonc', '*.json'],
      options: {
        parser: 'jsonc',
        trailingComma: 'none',
        semi: false,
      },
    },
  ],
};
