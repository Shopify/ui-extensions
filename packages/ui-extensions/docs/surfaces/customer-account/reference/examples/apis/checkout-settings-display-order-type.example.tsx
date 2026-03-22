import {
  reactExtension,
  useCheckoutSettings,
} from '@shopify/ui-extensions-react/customer-account';
import {Banner, Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const settings = useCheckoutSettings();
  if (settings.orderSubmission !== 'DRAFT_ORDER') return null;
  return (
    <Banner status="warning" title="Draft order">
      <Text>This order requires merchant approval before processing.</Text>
    </Banner>
  );
}
