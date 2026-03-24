import {
  reactExtension,
  useCheckoutSettings,
} from '@shopify/ui-extensions-react/customer-account';
import {Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const settings = useCheckoutSettings();
  return (
    <Text appearance="subdued">
      {settings.shippingAddress.isEditable
        ? 'The shipping address was editable at checkout.'
        : 'The shipping address was pre-set by the merchant.'}
    </Text>
  );
}
