import {getExtension} from '../index';

import {createTestSandbox, type TestSandbox} from './helpers';

describe('extension.fetch', () => {
  let sandbox: TestSandbox;

  beforeEach(() => {
    sandbox = createTestSandbox();
  });

  afterEach(() => {
    sandbox.destroy();
  });

  it('is available on the extension harness for checkout targets', () => {
    sandbox.placeToml({networkAccess: true});
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    expect(extension.fetch).toBeInstanceOf(Function);
    expect(globalThis.fetch).toBe(extension.fetch);
  });

  it('restores the previous globalThis.fetch during tearDown', () => {
    const previousFetch = async () => new Response();
    (globalThis as any).fetch = previousFetch;
    sandbox.placeToml({networkAccess: true});
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    expect(globalThis.fetch).not.toBe(previousFetch);
    extension.tearDown();
    expect(globalThis.fetch).toBe(previousFetch);
  });

  it('removes globalThis.fetch during tearDown when there was no previous fetch', () => {
    delete (globalThis as any).fetch;
    sandbox.placeToml({networkAccess: true});
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    extension.tearDown();
    expect(globalThis.fetch).toBeUndefined();
  });

  it('throws when called if network_access is not enabled in the toml', async () => {
    sandbox.placeToml();
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    await expect(extension.fetch('https://example.com')).rejects.toThrow(
      /network_access.*api_access/,
    );
  });

  it('does not throw when called if api_access is enabled', async () => {
    sandbox.placeToml({apiAccess: true});
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    const response = await extension.fetch('https://example.com');
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
  });

  it('does not throw when called if network_access is enabled', async () => {
    sandbox.placeToml({networkAccess: true});
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    const response = await extension.fetch('https://example.com');
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
  });

  it('syncs globalThis.fetch when extension.fetch is reassigned', () => {
    sandbox.placeToml({networkAccess: true});
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    const customFetch = async () => new Response(null, {status: 418});
    extension.fetch = customFetch as typeof globalThis.fetch;
    expect(globalThis.fetch).toBe(customFetch);
  });

  it('does not remove a pre-existing Response global during tearDown', () => {
    const originalResponse = (globalThis as any).Response;
    const FakeResponse = function FakeResponse() {} as any;
    (globalThis as any).Response = FakeResponse;
    try {
      sandbox.placeToml({networkAccess: true});
      const extension = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });
      extension.setUp();
      extension.tearDown();
      expect(globalThis.Response).toBe(FakeResponse);
    } finally {
      (globalThis as any).Response = originalResponse;
    }
  });

  it('does not remove a pre-existing Request global during tearDown', () => {
    const originalRequest = (globalThis as any).Request;
    const FakeRequest = function FakeRequest() {} as any;
    (globalThis as any).Request = FakeRequest;
    try {
      sandbox.placeToml({networkAccess: true});
      const extension = getExtension('purchase.checkout.block.render', {
        configSearchDir: sandbox.tempDir,
      });
      extension.setUp();
      extension.tearDown();
      expect(globalThis.Request).toBe(FakeRequest);
    } finally {
      (globalThis as any).Request = originalRequest;
    }
  });
});
