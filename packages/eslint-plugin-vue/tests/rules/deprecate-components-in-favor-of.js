'use strict';

const rule = require('../../src/rules/deprecate-components-in-favor-of');
const { tester } = require('../tester');

tester.run('deprecate-components-in-favor-of', rule, {
  valid: [
    { // without any options it pass
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
    { // with a configuration that is valid
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
      options: [{
        deprecate: {
          'unused-component': 'cooler-component',
          'AlsoUnusedComponentButInPascal': 'cooler-component',
        },
      }],
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
    { // Pass in files that are not .vue files
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
          <UnregisteredComponent></UnregisteredComponent>
        </template>
        <script>
        export default {
          components: {
            CoolComponent
          }
        }
        </script>
      `,
      options: [{
        deprecate: {
          'UnregisteredComponent': 'cool-component',
          'cool-component': 'cooler-component',
        },
      }],
      errors: [{
        message: 'Component "CoolComponent" is deprecated, please use "cooler-component" instead',
        line: 4,
        endLine: 4,
        column: 11,
        endColumn: 25,
      }, {
        message: 'Component "cool-component" is deprecated, please use "cooler-component" instead',
        line: 5,
        endLine: 5,
        column: 11,
        endColumn: 26,
      }, {
        message: 'Component "unregistered-component" is deprecated, please use "cool-component" instead',
        line: 6,
        endLine: 6,
        column: 11,
        endColumn: 34,
      }, {
        message: 'Component "UnregisteredComponent" is deprecated, please use "cool-component" instead',
        line: 9,
        column: 11,
        endLine: 9,
        endColumn: 33,
      }, {
        message: 'Component "UnregisteredComponent" is deprecated, please use "cool-component" instead',
        line: 10,
        column: 11,
        endLine: 10,
        endColumn: 33,
      }],
    },
  ],
});
