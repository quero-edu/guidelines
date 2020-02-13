module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    './index',
  ].map(require.resolve),
  rules: {},
}
