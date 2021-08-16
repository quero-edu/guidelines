# Guidelines
_The definitive Quero Education code-style guide._  


This project is intended to centralize and standardize the code guidelines of our many projects with different stacks.  
Checkout all of our available guidelines and linter configurations:
- [Javascript (base)](packages/eslint-config-base/)
  - [Typescript](packages/eslint-config-typescript/)  
  - [React](packages/eslint-config-react/)  
  - [Vue](packages/eslint-config-vue/)  
- [CSS](docs/css.md)
- [Ruby](docs/ruby.md)

## Usage
### Javascript
All of our javascript code-style guides extends from `eslint-config-base`. In order to use a specific `eslint-config` just add it to your `.eslintrc.js`. Example:
```js
  'extends': [
    '@quero/eslint-config-typescript',
  ],
```

### CSS
Smiliar to javascript, just add the `stylelint-config-base` to your `.stylelintrc.js`:
```js
module.exports = {
  extends: '@quero/stylelint-config-base',
};
```

### Ruby
Add the [Rubocop](../packages/ruby/.rubocop.yml) gem configuration to the project.

## Contributing
We encourage you to open a PR/issue if you want to add or change a rule on one of our linters.  
Before releasing your changes, check the [CONTRIBUTING.md](CONTRIBUTING.md) to bump the version correctly.
