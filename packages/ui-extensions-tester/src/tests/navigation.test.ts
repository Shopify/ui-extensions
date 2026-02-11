import {getExtension, createNavigationHistoryEntry} from '../index';

import {createTestSandbox, type TestSandbox} from './helpers';

describe('extension.navigation', () => {
  let sandbox: TestSandbox;

  beforeEach(() => {
    sandbox = createTestSandbox();
  });

  afterEach(() => {
    sandbox.destroy();
  });

  it('is available on the extension harness after setUp', () => {
    sandbox.placeToml({networkAccess: true});
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    expect(extension.navigation).toBeInstanceOf(Object);
    expect((globalThis as any).navigation).toBe(extension.navigation);
  });

  it('restores the previous globalThis.navigation during tearDown', () => {
    const previousNavigation = {navigate: () => {}};
    (globalThis as any).navigation = previousNavigation;
    sandbox.placeToml({networkAccess: true});
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    expect((globalThis as any).navigation).not.toBe(previousNavigation);
    extension.tearDown();
    expect((globalThis as any).navigation).toBe(previousNavigation);
  });

  it('removes globalThis.navigation during tearDown when there was no previous navigation', () => {
    delete (globalThis as any).navigation;
    sandbox.placeToml({networkAccess: true});
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    extension.tearDown();
    expect((globalThis as any).navigation).toBeUndefined();
  });

  it('provides a default navigate() that is a no-op', () => {
    sandbox.placeToml({networkAccess: true});
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    expect(() => extension.navigation.navigate('/some-url')).not.toThrow();
  });

  it('provides a default currentEntry', () => {
    sandbox.placeToml({networkAccess: true});
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    expect(extension.navigation.currentEntry).toBeDefined();
    expect(extension.navigation.currentEntry.url).toBe('');
    expect(extension.navigation.currentEntry.getState()).toBeUndefined();
  });

  it('provides addEventListener and removeEventListener', () => {
    sandbox.placeToml({networkAccess: true});
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    const cb = () => {};
    expect(() =>
      extension.navigation.addEventListener('currententrychange', cb),
    ).not.toThrow();
    expect(() =>
      extension.navigation.removeEventListener('currententrychange', cb),
    ).not.toThrow();
  });

  it('provides updateCurrentEntry', () => {
    sandbox.placeToml({networkAccess: true});
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    expect(() =>
      extension.navigation.updateCurrentEntry({state: {foo: 1}}),
    ).not.toThrow();
  });
});

describe('createNavigationHistoryEntry', () => {
  it('creates an entry with defaults', () => {
    const entry = createNavigationHistoryEntry();
    expect(entry.url).toBe('');
    expect(entry.key).toBe('');
    expect(entry.getState()).toBeUndefined();
  });

  it('creates an entry with a custom URL', () => {
    const entry = createNavigationHistoryEntry({
      url: 'https://example.com/page',
    });
    expect(entry.url).toBe('https://example.com/page');
  });

  it('creates an entry with a custom key', () => {
    const entry = createNavigationHistoryEntry({key: 'my-key'});
    expect(entry.key).toBe('my-key');
  });

  it('creates an entry with developer-defined state', () => {
    const state = {items: ['hat', 'scarf']};
    const entry = createNavigationHistoryEntry({state});
    expect(entry.getState()).toStrictEqual(state);
  });

  it('returns a clone from getState(), not the original reference', () => {
    const state = {count: 1};
    const entry = createNavigationHistoryEntry({state});
    const returned = entry.getState();
    expect(returned).toStrictEqual(state);
    expect(returned).not.toBe(state);
  });
});
