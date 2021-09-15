module.exports = {
  extends: [
    '@quero/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      { 'selector': 'typeLike', 'format': ['PascalCase'] },
      { 'selector': 'variableLike', 'format': ['camelCase'] },
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'custom': { 'regex': '^I[A-Z]', 'match': false },
      }
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'complexity': 'warn',
    'constructor-super': 'error',
    'eqeqeq': [
      'error',
      'smart',
    ],
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined',
    ],
    'id-match': 'error',
    'max-classes-per-file': [
      'error',
      1,
    ],
    'new-parens': 'error',
    'no-underscore-dangle': 'error',
    'no-unused-labels': 'error',
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never',
    ],
    'valid-typeof': 'off',
    'use-isnan': 'error',

    // these rules conflicts with eslint-base, we are extending with TS implementation
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#extension-rules
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error'],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error'],
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['error'],
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error'],
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],
    'indent': 'off',
    '@typescript-eslint/indent': ['error'],
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': ['error'],
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error'],
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error'],
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': ['error'],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': ['error'],
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error'],
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error'],
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['error'],
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': ['error'],
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': ['error'],
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': ['error'],
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': ['error'],
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': ['error'],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': ['error'],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error'],
    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': ['error'],
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error'],
    'require-await': 'off',
    '@typescript-eslint/require-await': ['error'],
    'return-await': 'off',
    '@typescript-eslint/return-await': ['error'],
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error'],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error'],
  },
};
