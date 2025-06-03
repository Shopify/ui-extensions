import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'Storage app',
    subtitle: 'Get example',
    enabled: true,
    onPress: async () => {
      const storedData = await api.storage.get('key');
      api.toast.show(String(storedData ?? ''));
    },
  });

  root.append(tile);
});
