# `@quero/eslint-config-vue`

When using this, you should add to the `eslintrc` in the extends the recommended version of the vue you are using:

```javascript
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/vue-recommended', // if you are still using vue 2
    '@quero/eslint-config-vue',
    'plugin:vuejs-accessibility/recommended',
  ],
  plugins: [
    '@quero/vue',
    'vuejs-accessibility',
  ],
}
```

vuejs-accessibility is not automatically installed with @quero/eslint-config-vue, but it's highly recommended to also use it.

## Rules

This package inherits all configurations from `@quero/eslint-config-base`.
