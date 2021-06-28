module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true,
    },
  },
  extends: [
    '@quero/base',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
  },
};

