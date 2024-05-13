
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
      onPress={() => api.cart.addLineItemProperties('aa-1234567', {Engraving: 'John Doe'})}
    />
  );
};

export default reactExtension(
  'pos.home.tile.render',
  () => <SmartGridTile />
);