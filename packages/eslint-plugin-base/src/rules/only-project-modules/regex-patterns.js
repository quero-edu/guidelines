const secondLevelInfinite = {
  // Replace /*/
  patternToCheck: new RegExp('(\\/)(\\*{1})(\\/)', 'g'),
  patternToReplace: '(?=/).*(?=/)',
};
const firstLevelInfinite = {
  // Replace /*
  patternToCheck: new RegExp('(\\/)(\\*{1})', 'g'),
  patternToReplace: '(((?:/)(?!.*(/)))|$)',
};
const infiniteLevel = {
  // Replace /**
  patternToCheck: new RegExp('(\\/)(\\*{2})', 'g'),
  patternToReplace: '((?:/)|$)',
};
const barsRegex = {
  patternToCheck: new RegExp('\/', 'g'),
  patternToReplace: '\\/',
};
const completePathRegex = {
  patternToReplace: '((?:\\/)|$)',
};

module.exports = {
  barsRegex,
  completePathRegex,
  firstLevelInfinite,
  infiniteLevel,
  secondLevelInfinite,
};
