# `@quero/eslint-config-react`

## Usage

```bash
npm install --save-dev @quero/eslint-config-react

cat <<EOF > .eslintrc.js
module.exports = {
    extends: [
        '@quero/eslint-config-react',
    ],
};
EOF
```

## Rules

This package extends all of the below described:

```js
  extends: [
    '@quero/base',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:jsx-a11y/recommended',
  ],
```

### `react/jsx-max-props-per-line`

```jsx
// GOOD
<BaseStep
    payment={payment}
    onSubmit={onSubmit}
    onRequestError={onRequestError}
/>

// BAD
<BaseStep payment={payment} onSubmit={onSubmit} onRequestError={onRequestError} />
```
