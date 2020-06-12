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
    {
      filename: 'test.vue',
      code: `
        <template>
          <!-- ✓ GOOD -->
          <cool-component />
          <unregistered-component />
          <div></div>
          <h1></h1>
          <svg></svg>
        </template>
        <script>
        export default {
          name: 'what-ever',
        }
        </script>
      `,
    },
    {
      filename: 'test.vue',
      code: `
        <template>
          <!-- ✓ GOOD -->
          <cool-component />
          <unregistered-component />
          <div></div>
          <h1></h1>
          <svg></svg>
        </template>
        <script>
        const Bla = {
          name: 'what-ever',
        };
        export default Bla;
        </script>
      `,
    },
    {
      filename: 'test.js',
      code: `
        export default function (to, from, savedPosition) {
          // if the returned position is falsy or an empty object,
          // will retain current scroll position.
          let position = false;

          // if no children detected
          if (to.matched.length < 2) {
            // scroll to the top of the page
            position = { x: 0, y: 0 };
          } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
            // if one of the children has scrollToTop option set to true
            position = { x: 0, y: 0 };
          }

          // savedPosition is only available for popstate navigations (back button)
          if (savedPosition) {
            position = savedPosition;
          }

          if ((from.name === 'cpdp' || from.name === 'pdp') && to.name === 'pdp') {
            position = false;
          }

          return new Promise((resolve) => {
            // wait for the out transition to complete (if necessary)
            window.$nuxt.$once('triggerScroll', () => {
              // coords will be used if no selector is provided,
              // or if the selector didn't match any element.
              if (to.hash && document.querySelector(to.hash)) {
                // scroll to anchor by returning the selector
                position = { selector: to.hash };
              }

              resolve(position);
            });
          });
        }
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
