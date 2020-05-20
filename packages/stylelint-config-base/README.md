# `@quero/stylelint-config-base`

## Rules

*`block-no-empty`*

https://stylelint.io/user-guide/rules/block-no-empty

The following patterns are considered violations:

```css
/**
 * BAD
 */

a {}
a { }
@media print {
  a {}
}

/**
 * GOOD
 */

a {
  /* foo */
}
@media print {
  a {
    color: pink;
  }
}
```

*`block-no-empty`*

https://stylelint.io/user-guide/rules/block-no-empty

The following patterns are considered violations:

```css
/**
 * BAD
 */

a { color: black; }
a { color: white; }

/**
 * GOOD
 */

a { color: #000; }
a { color: rgb(0, 0, 0); }
a { color: var(--white); }
```

