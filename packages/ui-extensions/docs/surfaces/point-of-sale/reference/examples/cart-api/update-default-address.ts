import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    subtitle: 'Call cart function',
    enabled: true,
    onPress: () => {
      api.cart.updateDefaultAddress(123456);
    },
  });

  root.append(tile);
});
