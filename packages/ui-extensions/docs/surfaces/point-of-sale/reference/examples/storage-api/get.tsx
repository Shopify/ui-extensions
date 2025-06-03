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
      title="Storage app"
      subtitle="Get example"
      onPress={async () => {
        const storedData = await api.storage.get('key');
        api.toast.show(String(storedData ?? ''));
      }}
      enabled
    />
  );
};

export default reactExtension('pos.home.tile.render', () => <TileComponent />);
