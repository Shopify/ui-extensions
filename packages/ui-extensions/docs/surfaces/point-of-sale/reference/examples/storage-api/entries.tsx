import React from 'react';
import type {Storage} from '@shopify/ui-extensions/point-of-sale';
import {
  Tile,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

interface ExampleStorage {
  attempts: number;
  darkMode: boolean;
  trackingId: string;
}

const TileComponent = () => {
  const api = useApi<'pos.home.tile.render'>();
  const storage: Storage<ExampleStorage> = api.storage;
  return (
    <Tile
      title="Storage app"
      subtitle="Entries example"
      onPress={async () => {
        await storage.set('attempts', 2);
        await storage.set('darkMode', true);
        await storage.set('trackingId', 'd6ead53c-b5f5-0b16-dabb-17081ff238c3');

        const allEntries = await storage.entries();
        const message = allEntries.length
          ? allEntries.map(([key, value]) => `${key}: ${value}`).join(', ')
          : 'Nothing stored';

        api.toast.show(message);
      }}
      enabled
    />
  );
};

export default reactExtension('pos.home.tile.render', () => <TileComponent />);
