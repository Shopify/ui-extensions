import React from 'react';

import {
  Tile,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const TileComponent = () => {
  const api = useApi<'pos.home.tile.render'>();
  return (
    <Tile
      title="My app"
      subtitle="SmartGrid react Extension"
      onPress={() => {
        api.action.presentModal();
      }}
      enabled
    />
  );
};

export default reactExtension('pos.home.tile.render', () => {
  return <TileComponent />;
});
