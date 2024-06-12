import {extension, Tile} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My app',
    subtitle: 'SmartGrid vanilla-js Extension',
    onPress: () => api.action.presentModal(),
    enabled: true,
  });

  root.append(tile);
});
