import {createMockPosTargetApi} from '../point-of-sale/factories';

// The POS host exposes `shopify.cashDrawer` on the home targets as well as the
// register-details targets. The mocks mirror the published target types.
describe('POS Cash Drawer API', () => {
  it.each([
    'pos.home.tile.render',
    'pos.home.modal.render',
    'pos.register-details.action.menu-item.render',
    'pos.register-details.action.render',
    'pos.register-details.block.render',
  ] as const)('%s exposes cashDrawer.open', async (target) => {
    const api = createMockPosTargetApi(target);

    expect(typeof api.cashDrawer.open).toBe('function');
    expect(await api.cashDrawer.open()).toBeUndefined();
  });

  it.each(['pos.home.tile.render', 'pos.home.modal.render'] as const)(
    '%s keeps the Cart API',
    (target) => {
      const api = createMockPosTargetApi(target);

      expect(api.cart).toBeDefined();
    },
  );
});
