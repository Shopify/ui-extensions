import {extend, Tile, TileProps} from '@shopify/retail-ui-extensions';

extend('pos.home.tile.render', (root, api) => {
  const tileProps: TileProps = {
    title: 'My app',
    subtitle: 'A test app',
    enabled: true,
    onPress: async () => {
      try {
        await api.cart.applyCartDiscount(
          'FixedAmount',
          'Black Friday Discount',
          '10.00'
        );
      } catch {
        // Couldn't apply the discount.
      }
    }
  }

  const tile = root.createComponent(Tile, tileProps);

  root.appendChild(tile);
  root.mount();
});