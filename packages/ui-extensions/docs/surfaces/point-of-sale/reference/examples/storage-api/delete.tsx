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
      subtitle="Delete example"
      onPress={async () => {
        await api.storage.set('key', 'A temporary value');
        const storedData = await api.storage.get('key');
        api.toast.show(`Current value: ${String(storedData)}`);
        setTimeout(async () => {
          api.storage.delete('key');
          const storedData = (await api.storage.get('key')) ?? '';
          api.toast.show(`Current value after deletion: ${String(storedData)}`);
        }, 2000);
      }}
      enabled
    />
  );
};

export default reactExtension('pos.home.tile.render', () => <TileComponent />);
