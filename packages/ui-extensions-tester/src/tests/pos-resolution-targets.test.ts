import {createMockPosTargetApi} from '../point-of-sale/factories';

// The payment target's cart is read-only: the cart is frozen during payment.
describe('pos.cart.validations.resolution.render', () => {
  it('exposes the intercepted cartvalidations event via resolution', () => {
    const api = createMockPosTargetApi(
      'pos.cart.validations.resolution.render',
    );

    expect(api.resolution.event.value.type).toBe('cartvalidations');
    expect(api.resolution.event.value.cart).toBeDefined();
  });

  it('exposes a mutating cart and the scanner', () => {
    const api = createMockPosTargetApi(
      'pos.cart.validations.resolution.render',
    );

    expect(api.cart.current).toBeDefined();
    expect(typeof api.cart.addLineItem).toBe('function');
    expect(api.scanner).toBeDefined();
  });

  it('does not expose the Action API', () => {
    const api = createMockPosTargetApi(
      'pos.cart.validations.resolution.render',
    );

    expect(api).not.toHaveProperty('action');
  });
});

describe('pos.payment.validations.resolution.render', () => {
  it('exposes the intercepted paymentvalidations event via resolution', () => {
    const api = createMockPosTargetApi(
      'pos.payment.validations.resolution.render',
    );

    expect(api.resolution.event.value.type).toBe('paymentvalidations');
    expect(api.resolution.event.value.paymentMethod.type).toBe('cash');
    expect(api.resolution.event.value.amount.currencyCode).toBeDefined();
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
});
