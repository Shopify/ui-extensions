import {createMockPosTargetApi} from '../point-of-sale/factories';

// Regression guard: action render targets are the modal destination that
// `shopify.action.presentModal()` opens, so they must not expose the Action
// API. The mock for the one-time exception should mirror the published type.
describe('pos.cart.line-item-details.action.render', () => {
  it('does not expose the Action API (modal destination target)', () => {
    const api = createMockPosTargetApi(
      'pos.cart.line-item-details.action.render',
    );

    expect(api.action).toBeUndefined();
    expect(api).not.toHaveProperty('action');
  });

  it('exposes the actionable surface (cart + cartLineItem + standard APIs)', () => {
    const api = createMockPosTargetApi(
      'pos.cart.line-item-details.action.render',
    );

    expect(api.cart).toBeDefined();
    expect(api.cartLineItem).toBeDefined();
    expect(api.extensionPoint).toBe('pos.cart.line-item-details.action.render');
  });
});

describe('pos.cart.line-item-details.action.menu-item.render', () => {
  it('still exposes the Action API (menu items launch the modal)', () => {
    const api = createMockPosTargetApi(
      'pos.cart.line-item-details.action.menu-item.render',
    );

    expect(api.action).toBeDefined();
    expect(typeof api.action.presentModal).toBe('function');
  });
});
