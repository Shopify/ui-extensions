import React from 'react';
import {
  Tile,
  useConnectivitySubscription,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridTile = () => {
  const connectivity = useConnectivitySubscription();

  return (
    <Tile
      title='My App'
      enabled={connectivity.internetConnected === 'Connected'}
    />
  );
};

reactExtension('pos.home.tile.render', () => <SmartGridTile />);
