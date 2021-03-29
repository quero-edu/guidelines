const readPkgUp = require("read-pkg-up");

const {
  createRegexForNodeModules,
  createRegexForProjectModules
} = require("./regex-parses");

const onlyProjectMdules = {
  create(context) {
    const options = context.options[0] || {};
    const packageJson = readPkgUp.sync({
      cwd: context.getFilename(),
      normalize: false
    }).packageJson;

    const {
      nodeModulesConfig,
      projectModulesConfig,
      customModulesConfig
    } = options.allow;

    const nodeModules = [
      ...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.devDependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {})
    ].concat(nodeModulesConfig);

    const nodeModulesRegex = createRegexForNodeModules(nodeModules);
    const projectModulesRegex = createRegexForProjectModules(
      projectModulesConfig
    );
    const customModulesRegex = createRegexForProjectModules(
      customModulesConfig
    );

    function isRelative(value) {
      return value.startsWith("./") || value.startsWith("../");
    }

    function isNodeModule(value) {
      return nodeModulesRegex.some(rule => rule.test(value));
    }

    function isProjecModule(value) {
      return projectModulesRegex.some(rule => rule.test(value));
    }

    function isCustomModule(value) {
      return customModulesRegex.some(rule => rule.test(value));
    }

    return {
      ImportDeclaration(node) {
        const value = node.source.value;

        if (isRelative(value)) return null;

        if (isNodeModule(value)) return null;

        if (isProjecModule(value)) return null;

        if (isCustomModule(value)) return null;

        context.report(node, `Use of module not allowed: ${node.source.value}`);
      }
    };
  }
};

module.exports = { onlyProjectMdules };
