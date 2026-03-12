import {getExtension} from '../index';

import {API_VERSION} from '../api-version';
import {createTestSandbox, type TestSandbox} from './helpers';

describe('getExtension', () => {
  let sandbox: TestSandbox;

  beforeEach(() => {
    sandbox = createTestSandbox();
  });

  afterEach(() => {
    sandbox.destroy();
  });

  it('finds shopify.extension.toml in the given directory', () => {
    sandbox.placeToml({inDir: 'root'});
    expect(() =>
      getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      }),
    ).not.toThrow();
  });

  it('finds shopify.extension.toml in a parent directory', () => {
    sandbox.placeToml({inDir: 'root'});
    expect(() =>
      getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tomlDirs.subDir,
      }),
    ).not.toThrow();
  });

  it('finds shopify.extension.toml two parents up', () => {
    sandbox.placeToml({inDir: 'root'});
    expect(() =>
      getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tomlDirs.nestedSubDir,
      }),
    ).not.toThrow();
  });

  it('throws if shopify.extension.toml cannot be found', () => {
    expect(() =>
      getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      }),
    ).toThrow(/Could not find shopify\.extension\.toml/);
  });

  it('imports and executes the module specified by the toml', async () => {
    sandbox.placeToml();
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    expect(await extension.render()).toBeUndefined();
  });

  it('fails if the module cannot be imported', async () => {
    sandbox.placeToml({module: './fixtures/nonexistent-module.js'});
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    await expect(extension.render()).rejects.toThrow(/Cannot find module/);
  });

  it('throws if the TOML api_version does not match the library version', () => {
    sandbox.placeToml({apiVersion: '2020-01'});
    expect(() =>
      getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      }),
    ).toThrow(
      new RegExp(`api_version "2020-01" does not match.*"${API_VERSION}"`),
    );
  });

  describe('extension.shopify proxy', () => {
    beforeEach(() => {
      sandbox.placeToml();
    });

    it('throws when accessing shopify before calling setUp', () => {
      const extension = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });
      expect(() => {
        // eslint-disable-next-line @babel/no-unused-expressions
        extension.shopify;
      }).toThrow(/setUp\(\)/);
    });

    it('throws when getting a property that does not exist', () => {
      const extension = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });
      extension.setUp();

      expect(() => {
        // @ts-expect-error - nonExistentProp does not exist on the API
        // eslint-disable-next-line @babel/no-unused-expressions
        extension.shopify.nonExistentProp;
      }).toThrow(/nonExistentProp.*does not exist/);
    });

    it('throws when setting a property that does not exist', () => {
      const extension = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });
      extension.setUp();

      expect(() => {
        // @ts-expect-error - nonExistentProp does not exist on the API
        extension.shopify.nonExistentProp = 'value';
      }).toThrow(/nonExistentProp.*does not exist/);
    });

    it('allows getting a property that exists', () => {
      const extension = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });
      extension.setUp();

      expect(() => {
        // eslint-disable-next-line @babel/no-unused-expressions
        extension.shopify.appMetafields;
      }).not.toThrow();
    });

    it('allows setting a property that exists', () => {
      const extension = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });
      extension.setUp();

      expect(() => {
        extension.shopify.appMetafields = {
          current: {value: [], subscribe: () => () => {}},
        } as any;
      }).not.toThrow();
    });

    it('throws on nested non-existent property access', () => {
      const extension = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });
      extension.setUp();

      expect(() => {
        // @ts-expect-error - bogus does not exist
        // eslint-disable-next-line @babel/no-unused-expressions
        extension.shopify.appMetafields.bogus;
      }).toThrow(/bogus.*does not exist/);
    });
  });
});
