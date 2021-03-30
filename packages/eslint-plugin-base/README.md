# `@quero/eslint-plugin-base`

This project is for rules that we decided to implement ourselves.

**Content:**
- [Rules](#rules)
- [Developing](#developing)

<a name="rules"></a>
## Rules

Legend:

| icon      | meaning           |
| ----      | -------           |
| :wrench:  | Fixable           |
| :wrench:* | Partially fixable |

### `only-project-modules`

This rule is a helper to create a project directory pattern.

#### Default

```json
{
  "rules": {
    "@quero/eslint-plugin-base/only-project-modules": ["warn"]
    // All node_modules declared in package.json will be allowed by default
  }
}
```

For example, imagine you want a specific directory structure:

```shell
  .
  ├── exact-path-wanted
  │   └── index.js
  ├── my-dynamic-path-with-one-sub-level
  │   ├── index.js
  │   └── ok.js
  ├── my-full-allowed-sub-level
  │   └── module
  │       └── ok.js
  └── potato
      ├── fries
      │   └── ok
      │       └── index.js
      └── randon-path
          └── index.js
```

The rule will force this pattern in the import statements.

Example of config:

```json
{
  "rules": {
    "@quero/eslint-plugin-base/only-project-modules": ["warn", {
      "allow": {
        "projectModulesConfig": [
          "exact-path-wanted",
          "my-dynamic-path-with-one-sub-level/*",
          "my-full-allowed-sub-level/module/**"
        ],
        "nodeModulesConfig": [
          "my-specific-module-not-registred-in-package",
        ],
        "customModulesConfig": [
          "potato/**",
        ],
      }
    }]
  }
}
```

#### Behavior:

```js
    // BAD
    import mySpecificModuleNotRegistred from 'my-specific-module-totally-not-registred';
    import 'exact-path-wanted/but-not-allowed';
    import notAllowed from 'my-full-allowed-sub-level/bad-path';

    // GOOD
    import mySpecificModuleNotRegistredInPackage from 'my-specific-module-not-registred-in-package';
    import 'exact-path-wanted';
    import Ok from 'my-full-allowed-sub-level/ok';
    import allowedOk from 'my-full-allowed-sub-level/module/ok';
    import allowed from 'my-full-allowed-sub-level/module';
    import fries from 'potato/fries/now';
```

#### Paths Config:
- "`path` - To allow the exact path.
- "`path/*`" - To allow all modules with one specified level.
- "`path/**`" - To allow all submodules.
- "`path/*/submodule`" - To allow all intermediary modules, but only one submodule.

<a name="developing"></a>
## Developing

For more information on how to create your first rule, see [How To Write Your First ESLint Plugin](https://dev.to/spukas/how-to-write-your-first-eslint-plugin-145).

More resources that are an interesting read before/while:
- [ESLint rule tester](https://eslint.org/docs/developer-guide/nodejs-api#ruletester)
- [ESLint doc for configuration](https://eslint.org/docs/user-guide/configuring)
