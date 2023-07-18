import React from 'react';
import {
  reactExtension,
  Banner,
  useSelectedPaymentOptions,
} from '@shopify/ui-extensions-react/checkout';

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
