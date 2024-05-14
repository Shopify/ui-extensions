import {
  Tile,
  Screen,
  Navigator,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    subtitle: api.device.name,
    enabled: true,
  });

  root.append(tile);
});
