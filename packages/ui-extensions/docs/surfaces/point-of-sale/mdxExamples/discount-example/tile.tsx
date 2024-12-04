import React, {useState} from 'react';

import {
  Tile,
  useApi,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridTile = () => {
  const api = useApi<'pos.home.tile.render'>();

  const shouldEnable = (subtotal: string): boolean => {
    return Number(subtotal) > 100;
  };

  // [START tile.enable]
  const [enabled, setEnabled] = useState(
    shouldEnable(api.cart.subscribable.initial.subtotal),
  );
  // [END tile.enable]

  // [START tile.subscribe]
  api.cart.subscribable.subscribe((cart) => {
    setEnabled(shouldEnable(cart.subtotal));
  });
  // [END tile.subscribe]

  return (
    <Tile
      title="Discount Example App"
      subtitle="React"
      onPress={api.action.presentModal}
      enabled={enabled}
    />
  );
};

export default reactExtension('pos.home.tile.render', () => {
  return <SmartGridTile />;
});
