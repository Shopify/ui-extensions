import {
  reactExtension,
  useApi,
  useI18n,
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
  const i18n = useI18n();

  const total = cost.totalAmount.current;
  const subtotal = cost.subtotalAmount.current;

  const formattedTotal = i18n.formatCurrency(total.amount, {
    currency: total.currencyCode,
  });
  const formattedSubtotal = i18n.formatCurrency(
    subtotal.amount,
    {currency: subtotal.currencyCode},
  );

  return (
    <BlockStack>
      <Text>Subtotal: {formattedSubtotal}</Text>
      <Text emphasis="bold">Total: {formattedTotal}</Text>
    </BlockStack>
  );
}
