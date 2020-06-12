# `@quero/eslint-plugin-vue`

This project is for rules that we decided to implement ourselves.

## Developing

For constructing and testing the rule, we can use a tool called [`AST
explorer`](https://astexplorer.net/). The AST stats for an abstract syntax tree
which is a representation of the source code in a programming language.

When accessing the AST explorer, remember to set the transformer to `ESLint v4`
(and the parser to `eslint-babel`, but this should be set automatically once
you choose `ESLint v4`). When this is done, you should see 4 windows in the
explorer:

```
+-[top left]---------------+-[top right]--------------+
| Is used to write a       | Is the explorer of the   |
| source code.             | source code. On hover    |
|                          | you should see the       |
|                          | highlighted parts in     |
|                          | your code.               |
+--------------------------+--------------------------+
| Is the rule.             | Is the output after the  |
|                          | rule, that runs against  |
|                          | the code.                |
|                          |                          |
+-[bottom left]------------+-[bottom right]-----------+
```

The rule window, should export a function that is the rule you are developing.

For more information on how to create your first rule, see [How To Write Your
First ESLint Plugin](https://dev.to/spukas/how-to-write-your-first-eslint-plugin-145).

More resources that are an interesting read before/while:
- [AST for html's template reference](https://github.com/mysticatea/vue-eslint-parser/blob/master/docs/ast.md)
- [Vue's official rules](https://github.com/vuejs/eslint-plugin-vue)
- [ESLint rule tester](https://eslint.org/docs/developer-guide/nodejs-api#ruletester)
- [ESLint doc for configuration](https://eslint.org/docs/user-guide/configuring)

## Rules

### `template-kebab-name-for-unregistered-components`

<details>
<summary>
Enforce the use of kebab-case for naming global components in
<code>&lt;template&gt;</code>.
</summary>

This ensures that we have a clear distinction between components that are
declared locally vs components that we have to search the project for.

</details>

```vue
<template>
  <div>
    <!-- BAD -->
    <GlobalComponent></GlobalComponent>
    <local-component></local-component>

    <!-- GOOD -->
    <global-component></global-component>
    <LocalComponent></LocalComponent>
  </div>
</template>

<script>
const LocalComponent = {
  render(h) {
    return h('div');
  },
};

export default {
  components: {
    LocalComponent,
  },
}
</script>
```
