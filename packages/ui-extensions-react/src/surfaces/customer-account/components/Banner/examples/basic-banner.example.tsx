import {
  reactExtension,
  Banner,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
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
