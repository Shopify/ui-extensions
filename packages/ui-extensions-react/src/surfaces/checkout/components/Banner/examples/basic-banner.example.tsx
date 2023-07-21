import {
  reactExtension,
  Banner,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  return (
    <Banner
      status="critical"
      title="Your payment details couldn’t be verified. Check your card details and try again."
    />
  );
}
