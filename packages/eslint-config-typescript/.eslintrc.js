module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    './index',
  ].map(require.resolve),
  rules: {},
};
