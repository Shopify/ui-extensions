import React from 'react';
import {
  render,
  Banner,
  useAvailablePaymentOptions,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <App />
));

function App() {
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
