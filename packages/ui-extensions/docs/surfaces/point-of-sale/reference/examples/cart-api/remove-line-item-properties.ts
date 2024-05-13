import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    subtitle: 'Call cart function',
    enabled: true,
    onPress: () => {
      api.cart.removeLineItemProperties('aa-1234567', ['Engraving']);
    },
  });

  root.append(tile);
});
