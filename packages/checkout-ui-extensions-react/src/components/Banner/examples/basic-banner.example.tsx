import {render, Banner} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <Banner
      status="critical"
      title="Your payment details couldn’t be verified. Check your card details and try again."
    />
  );
}
