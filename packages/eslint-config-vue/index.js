module.exports = {
  extends: [
    '@quero/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'plugin:vuejs-accessibility/recommended',
  ],
  plugins: [
    'vue',
    'vuejs-accessibility',
    '@quero/vue',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'vue/html-closing-bracket-newline': [
      'error',
      {
        'singleline': 'never',
        'multiline': 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        'singleline': 1,
        'multiline': 1,
      },
    ],
    'vue/no-v-html': ['off'],
    'vue/object-curly-spacing': ['error', 'always'],
  },
};
