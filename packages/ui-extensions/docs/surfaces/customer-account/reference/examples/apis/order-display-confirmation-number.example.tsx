import {
  reactExtension,
  useOrder,
} from '@shopify/ui-extensions-react/customer-account';
import {Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const order = useOrder();

  if (!order?.confirmationNumber) {
    return null;
  }

  return (
    <Text>
      Confirmation number: {order.confirmationNumber}
    </Text>
  );
}
