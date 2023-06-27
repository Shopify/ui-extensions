import React from 'react';
import {
  render,
  Banner,
  useExtensionApi,
  useSubscription,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <Extension />
));

function Extension() {
  const {cost} = useExtensionApi();

  // Equivalent to the useTotalAmount() hook to subscribe and re-render your extension on changes
  const totalAmount = useSubscription(
    cost.totalAmount,
  );

  return <Banner>{totalAmount.amount}</Banner>;
}
