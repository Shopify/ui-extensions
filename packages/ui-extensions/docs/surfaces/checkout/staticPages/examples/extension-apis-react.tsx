import {
  reactExtension,
  useShippingAddress,
  Banner,
} from '@shopify/checkout-ui-extensions-react';

reactExtension(
  'Checkout::DeliveryAddress::RenderBefore',
  () => <Extension />,
);

function Extension() {
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