
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
      onPress={() => api.cart.bulkAddLineItemProperties([
        {lineItemUuid: 'aa-1234567', properties: {Engraving: 'John Doe'}},
        {lineItemUuid: 'bb-001234567', properties: {Engraving: 'Jane Doe'}}
      ])}
    />
  );
};

export default reactExtension(
  'pos.home.tile.render',
  () => <SmartGridTile />
);