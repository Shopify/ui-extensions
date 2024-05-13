import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    subtitle: 'Call cart function',
    enabled: true,
    onPress: () => {
      api.cart.addCartCodeDiscount('SUMMER_2024');
    },
  });

  root.append(tile);
});
