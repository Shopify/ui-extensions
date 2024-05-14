
import React from 'react';
import {
  reactExtension,
  useApi,
  Tile
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridTile = () => {
  const api = useApi<'pos.home.tile.render'>();

  return (
    <Tile 
      title='My App' 
      subtitle='Call cart function' 
      enabled 
      onPress={() => api.cart.bulkSetLineItemDiscounts([
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
      ])}
    />
  );
};

export default reactExtension(
  'pos.home.tile.render',
  () => <SmartGridTile />
);