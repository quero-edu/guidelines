import {
  createRegexForNodeModules,
  createRegexForProjectModules,
} from '../regex-parses';

describe('The regex of rule only-project-modules work correctly', () => {
  describe('when node modules match correctly', () => {
    const nodeModules = ['vue', 'vuex'];

    const regexForNodeModules = createRegexForNodeModules(nodeModules);

    it('project modules match returns true', () => {
      const correctPathsToTest = [
        'vue',
        'vue/utils.js',
        'vue/dist/internal-module.js',
      ];

      correctPathsToTest.map((path) => {
        const result = regexForNodeModules.some(rule => rule.test(path));
        expect(result).toBeTruthy();
      });
    });

    it('project modules match returns false', () => {
      const wrongPathsToTest = ['vue-router', 'vue-components', 'jquery'];

      wrongPathsToTest.map((path) => {
        const result = regexForNodeModules.some(rule => rule.test(path));
        expect(result).toBeFalsy();
      });
    });
  });

  describe('when project modules match correctly', () => {
    const projectModules = ['@database', 'example/potato/*', 'potato/*/ok', 'epic/**'];

    const regexForProjectModules = createRegexForProjectModules(projectModules);

    it('project modules match returns true', () => {
      const correctPathsToTest = [
        '@database',
        'example/potato/banana',
        'example/potato',
        'epic/potato/pera',
        'epic/tomato',
        'potato/foi/ok',
      ];

      correctPathsToTest.map((path) => {
        const result = regexForProjectModules.some(rule => rule.test(path));

        expect(result).toBeTruthy();
      });
    });

    it('project modules match returns false', () => {
      const wrongPathsToTest = [
        '@database/fake',
        'example',
        'example/potato/abacate/pera',
        'epico',
        'potato/foi/gg',
      ];

      wrongPathsToTest.map((path) => {
        const result = regexForProjectModules.some(rule => rule.test(path));
        expect(result).toBeFalsy();
      });
    });
  });
});
