import React from 'react';
import {
  reactExtension,
  Banner,
  useAvailablePaymentOptions,
} from '@shopify/checkout-ui-extensions-react';

reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  const options = useAvailablePaymentOptions();

  if (
    options.some(
      (option) => option.type === 'wallet',
    )
  ) {
    return (
      <Banner>
        Select an express payment method for
        faster checkout
      </Banner>
    );
  }

  return null;
}
