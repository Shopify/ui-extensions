import {
  reactExtension,
  useCheckoutSettings,
} from '@shopify/ui-extensions-react/customer-account';
import {BlockStack, Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const settings = useCheckoutSettings();
  const terms = settings.paymentTermsTemplate;
  if (!terms) return null;
  return (
    <BlockStack>
      <Text emphasis="bold">Payment terms</Text>
      <Text>{terms.name}</Text>
      {terms.dueInDays !== undefined && (
        <Text appearance="subdued">Payment due in {terms.dueInDays} days</Text>
      )}
    </BlockStack>
  );
}
