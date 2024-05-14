import {
  Tile,
  ConnectivityState,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    enabled: true,
  });

  api.Connectivity.subscribable.subscribe(
    (newConnectivity: ConnectivityState) => {
      tile.updateProps({
        enabled: newConnectivity.internetConnected === 'Connected',
      });
    },
  );

  root.append(tile);
});
