import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'Action API',
    onPress: () => api.action.presentModal(),
    enabled: true,
  });

  root.append(tile);
});
