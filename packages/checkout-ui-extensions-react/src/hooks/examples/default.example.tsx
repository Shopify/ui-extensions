import React from 'react';
import {
  render,
  Banner,
  useApplyCartLinesChange,
} from '@shopify/checkout-ui-extensions-react';

// 1. Choose a checkout extension point
render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  // 2. Perform your extension's logic
  const applyCartLinesChange = useApplyCartLinesChange();
  applyCartLinesChange({
    type: 'addCartLine',
    merchandiseId: 'gid://shopify/ProductVariant/123',
    quantity: 1,
  });

  // 3. Use components to render your extension's UI
  return <Banner>Product added to cart</Banner>;
}
