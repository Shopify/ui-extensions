import {getExtension} from '../index';

import {createTestSandbox, type TestSandbox} from './helpers';

describe('shopify.addEventListener / extension.dispatch', () => {
  let sandbox: TestSandbox;

  beforeEach(() => {
    sandbox = createTestSandbox();
    sandbox.placeToml();
  });

  afterEach(() => {
    sandbox.destroy();
  });

  function setUpExt() {
    const extension = getExtension('purchase.checkout.block.render', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    return extension;
  }

  it('exposes addEventListener and removeEventListener on the shopify global', () => {
    setUpExt();
    const shopify = (globalThis as any).shopify;
    expect(typeof shopify.addEventListener).toBe('function');
    expect(typeof shopify.removeEventListener).toBe('function');
  });

  it('dispatches a registered listener with the provided event payload', () => {
    const extension = setUpExt();
    const shopify = (globalThis as any).shopify;
    const listener = jest.fn();
    shopify.addEventListener('transactioncomplete', listener);

    const eventData = {transaction: {id: 1}};
    extension.dispatch('transactioncomplete', eventData);

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(eventData);
  });

  it('fires all listeners registered for the same event', () => {
    const extension = setUpExt();
    const shopify = (globalThis as any).shopify;
    const listenerA = jest.fn();
    const listenerB = jest.fn();
    shopify.addEventListener('transactioncomplete', listenerA);
    shopify.addEventListener('transactioncomplete', listenerB);

    extension.dispatch('transactioncomplete', 42);

    expect(listenerA).toHaveBeenCalledWith(42);
    expect(listenerB).toHaveBeenCalledWith(42);
  });

  it('does not fire other events when dispatching one', () => {
    const extension = setUpExt();
    const shopify = (globalThis as any).shopify;
    const target = jest.fn();
    const other = jest.fn();
    shopify.addEventListener('transactioncomplete', target);
    shopify.addEventListener('cashtrackingsessionstart', other);

    extension.dispatch('transactioncomplete', undefined);

    expect(target).toHaveBeenCalledTimes(1);
    expect(other).not.toHaveBeenCalled();
  });

  it('stops calling a listener after removeEventListener', () => {
    const extension = setUpExt();
    const shopify = (globalThis as any).shopify;
    const listener = jest.fn();
    shopify.addEventListener('transactioncomplete', listener);
    shopify.removeEventListener('transactioncomplete', listener);

    extension.dispatch('transactioncomplete', undefined);

    expect(listener).not.toHaveBeenCalled();
  });

  it('only fires once when the same listener is added twice', () => {
    const extension = setUpExt();
    const shopify = (globalThis as any).shopify;
    const listener = jest.fn();
    shopify.addEventListener('transactioncomplete', listener);
    shopify.addEventListener('transactioncomplete', listener);

    extension.dispatch('transactioncomplete', undefined);

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('isolates listener errors so later listeners still run', () => {
    const extension = setUpExt();
    const shopify = (globalThis as any).shopify;
    const throwing = jest.fn(() => {
      throw new Error('boom');
    });
    const follower = jest.fn();
    shopify.addEventListener('transactioncomplete', throwing);
    shopify.addEventListener('transactioncomplete', follower);

    expect(() =>
      extension.dispatch('transactioncomplete', undefined),
    ).not.toThrow();
    expect(throwing).toHaveBeenCalledTimes(1);
    expect(follower).toHaveBeenCalledTimes(1);
  });

  it('is a no-op when dispatching an event with no registered listeners', () => {
    const extension = setUpExt();
    expect(() =>
      extension.dispatch('cashtrackingsessionstart', {}),
    ).not.toThrow();
  });

  it('clears listeners on tearDown so they do not leak across tests', () => {
    const extension = setUpExt();
    const shopify = (globalThis as any).shopify;
    const leaked = jest.fn();
    shopify.addEventListener('transactioncomplete', leaked);
    extension.tearDown();

    extension.setUp();
    extension.dispatch('transactioncomplete', undefined);

    expect(leaked).not.toHaveBeenCalled();
  });

  it('removeEventListener on a non-registered listener is a no-op', () => {
    setUpExt();
    const shopify = (globalThis as any).shopify;
    expect(() =>
      shopify.removeEventListener('transactioncomplete', () => {}),
    ).not.toThrow();
  });
});
