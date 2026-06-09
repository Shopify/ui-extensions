import type {
  CashTrackingSessionStartEvent,
  TransactionCompleteEvent,
} from '@shopify/ui-extensions/point-of-sale';

import {getExtension} from '../index';

import {createTestSandbox, type TestSandbox} from './helpers';

function makeTransactionCompleteEvent(): TransactionCompleteEvent {
  return Object.assign(new Event('transactioncomplete'), {
    transactionType: 'Sale' as const,
    discounts: [],
    taxTotal: {amount: 0, currency: 'USD'},
    subtotal: {amount: 0, currency: 'USD'},
    grandTotal: {amount: 0, currency: 'USD'},
    paymentMethods: [],
    balanceDue: {amount: 0, currency: 'USD'},
    shippingLines: [],
    taxLines: [],
    executedAt: '2024-01-01T00:00:00Z',
    lineItems: [],
  });
}

function makeCashTrackingSessionStartEvent(): CashTrackingSessionStartEvent {
  return Object.assign(new Event('cashtrackingsessionstart'), {
    id: 1,
    openingTime: '2024-01-01T00:00:00Z',
  });
}

describe('shopify.addEventListener / extension.dispatch', () => {
  let sandbox: TestSandbox;

  beforeEach(() => {
    sandbox = createTestSandbox();
    sandbox.placeToml({target: 'pos.app.ready.data'});
  });

  afterEach(() => {
    sandbox.destroy();
  });

  function setUpExt() {
    const extension = getExtension('pos.app.ready.data', {
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

    const event = makeTransactionCompleteEvent();
    extension.dispatch('transactioncomplete', event);

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(event);
  });

  it('fires all listeners registered for the same event', () => {
    const extension = setUpExt();
    const shopify = (globalThis as any).shopify;
    const listenerA = jest.fn();
    const listenerB = jest.fn();
    shopify.addEventListener('transactioncomplete', listenerA);
    shopify.addEventListener('transactioncomplete', listenerB);

    const event = makeTransactionCompleteEvent();
    extension.dispatch('transactioncomplete', event);

    expect(listenerA).toHaveBeenCalledWith(event);
    expect(listenerB).toHaveBeenCalledWith(event);
  });

  it('does not fire other events when dispatching one', () => {
    const extension = setUpExt();
    const shopify = (globalThis as any).shopify;
    const target = jest.fn();
    const other = jest.fn();
    shopify.addEventListener('transactioncomplete', target);
    shopify.addEventListener('cashtrackingsessionstart', other);

    extension.dispatch('transactioncomplete', makeTransactionCompleteEvent());

    expect(target).toHaveBeenCalledTimes(1);
    expect(other).not.toHaveBeenCalled();
  });

  it('stops calling a listener after removeEventListener', () => {
    const extension = setUpExt();
    const shopify = (globalThis as any).shopify;
    const listener = jest.fn();
    shopify.addEventListener('transactioncomplete', listener);
    shopify.removeEventListener('transactioncomplete', listener);

    extension.dispatch('transactioncomplete', makeTransactionCompleteEvent());

    expect(listener).not.toHaveBeenCalled();
  });

  it('only fires once when the same listener is added twice', () => {
    const extension = setUpExt();
    const shopify = (globalThis as any).shopify;
    const listener = jest.fn();
    shopify.addEventListener('transactioncomplete', listener);
    shopify.addEventListener('transactioncomplete', listener);

    extension.dispatch('transactioncomplete', makeTransactionCompleteEvent());

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
      extension.dispatch('transactioncomplete', makeTransactionCompleteEvent()),
    ).not.toThrow();
    expect(throwing).toHaveBeenCalledTimes(1);
    expect(follower).toHaveBeenCalledTimes(1);
  });

  it('is a no-op when dispatching an event with no registered listeners', () => {
    const extension = setUpExt();
    expect(() =>
      extension.dispatch(
        'cashtrackingsessionstart',
        makeCashTrackingSessionStartEvent(),
      ),
    ).not.toThrow();
  });

  it('clears listeners on tearDown so they do not leak across tests', () => {
    const extension = setUpExt();
    const shopify = (globalThis as any).shopify;
    const leaked = jest.fn();
    shopify.addEventListener('transactioncomplete', leaked);
    extension.tearDown();

    extension.setUp();
    extension.dispatch('transactioncomplete', makeTransactionCompleteEvent());

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
