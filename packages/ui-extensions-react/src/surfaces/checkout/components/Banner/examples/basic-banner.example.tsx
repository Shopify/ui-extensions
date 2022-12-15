import {render, Banner} from '@shopify/ui-extensions-react/checkout';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <Banner
      status="critical"
      title="Your payment details couldn’t be verified. Check your card details and try again."
    />
  );
}
