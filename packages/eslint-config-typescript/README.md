# `@quero/eslint-config-typescript`

## Rules

**arrow-parens:**

```js
// GOOD:
() => {};

a => console.log(a);
(a, b) => console.warn(a, b);
({ a }) => console.warn(a);

(a) => {
  console.log(a);
};

//BAD:
(a) => console.log(a);

a => {
  console.log(a);
}
```

**brace-style:**
**comma-dangle**
**comma-spacing**
**curly**
**eol-last**
**eqeqeq**
**indent**
**key-spacing**
**keyword-spacing**
**no-duplicate-imports**
**no-extra-semi**
**no-multiple-empty-lines**
**no-multi-spaces**
**no-return-await**
**no-trailing-spaces**
**no-undef**
**object-curly-newline**
**object-curly-spacing**
**padding-line-between-statements**
**prefer-const**
**quotes**
**semi**
**space-before-blocks**
**space-in-parens**
**space-infix-ops**
**no-unused-vars**
