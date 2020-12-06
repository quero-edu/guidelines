module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-order'],
  rules: {
    'color-named': 'never',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-no-important': true,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
  },
};
