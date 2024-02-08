module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      extends: ['@quero/eslint-config-base'],
    },
    {
      files: ['*.ts'],
      extends: ['@quero/eslint-config-typescript'],
      parserOptions: {
        project: [
          './tsconfig.json',
          './server/tsconfig.json',
        ],
      },
    },
    {
      files: ['*.vue'],
      extends: [
        '@quero/eslint-config-typescript',
        '@quero/eslint-config-vue',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        project: [
          './tsconfig.json',
          './server/tsconfig.json',
        ],
      },
      rules: {
        'vue/component-name-in-template-casing': [
          'error',
          'PascalCase',
          {
            registeredComponentsOnly: true,
            ignores: [],
          },
        ],
      },
    },
    {
      // These pages are not used directly by users so they can have one-word names.
      files: [
        '**/pages/**/*.{ts,vue}',
        '**/layouts/**/*.{ts,vue}',
        '**/app.{ts,vue}',
        '**/error.{ts,vue}',
      ],
      rules: { 'vue/multi-word-component-names': 'off' },
    },
    {
      // Pages and layouts are required to have a single root element if transitions are enabled.
      files: ['**/pages/**/*', '**/layouts/**/*'],
      rules: { 'vue/no-multiple-template-root': 'error' },
    },
  ],
};
