import React from 'react';
import {
  Tile,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const TileComponent = () => {
  const api = useApi();
  return (
    <Tile
      title="My app"
      subtitle="Hello world!"
      onPress={() => {
        api.print.print('documents/test-print');
      }}
      enabled
    />
  );
};

export default reactExtension('pos.home.tile.render', () => {
  return <TileComponent />;
});
