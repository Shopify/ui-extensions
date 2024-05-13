import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    subtitle: 'Call cart action',
    enabled: true,
    onPress: () => {
      api.cart.addCartProperties({Engraving: 'John Doe'});
    },
  });

  root.append(tile);
});
