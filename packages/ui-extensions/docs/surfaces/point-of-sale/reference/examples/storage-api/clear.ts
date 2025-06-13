import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  let itemCount = 0;

  const tile = root.createComponent(Tile, {
    title: 'Storage app',
    subtitle: 'Clear example',
    badgeValue: itemCount,
    enabled: true,
    onPress: async () => {
      await api.storage.clear();
      api.toast.show('All data cleared');
      itemCount = 0;
      tile.updateProps({badgeValue: itemCount});
    },
  });

  const initializeData = async () => {
    const count = 10;
    for (let i = 0; i < count; i++) {
      await api.storage.set(`key-${i}`, `value-${i}`);
    }
    itemCount = count;
    tile.updateProps({badgeValue: itemCount});
  };

  initializeData();

  root.append(tile);
});
