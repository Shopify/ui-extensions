import {extend, Banner} from '@shopify/checkout-ui-extensions';

// 1. Choose a checkout extension point
extend('Checkout::Dynamic::Render', (root, {applyCartLinesChange}) => {
  // 2. Perform your extension's logic
  applyCartLinesChange({
    type: 'addCartLine',
    merchandiseId: 'gid://shopify/ProductVariant/123',
    quantity: 1,
  });

  // 3. Use components to render your extension's UI
  root.appendChild(
    root.createComponent(Banner, {title: 'Product added to cart'}),
  );
});
