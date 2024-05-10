import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    subtitle: 'Call cart function',
    enabled: true,
    onPress: () => {
      api.cart.bulkAddLineItemProperties([
        {lineItemUuid: 'aa-1234567', properties: {Engraving: 'John Doe'}},
        {lineItemUuid: 'bb-001234567', properties: {Engraving: 'Jane Doe'}},
      ]);
    },
  });

  root.append(tile);
});
