'use strict';

const rule = require('../../src/rules/template-kebab-name-for-unregistered-components');
const RuleTester = require('eslint').RuleTester;

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
});

tester.run('template-kebab-name-for-unregistered-components', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: `
        <template>
          <!-- ✓ GOOD -->
          <CoolComponent />
          <cool-component />
          <unregistered-component />
          <div></div>
          <h1></h1>
          <svg></svg>
        </template>
        <script>
        export default {
          components: {
            CoolComponent
          }
        }
        </script>
      `,
    },
  ],
  invalid: [
    {
      filename: 'test.vue',
      code: `
        <template>
          <!-- ✓ GOOD -->
          <CoolComponent />
          <cool-component />
          <unregistered-component />

          <!-- ✗ BAD -->
          <UnregisteredComponent />
        </template>
        <script>
        export default {
          components: {
            CoolComponent
          }
        }
        </script>
      `,
      errors: [{
        message: 'Component name "UnregisteredComponent" is not kebab-case. Name it "unregistered-component" or register it locally',
        line: 9,
        column: 11,
        endLine: 9,
        endColumn: 33,
      }],
      output: `
        <template>
          <!-- ✓ GOOD -->
          <CoolComponent />
          <cool-component />
          <unregistered-component />

          <!-- ✗ BAD -->
          <unregistered-component />
        </template>
        <script>
        export default {
          components: {
            CoolComponent
          }
        }
        </script>
      `,
    },
  ],
});
