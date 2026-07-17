import {getExtension} from '../index';

import {createTestSandbox, type TestSandbox} from './helpers';

describe('POS capabilities mocks', () => {
  let sandbox: TestSandbox;

  beforeEach(() => {
    sandbox = createTestSandbox();
  });

  afterEach(() => {
    sandbox.destroy();
  });

  it('provides an empty capabilities signal for standard targets', () => {
    sandbox.placeToml({target: 'pos.home.tile.render'});
    const extension = getExtension('pos.home.tile.render', {
      configSearchDir: sandbox.tempDir,
    });

    extension.setUp();

    expect(extension.shopify.capabilities.value).toStrictEqual([]);
  });

  it('provides an empty capabilities signal for data targets', () => {
    sandbox.placeToml({target: 'pos.app.ready.data'});
    const extension = getExtension('pos.app.ready.data', {
      configSearchDir: sandbox.tempDir,
    });

    extension.setUp();

    expect(extension.shopify.capabilities.value).toStrictEqual([]);
  });
});
