
import React from 'react';
import {
  reactExtension,
  useApi,
  Tile,
  useCartSubscription
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridTile = () => {
  const cart = useCartSubscription();

  return (
    <Tile 
      title="My App" 
      subtitle={`${cart.lineItems.length} line items in cart`} 
      enabled
    />
  );
};

export default reactExtension(
  'pos.home.tile.render',
  () => <SmartGridTile />
);