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

  it('provides an empty capabilities signal and read-only cart for data targets', () => {
    sandbox.placeToml({target: 'pos.app.ready.data'});
    const extension = getExtension('pos.app.ready.data', {
      configSearchDir: sandbox.tempDir,
    });

    extension.setUp();

    expect(extension.shopify.capabilities.value).toStrictEqual([]);
    expect(() => Reflect.get(extension.shopify.cart, 'addLineItem')).toThrow(
      'Property "addLineItem" does not exist',
    );
  });

  it('allows tests to configure granted capabilities', () => {
    sandbox.placeToml({target: 'pos.app.ready.data'});
    const extension = getExtension('pos.app.ready.data', {
      configSearchDir: sandbox.tempDir,
    });

    extension.setUp();
    extension.shopify.capabilities.value = [
      'beforecheckout.error',
      'beforecheckout.warning',
      'beforecheckout.info',
    ];

    expect(extension.shopify.capabilities.value).toStrictEqual([
      'beforecheckout.error',
      'beforecheckout.warning',
      'beforecheckout.info',
    ]);
  });
});
