module.exports = {
  rules: {
    'block-no-empty': true,
    'color-named': 'never',
    'declaration-no-important': true,
    'no-descending-specificity': [true, {
      ignore: ['selectors-within-list']
    }],
  },
};
