import {extend, BlockSpacer, View} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
  const blockSpacer = root.createComponent(View, undefined, [
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    root.createComponent(BlockSpacer),
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
  ]);

  root.appendChild(blockSpacer);
});
