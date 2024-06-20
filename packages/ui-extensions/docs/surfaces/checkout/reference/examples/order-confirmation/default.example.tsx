import {
  reactExtension,
  Banner,
  useApi,
  useSubscription,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.thank-you.block.render',
  () => <Extension />,
);

function Extension() {
  const {orderConfirmation} = useApi();
  const {id} = useSubscription(orderConfirmation);

  if (id) {
    return (
      <Banner>
        Please include your order confirmation ID
        ({id}) in support requests
      </Banner>
    );
  }

  return null;
}
