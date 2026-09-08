import type {
  CashTrackingSessionStartEvent,
  ScanEvent,
  ShopifyEventMap,
  TransactionCompleteEvent,
} from '@shopify/ui-extensions/point-of-sale';

import {getExtension} from '../index';
import type {EventMapForTarget} from '../targets';

import {createTestSandbox, type TestSandbox} from './helpers';
import {assertType, type Equals} from './type-assertions';

// `extension.dispatch('scan', ...)` on the background target and
// `shopify.addEventListener('scan', ...)` share the same guaranteed payload:
// decoded `data` plus its normalized `source`.
assertType<Equals<ShopifyEventMap['scan'], ScanEvent>>();
assertType<
  Equals<EventMapForTarget<'pos.app.ready.data'>['scan'], ScanEvent>
>();

function makeTransactionCompleteEvent(): TransactionCompleteEvent {
  return {
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
  };
}

function makeCashTrackingSessionStartEvent(): CashTrackingSessionStartEvent {
  return {
    id: 1,
    openingTime: '2024-01-01T00:00:00Z',
  };
}

function makeScanEvent(): Omit<ScanEvent, 'type'> {
  return {
    data: 'synthetic-test-value',
    source: 'external',
  };
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

  it('delivers dispatched scan events to registered scan listeners', () => {
    const extension = setUpExt();
    const shopify = (globalThis as any).shopify;
    const listener = jest.fn();
    shopify.addEventListener('scan', listener);

    const event = makeScanEvent();
    extension.dispatch('scan', event);

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith({...event, type: 'scan'});
  });

  it('dispatches a registered listener with the provided event payload', () => {
    const extension = setUpExt();
    const shopify = (globalThis as any).shopify;
    const listener = jest.fn();
    shopify.addEventListener('transactioncomplete', listener);

    const event = makeTransactionCompleteEvent();
    extension.dispatch('transactioncomplete', event);

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith({
      ...event,
      type: 'transactioncomplete',
    });
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

    expect(listenerA).toHaveBeenCalledWith({
      ...event,
      type: 'transactioncomplete',
    });
    expect(listenerB).toHaveBeenCalledWith({
      ...event,
      type: 'transactioncomplete',
    });
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
