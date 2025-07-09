import {Cart, Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    enabled: api.cart.subscribable.initial.editable ?? true,
  });

  api.cart.subscribable.subscribe((newCart: Cart) => {
    tile.updateProps({
      enabled: newCart.editable ?? true
    });
  });

  root.append(tile);
});
