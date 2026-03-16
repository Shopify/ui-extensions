import {setUpExtension, SymbolDispose} from '../index';

import {createTestSandbox, type TestSandbox} from './helpers';

describe('setUpExtension', () => {
  let sandbox: TestSandbox;

  beforeEach(() => {
    sandbox = createTestSandbox();
    sandbox.placeToml();
  });

  afterEach(() => {
    sandbox.destroy();
  });

  it('calls setUp and returns a ready extension', () => {
    const extension = setUpExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    // shopify global should be available without calling setUp manually
    expect(extension.shopify).toBeDefined();
    expect(extension.shopify.extension.apiVersion).toBeDefined();
  });

  it('tears down when Symbol.dispose is called', () => {
    const extension = setUpExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    expect((globalThis as any).shopify).toBeDefined();
    extension[SymbolDispose]();
    expect((globalThis as any).shopify).toBeUndefined();
  });

  it('supports repeated setUp/tearDown cycles via setUpExtension', () => {
    // First cycle
    const ext1 = setUpExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    expect((globalThis as any).shopify).toBeDefined();
    ext1[SymbolDispose]();
    expect((globalThis as any).shopify).toBeUndefined();

    // Second cycle (reuses cached Extension)
    const ext2 = setUpExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    expect((globalThis as any).shopify).toBeDefined();
    ext2[SymbolDispose]();
    expect((globalThis as any).shopify).toBeUndefined();
  });
});
