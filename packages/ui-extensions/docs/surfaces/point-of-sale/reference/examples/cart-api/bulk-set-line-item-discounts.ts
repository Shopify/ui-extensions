import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    subtitle: 'Call cart function',
    enabled: true,
    onPress: () => {
      api.cart.bulkSetLineItemDiscounts([
        {
          lineItemUuid: 'aa-1234567',
          lineItemDiscount: {
            title: 'Summer 2024',
            amount: '10',
            type: 'Percentage',
          },
        },
        {
          lineItemUuid: 'bb-1234567',
          lineItemDiscount: {
            title: 'Shorts sale',
            amount: '15',
            type: 'FixedAmount',
          },
        },
      ]);
    },
  });

  root.append(tile);
});
