import {Cart, Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    subtitle: `${api.cart.subscribable.initial.lineItems.length} line items in cart`,
    enabled: true,
  });

  api.cart.subscribable.subscribe((newCart: Cart) => {
    tile.updateProps({
      subtitle: `${newCart.lineItems.length > 0} line items in cart`,
    });
  });

  root.append(tile);
});
