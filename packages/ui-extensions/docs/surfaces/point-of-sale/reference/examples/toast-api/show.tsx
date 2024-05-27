import React from 'react';
import {
  Tile,
  useApi,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridTile = () => {
  const api = useApi<'pos.home.tile.render'>();

  return (
    <Tile
      title="My App"
      onPress={() => api.toast.show('Toast content', 5000)}
      enabled
    />
  );
};

export default reactExtension('pos.home.tile.render', () => <SmartGridTile />);
