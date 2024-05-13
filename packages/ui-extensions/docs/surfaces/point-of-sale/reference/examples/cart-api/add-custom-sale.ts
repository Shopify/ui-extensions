import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    subtitle: 'Call cart function',
    enabled: true,
    onPress: () => {
      api.cart.addCustomSale({
        title: 'New product',
        quantity: 1,
        price: '10.00',
        taxable: true,
      });
    },
  });

  root.append(tile);
});
