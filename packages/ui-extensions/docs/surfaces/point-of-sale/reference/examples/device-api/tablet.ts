import {
  Tile,
  Screen,
  Navigator,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    enabled: api.device.isTablet(),
  });

  root.append(tile);
});
