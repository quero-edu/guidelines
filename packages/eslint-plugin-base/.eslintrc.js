module.exports = {
  env: { node: true, jest: true },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11,
  },
  extends: [
    '@quero/eslint-config-base',
  ],
};
