import testGlobals from './utils/globals';
import fs from 'fs';

const sharedTestPath = './src/tests/shared-tests';

function grabAndRun(filePath) {
  return new Promise((resolve) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if(err) resolve(false);
      eval(data);
      resolve(true);
    });
  });
}

describe('Running jest with Globals', () => {
  beforeAll(() => {
    window.testUtils = testGlobals;
  }, 1)

  it('runs a test', () => {
    window.testUtils.expectEquals(1+1, 2);
  });

  it('loads js file and evals it to run global tests methods', async () => {
    const passed = await grabAndRun(`${sharedTestPath}/temp/index.js`);
    expect(passed).toEqual(true);
  })

  it('loads js file and evals it to render a component with scarlet and run global tests methods', async () => {
    const passed = await grabAndRun(`${sharedTestPath}/button/test.js`);
    expect(passed).toEqual(true);
  })
});
