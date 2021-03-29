import {
  createRegexForNodeModules,
  createRegexForProjectModules
} from "../regex-parses";

describe("The regex of rule only-project-modules work correctly", () => {
  const nodeModules = [
    'vue',
    'vuex',
  ];

  it("node modules regex match correctly", () => {
    const regexForNodeModules = createRegexForNodeModules(nodeModules);

    const correctPathsToTest = ['vue', 'vue/utils.js', 'vue/dist/internal-module.js'];
    const wrongPathsToTest = ['vue-router', 'vue-components', 'jquery'];

    correctPathsToTest.map(path => {
      expect(regexForNodeModules.some(rule => rule.test(path))).toBeTruthy();
    });

    wrongPathsToTest.map(path => {
      expect(regexForNodeModules.some(rule => rule.test(path))).toBeFalsy();
    });
  });
});
