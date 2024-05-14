import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    subtitle: api.locale.subscribable.initial,
    enabled: true,
  });

  api.locale.subscribable.subscribe((newLocale: string) => {
    tile.updateProps({
      subtitle: newLocale,
    });
  });

  root.append(tile);
});
