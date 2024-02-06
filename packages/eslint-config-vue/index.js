module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vuejs-accessibility/recommended',
  ],
  plugins: [
    'vue',
    'vuejs-accessibility',
    '@quero/vue',
  ],
  parser: 'vue-eslint-parser',
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
