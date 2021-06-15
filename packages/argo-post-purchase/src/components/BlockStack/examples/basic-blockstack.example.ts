import {extend, BlockStack, View} from '@shopify/argo-post-purchase';

extend('Checkout::PostPurchase::Render', (root) => {
  const blockStack = root.createComponent(BlockStack, undefined, [
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
  ]);

  root.appendChild(blockStack);
});
