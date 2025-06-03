import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';
import type {Storage} from '@shopify/ui-extensions/point-of-sale';

interface ExampleStorage {
  attempts: number;
  darkMode: boolean;
  trackingId: string;
}

export default extension('pos.home.tile.render', (root, api) => {
  const storage: Storage<ExampleStorage> = api.storage;

  const tile = root.createComponent(Tile, {
    title: 'Storage app',
    subtitle: 'Entries example',
    enabled: true,
    onPress: async () => {
      await storage.set('attempts', 2);
      await storage.set('darkMode', true);
      await storage.set('trackingId', 'd6ead53c-b5f5-0b16-dabb-17081ff238c3');

      const allEntries = await storage.entries();
      const message = allEntries.length
        ? allEntries.map(([key, value]) => `${key}: ${value}`).join(', ')
        : 'Nothing stored';

      api.toast.show(message);
    },
  });

  root.append(tile);
});
