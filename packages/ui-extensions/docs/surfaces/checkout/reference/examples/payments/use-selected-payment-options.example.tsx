import React from 'react';
import {
  reactExtension,
  Banner,
  useSelectedPaymentOptions,
} from '@shopify/checkout-ui-extensions-react';

reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

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
