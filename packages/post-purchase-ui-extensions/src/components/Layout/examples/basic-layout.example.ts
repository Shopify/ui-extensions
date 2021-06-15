import {extend, Layout, View} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', (root) => {
  const layout = root.createComponent(
    Layout,
    {
      spacing: 'base',
      sizes: [1, 0.2, 0.8, 1],
    },
    [
      root.createComponent(View, {border: 'base', padding: 'base'}, 'Header'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'Sidebar'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'Content'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'Footer'),
    ],
  );

  root.appendChild(layout);
});
