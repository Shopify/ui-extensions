import type {
  InterceptedPaymentMethodType,
  PaymentValidationsEventData,
} from '@shopify/ui-extensions/point-of-sale';

import {createMockPosTargetApi} from '../point-of-sale/factories';

// The payment target's cart is read-only: the cart is frozen during payment.
describe('pos.cart.validations.resolution.render', () => {
  it('exposes the intercepted cartvalidations event data via resolution', () => {
    const api = createMockPosTargetApi(
      'pos.cart.validations.resolution.render',
    );

    expect(api.resolution.event.value.cart).toBeDefined();
  });

  it('exposes a mutating cart and the scanner', () => {
    const api = createMockPosTargetApi(
      'pos.cart.validations.resolution.render',
    );

    expect(api.cart.current).toBeDefined();
    expect(typeof api.cart.addLineItem).toBe('function');
    expect(typeof api.cart.updateLineItemQuantity).toBe('function');
    expect(api.scanner).toBeDefined();
  });

  it('does not expose the Action API', () => {
    const api = createMockPosTargetApi(
      'pos.cart.validations.resolution.render',
    );

    expect(api).not.toHaveProperty('action');
  });

  it('exposes onSave, which resolves to an async cleanup function', async () => {
    const api = createMockPosTargetApi(
      'pos.cart.validations.resolution.render',
    );

    expect(typeof api.resolution.onSave).toBe('function');

    const cleanupPromise = api.resolution.onSave(() => {});
    expect(cleanupPromise).toBeInstanceOf(Promise);

    const cleanup = await cleanupPromise;
    expect(typeof cleanup).toBe('function');

    const cleanupResult = cleanup();
    expect(cleanupResult).toBeInstanceOf(Promise);
    await cleanupResult;
  });
});

describe('pos.payment.validations.resolution.render', () => {
  it('exposes the intercepted paymentvalidations event data via resolution', () => {
    const api = createMockPosTargetApi(
      'pos.payment.validations.resolution.render',
    );

    expect(api.resolution.event.value.paymentMethod.type).toBe('cash');
    expect(api.resolution.event.value.amount.currencyCode).toBeDefined();
  });

  it('accepts vaultedCard in the resolution event data', () => {
    const api = createMockPosTargetApi(
      'pos.payment.validations.resolution.render',
    );
    const eventData: PaymentValidationsEventData = api.resolution.event.value;
    const methodType: InterceptedPaymentMethodType =
      api.resolution.event.value.paymentMethod.type;
    const vaultedCardEvent: typeof api.resolution.event.value = {
      paymentMethod: {type: 'vaultedCard'},
      amount: {amount: '42.50', currencyCode: 'CAD'},
    };

    expect(eventData.paymentMethod.type).toBe(methodType);
    expect(vaultedCardEvent.paymentMethod).toStrictEqual({type: 'vaultedCard'});
  });

  it('exposes a read-only cart (no mutation methods) and the scanner', () => {
    const api = createMockPosTargetApi(
      'pos.payment.validations.resolution.render',
    );

    expect(api.cart.current).toBeDefined();
    expect(api.cart).not.toHaveProperty('addLineItem');
    expect(api.scanner).toBeDefined();
  });

  it('does not expose the Action API', () => {
    const api = createMockPosTargetApi(
      'pos.payment.validations.resolution.render',
    );

    expect(api).not.toHaveProperty('action');
  });

  it('exposes onSave, which resolves to an async cleanup function', async () => {
    const api = createMockPosTargetApi(
      'pos.payment.validations.resolution.render',
    );

    expect(typeof api.resolution.onSave).toBe('function');

    const cleanupPromise = api.resolution.onSave(async () => {});
    expect(cleanupPromise).toBeInstanceOf(Promise);

    const cleanup = await cleanupPromise;
    expect(typeof cleanup).toBe('function');

    const cleanupResult = cleanup();
    expect(cleanupResult).toBeInstanceOf(Promise);
    await cleanupResult;
  });
});
