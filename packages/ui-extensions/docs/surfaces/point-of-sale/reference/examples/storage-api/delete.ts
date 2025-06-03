import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'Storage app',
    subtitle: 'Delete example',
    enabled: true,
    onPress: async () => {
      await api.storage.set('key', 'A temporary value');
      const storedData = await api.storage.get('key');
      api.toast.show(`Current value: ${String(storedData)}`);
      setTimeout(async () => {
        api.storage.delete('key');
        const storedData = (await api.storage.get('key')) ?? '';
        api.toast.show(`Current value after deletion: ${String(storedData)}`);
      }, 2000);
    },
  });

  root.append(tile);
});
