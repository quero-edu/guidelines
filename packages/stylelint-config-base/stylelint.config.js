// @ts-check
/** @type {import('stylelint').Config} */
export default {
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  customSyntax: 'postcss-scss',
  extends: [
    'stylelint-config-standard-scss',
  ],
  rules: {
    'annotation-no-unknown': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'block-no-empty': true,
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'declaration-no-important': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-name-case': 'lower',
    'function-no-unknown': null,
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'media-feature-name-no-unknown': true,
    'media-query-no-invalid': null,
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': [true, {
      ignoreAtRules: ['use', 'forward'],
    }],
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'property-no-unknown': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'selector-class-pattern': ['^[a-z][a-z0-9-]*(__[a-z0-9-]*)?(--[a-z0-9-]*)?$', {
      message: 'Expected "%s" to match BEM pattern. See https://getbem.com/naming/',
    }],
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',

    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          'config',
        ],
      },
    ],

    'comment-no-empty': null,
    'scss/comment-no-empty': true,

    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-if-no-null': true,
    'scss/at-import-partial-extension': 'never',
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/function-quote-no-quoted-strings-inside': true,
    'scss/function-unquote-no-unquoted-strings-inside': true,
    'scss/load-no-partial-leading-underscore': true,
    'scss/no-duplicate-mixins': true,
    'scss/no-global-function-names': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
        'selector-pseudo-class-no-unknown': [true, {
          ignorePseudoClasses: ['deep', 'global', 'slotted'],
        }],
        'selector-pseudo-element-no-unknown': [true, {
          ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
        }],
      },
    },
  ],
};
