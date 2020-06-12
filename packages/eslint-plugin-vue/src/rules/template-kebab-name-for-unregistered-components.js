const HTML_TAG_NAMES = require('html-tag-names');
const SVG_TAG_NAMES = require('svg-tag-names');
const pascalcase = require('pascalcase');
const kebabcase = require('just-kebab-case');

module.exports = {
  create(context) {
    const localregisteredComponents = [];

    // Don't know why this is necessary, but a really respectable open source
    // lib does this token jiggle every time, so...
    const tokens = context.parserServices.getTemplateBodyTokenStore
      && context.parserServices.getTemplateBodyTokenStore();

    return context.parserServices.defineTemplateBodyVisitor({
      VElement(node) {
        const name = node.rawName;
        const open = tokens.getFirstToken(node.startTag);

        if (localregisteredComponents.includes(pascalcase(name))) return;
        if (HTML_TAG_NAMES.includes(name)) return;
        if (SVG_TAG_NAMES.includes(name)) return;

        const kebabcased = kebabcase(name);

        const isKebabCasedAlready = kebabcased === name;
        if (isKebabCasedAlready) return;

        context.report({
          node: open,
          loc: open.loc,
          message: 'Component name "{{name}}", is not kebab-case. Name it "{{kebabcased}}" or register it locally',
          data: { name, kebabcased },
          fix(fixer) {
            const endTag = node.endTag;

            if (!endTag) {
              return fixer.replaceText(open, `<${kebabcased}`);
            }

            const endTagOpen = tokens.getFirstToken(endTag);
            return [
              fixer.replaceText(open, `<${kebabcased}`),
              fixer.replaceText(endTagOpen, `<${kebabcased}`),
            ];
          },
        });
      },
    }, {
      ExportDefaultDeclaration(node) {
        const { properties } = node.declaration;

        const components = properties
          .find(property => property.key.name === 'components')
          .value
          .properties
          .map(component => component.key.name);

        localregisteredComponents.push(...components);
      },
    });
  },
};
