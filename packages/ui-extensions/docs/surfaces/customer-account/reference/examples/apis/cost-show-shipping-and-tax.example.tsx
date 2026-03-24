import {
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/customer-account';
import {
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const {cost} =
    useApi<'customer-account.order-status.block.render'>();

  const shipping = cost.totalShippingAmount.current;
  const tax = cost.totalTaxAmount.current;

  return (
    <BlockStack>
      <Text>
        Shipping:{' '}
        {shipping
          ? `${shipping.amount} ${shipping.currencyCode}`
          : 'Not calculated'}
      </Text>
      <Text>
        Tax:{' '}
        {tax
          ? `${tax.amount} ${tax.currencyCode}`
          : 'Not calculated'}
      </Text>
    </BlockStack>
  );
}
