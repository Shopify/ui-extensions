import {
  reactExtension,
  Banner,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Banner
      tone="critical"
      heading="Your payment details couldn’t be verified. Check your card details and try again."
    />
  );
}
