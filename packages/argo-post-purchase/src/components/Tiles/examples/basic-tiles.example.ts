import {extend, View, Tiles} from '@shopify/argo-post-purchase';

extend('Checkout::Feature::Render', (root) => {
  const tiles = root.createComponent(Tiles, undefined, [
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
  ]);

  root.appendChild(tiles);
});
