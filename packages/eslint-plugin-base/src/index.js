
const { onlyProjectModules } = require('./rules/only-project-modules');

module.exports = {
  rules: {
    'only-project-modules': onlyProjectModules,
  },
};
