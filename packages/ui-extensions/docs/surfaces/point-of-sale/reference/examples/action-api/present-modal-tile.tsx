import React from 'react';
import {
  reactExtension,
  useApi,
  Tile,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridTile = () => {
  const api = useApi<'pos.home.tile.render'>();

  return (
    <Tile
      title='My App'
      onPress={() => api.action.presentModal()}
      enabled
    />
  );
};

export default reactExtension(
  'pos.home.tile.render',
  () => <SmartGridTile />
);