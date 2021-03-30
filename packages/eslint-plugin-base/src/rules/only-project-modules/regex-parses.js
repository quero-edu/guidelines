const {
  completePathRegex,
  firstLevelInfinite,
  infiniteLevel,
  barsRegex,
  secondLevelInfinite,
} = require('./regex-patterns');

function simpleParser(path) {
  return new RegExp('^' + path + completePathRegex.patternToReplace);
}

function completeParser(path) {
  let value = path;
  const exactPath = !path.includes('*');

  value = value.replace(
    infiniteLevel.patternToCheck,
    infiniteLevel.patternToReplace,
  ); // Replace /**

  value = value.replace(
    secondLevelInfinite.patternToCheck,
    secondLevelInfinite.patternToReplace,
  ); // Replace /*/

  value = value.replace(
    firstLevelInfinite.patternToCheck,
    firstLevelInfinite.patternToReplace,
  ); // Replace /*

  if (exactPath) value += '$';

  value = value.replace(barsRegex.patternToCheck, barsRegex.patternToReplace); // Replace / to \/

  return new RegExp('^' + value);
}

function createRegexForNodeModules(nodeModulesConfig) {
  return nodeModulesConfig.map(simpleParser);
}

function createRegexForProjectModules(modulesConfig) {
  return modulesConfig.map(completeParser);
}

module.exports = {
  createRegexForNodeModules,
  createRegexForProjectModules,
};
