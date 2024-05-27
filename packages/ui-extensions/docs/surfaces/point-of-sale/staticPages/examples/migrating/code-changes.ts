// Before
import {extend, Tile} from '@shopify/retail-ui-extensions';

extend('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My app',
    subtitle: 'SmartGrid Extension',
    onPress: () => api.smartGrid.presentModal(),
    enabled: true,
  });

  root.append(tile);
  root.mount();
});

// After
import {extension, Tile} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My app',
    subtitle: 'SmartGrid Extension',
    onPress: () => api.action.presentModal(),
    enabled: true,
  });

  root.append(tile);
});
