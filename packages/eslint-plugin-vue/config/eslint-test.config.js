'use strict';

const { RuleTester } = require('eslint');

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
});

module.exports = { tester };
