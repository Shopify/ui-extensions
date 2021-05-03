import {extend, View, Tiles} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const tiles = root.createComponent(Tiles, undefined, [
    root.createComponent(View, undefined, 'Tile'),
    root.createComponent(View, undefined, 'Tile'),
    root.createComponent(View, undefined, 'Tile'),
  ]);

  root.appendChild(tiles);
});
