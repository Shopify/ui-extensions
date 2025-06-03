import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';
import type {Storage} from '@shopify/ui-extensions/point-of-sale';

interface ExampleStorage {
  trackingId: string;
  someObject: Record<string, unknown>;
  attempts: number;
}

export default extension('pos.home.tile.render', (root, api) => {
  const storage: Storage<ExampleStorage> = api.storage;

  const tile = root.createComponent(Tile, {
    title: 'Storage app',
    subtitle: 'Set example',
    enabled: true,
    onPress: async () => {
      await Promise.all([
        storage.set('trackingId', 'd6ead53c-b5f5-0b16-dabb-17081ff238c3'),
        storage.set('someObject', {
          boolean: true,
          numeric: 2,
          string: 'Hello world!',
        }),
        storage.set('attempts', 2),
      ]);
    },
  });

  root.append(tile);
});
