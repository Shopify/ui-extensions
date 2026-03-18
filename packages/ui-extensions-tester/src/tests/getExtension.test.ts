import * as fs from 'fs';
import * as path from 'path';

import {getExtension} from '../index';

import {API_VERSION} from '../api-version';
import {createTestSandbox, makeToml, type TestSandbox} from './helpers';

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
    // No toml placed — should throw
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

  it('sets extension.apiVersion on the mock shopify global', () => {
    sandbox.placeToml();
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    expect(extension.shopify.extension.apiVersion).toBe(API_VERSION);
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

  describe('caching', () => {
    it('returns the same instance for the same target and configSearchDir', () => {
      sandbox.placeToml();
      const ext1 = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });
      const ext2 = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });
      expect(ext1).toBe(ext2);
    });

    it('returns different instances for the same target but different configSearchDir', () => {
      sandbox.placeToml({inDir: 'root'});
      sandbox.placeToml({inDir: 'subDir'});
      const ext1 = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });
      const ext2 = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tomlDirs.subDir,
      });
      expect(ext1).not.toBe(ext2);
    });

    it('returns the same instance when configSearchDir resolves to the same path', () => {
      sandbox.placeToml();
      const ext1 = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });
      // Use a path with a redundant segment that resolves to the same directory
      const ext2 = getExtension('purchase.checkout.block.render', {
        configSearchDir: `${sandbox.tempDir}/sub/..`,
      });
      expect(ext1).toBe(ext2);
    });

    it('returns the same instance when configSearchDir is omitted and then explicitly set to the resolved default', () => {
      sandbox.placeToml();
      // When configSearchDir is omitted, it defaults to path.dirname(getCallerFile()).
      // If we then call with that same directory explicitly, we should get the same instance.
      const callerDir = path.dirname(__filename);

      // Place a toml in the caller's directory tree so both calls find it
      const tomlPath = path.join(callerDir, 'shopify.extension.toml');
      fs.writeFileSync(tomlPath, makeToml());

      try {
        const ext1 = getExtension('purchase.checkout.block.render');
        const ext2 = getExtension('purchase.checkout.block.render', {
          configSearchDir: callerDir,
        });
        expect(ext1).toBe(ext2);
      } finally {
        fs.unlinkSync(tomlPath);
      }
    });

    it('returns different instances for different targets', () => {
      sandbox.placeToml({
        target: 'purchase.checkout.block.render',
      });
      const ext1 = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });

      sandbox.placeToml({target: 'pos.home.tile.render'});
      const ext2 = getExtension('pos.home.tile.render', {
        configSearchDir: sandbox.tempDir,
      });

      expect(ext1).not.toBe(ext2);
    });

    it('returns a new instance when the config file changes on disk', () => {
      sandbox.placeToml();
      const ext1 = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });

      // Rewrite the toml — the resolved config file has changed
      sandbox.placeToml();
      const ext2 = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });

      expect(ext1).not.toBe(ext2);
    });
  });
});
