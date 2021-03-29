const {
  completePathRegex,
  firstLevelInfinite,
  infiniteLevel,
  barsRegex,
} = require('./regex-patterns');

function simpleParser(path) {
  return new RegExp('^' + path + completePathRegex.patternToReplace);
}

function completeParser(path) {
  let value = path;
  const hasInfiniteImport = path.includes('**');
  const hasSimpleImport = path.includes('/*');

  if (hasInfiniteImport) {
    value = value.replace(
      infiniteLevel.patternToCheck,
      infiniteLevel.patternToReplace,
    ); // Replace /**
  }

  if (hasSimpleImport) {
    value = value.replace(
      firstLevelInfinite.patternToCheck,
      firstLevelInfinite.patternToReplace,
    ); // Replace /*
  }

  if (!hasInfiniteImport && !hasSimpleImport) value = value + '$';

  value = value.replace(barsRegex.patternToCheck, barsRegex.patternToReplace); // Replace / to \/

  value = new RegExp('^' + value);

  // console.log("\n\n");
  // console.log("Has Infinite import:", hasInfiniteImport);
  // console.log("Path:", path);
  // console.log("Rule:", value);
  // console.log("Test:", value.test(path));
  // console.log(new RegExp(path));
  // return new RegExp('^' + path + '((?:\/)|$)')
  return value;
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
