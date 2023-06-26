import React from 'react';
import {
  render,
  Banner,
  useSelectedPaymentOptions,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <Extension />
));

function Extension() {
  const options = useSelectedPaymentOptions();

  if (
    options.some(
      (option) => option.type === 'creditCard',
    )
  ) {
    return (
      <Banner>
        All credit card transactions are secure
      </Banner>
    );
  }

  return null;
}
