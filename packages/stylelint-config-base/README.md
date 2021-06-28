# `@quero/stylelint-config-base`

Try avoiding [ignoring rules](https://stylelint.io/user-guide/ignore-code).

## Usage

```bash
npm install --save-dev @quero/stylelint-config-base

cat <<EOF > .stylelintrc.js
module.exports = {
    extends: 'stylelint-config-standard'
}
EOF
```

## Rules

*`block-no-empty`*

https://stylelint.io/user-guide/rules/block-no-empty

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

*`declaration-no-important`*

https://stylelint.io/user-guide/rules/declaration-no-important

```css
/**
 * BAD
 */

a { color: pink !important; }
a { color: pink ! important; }
a { color: pink!important; }

/**
 * GOOD
 */

a { color: pink; }
```

*`no-descending-specificity`*

https://stylelint.io/user-guide/rules/no-descending-specificity

```css
/**
 * BAD
 */

b a {}
a {}
a + a {}
a {}
b > a[foo] {}
a[foo] {}
a {
  & > b {}
}
b {}
@media print {
  #c a {}
  a {}
}

/**
 * GOOD
 */

a {}
b a {}
a {}
a + a {}
a[foo] {}
b > a[foo] {}
b {}
a {
  & > b {}
}
a::before {}
a:hover::before {}
a {}
a:hover {}
@media print {
  a {}
  #c a {}
}
a {}
@media print {
  #baz a {}
}
```

*`selector-max-specificity`*

https://stylelint.io/user-guide/rules/selector-max-specificity

```css
/**
 * BAD
 */

#foo {}
.foo .baz .bar {}
.foo .baz {
  & .bar {}
}
.foo {
  color: red;
  @nest .baz .bar & {
    color: blue;
  }
}

/**
 * GOOD
 */

.foo {}
.foo__bar {
.foo__bar--baz {}
```
