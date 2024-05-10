import {Tile, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const tile = root.createComponent(Tile, {
    title: 'My App',
    subtitle: 'Call cart function',
    enabled: true,
    onPress: () => {
      api.cart.addAddress({
        address1: '123456 Main Street',
        city: 'Ottawa',
        province: 'Ontario',
        firstName: 'John',
        lastName: 'Doe',
        country: 'Canada',
      });
    },
  });

  root.append(tile);
});
