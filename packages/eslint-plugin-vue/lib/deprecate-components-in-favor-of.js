const kebabcase = require('just-kebab-case');

function normalizeKeysInKebab(object) {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => {
    return [kebabcase(key), value];
  }));
}

module.exports = {
  create(context) {
    const deprecate = normalizeKeysInKebab(
      context.options[0] && context.options[0].deprecate || {},
    );

    let hasTemplateToLint = false;

    // Don't know why this is necessary, but a really respectable open source
    // lib does this token jiggle every time, so...
    const tokens = context.parserServices.getTemplateBodyTokenStore
      && context.parserServices.getTemplateBodyTokenStore();

    return context.parserServices.defineTemplateBodyVisitor({
      VElement(node) {
        if (!hasTemplateToLint) return;

        const name = node.rawName;
        const open = tokens.getFirstToken(node.startTag);

        const kebabName = kebabcase(name);

        if (!Boolean(deprecate[kebabName])) return;

        context.report({
          node: open,
          loc: open.loc,
          message: 'Component "{{current}}" is deprecated, please use "{{substitute}}" instead',
          data: {
            current: name,
            substitute: deprecate[kebabName],
          },
        });
      },
    }, {
      Program(node) {
        hasTemplateToLint = node.hasOwnProperty('templateBody');
      },
    });
  },
};
