import {
  reactExtension,
  Banner,
  useOrder,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  '##TARGET##',
  () => <Extension />,
);

function Extension() {
  const order = useOrder();

  if (order) {
    return (
      <Banner>
        Please include your order ID ({order.id})
        in support requests
      </Banner>
    );
  }

  return null;
}
