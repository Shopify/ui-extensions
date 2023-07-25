import {
  reactExtension,
  useShippingAddress,
  Banner,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.delivery-address.render-before',
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
