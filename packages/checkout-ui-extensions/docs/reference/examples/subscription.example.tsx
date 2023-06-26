import React from 'react';
import {
  render,
  Banner,
  useApi,
  useSubscription,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <Extension />
));

function Extension() {
  const {cost} = useApi();

  // Equivalent to the useTotalAmount() hook to subscribe and re-render your extension on changes
  const totalAmount = useSubscription(
    cost.totalAmount,
  );

  return <Banner>{totalAmount.amount}</Banner>;
}
