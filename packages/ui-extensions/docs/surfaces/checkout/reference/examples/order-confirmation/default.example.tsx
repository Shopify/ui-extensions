import {
  reactExtension,
  Banner,
  useApi,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.thank-you.block.render',
  () => <Extension />,
);

function Extension() {
  const {orderConfirmation} = useApi();

  if (orderConfirmation) {
    return (
      <Banner>
        Please include your order confirmation ID
        ({orderConfirmation.id}) in support
        requests
      </Banner>
    );
  }

  return null;
}
