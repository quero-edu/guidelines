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
