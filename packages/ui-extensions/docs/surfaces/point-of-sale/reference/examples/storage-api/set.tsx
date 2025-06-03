import React from 'react';
import type {Storage} from '@shopify/ui-extensions/point-of-sale';
import {
  Tile,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

interface ExampleStorage {
  trackingId: string;
  someObject: Record<string, unknown>;
  attempts: number;
}

const TileComponent = () => {
  const api = useApi<'pos.home.tile.render'>();
  const storage: Storage<ExampleStorage> = api.storage;
  return (
    <Tile
      title="Storage app"
      subtitle="Set example"
      onPress={async () => {
        await Promise.all([
          storage.set('trackingId', 'd6ead53c-b5f5-0b16-dabb-17081ff238c3'),
          storage.set('someObject', {
            boolean: true,
            numeric: 2,
            string: 'Hello world!',
          }),
          storage.set('attempts', 2),
        ]);
      }}
      enabled
    />
  );
};

export default reactExtension('pos.home.tile.render', () => <TileComponent />);
