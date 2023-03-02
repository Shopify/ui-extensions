import {
  render,
  useShippingAddress,
  Banner,
} from '@shopify/checkout-ui-extensions-react';

render(
  'Checkout::DeliveryAddress::RenderBefore',
  () => <App />,
);

function App() {
  const {countryCode} = useShippingAddress();

  if (countryCode !== 'CA') {
    return (
      <Banner>
        Sorry, we can only ship to Canada at this
        time
      </Banner>
    );
  }
}
