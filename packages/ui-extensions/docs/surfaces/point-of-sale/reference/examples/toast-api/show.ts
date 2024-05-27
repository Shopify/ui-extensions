import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    onPress: () => api.toast.show('Toast content', 5000),
    enabled: true,
  });

  root.append(tile);
});
