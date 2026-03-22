import {
  reactExtension,
  useDiscountAllocations,
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
  const allocations = useDiscountAllocations();
  const i18n = useI18n();

  if (allocations.length === 0) {
    return null;
  }

  const totalSavings = allocations.reduce(
    (sum, alloc) => sum + alloc.discountedAmount.amount,
    0,
  );

  const currency = allocations[0].discountedAmount.currencyCode;

  return (
    <BlockStack>
      <Text emphasis="bold">
        You saved {i18n.formatCurrency(totalSavings, {currency})}
      </Text>
      {allocations.map((alloc, index) => (
        <Text key={index} appearance="subdued">
          {alloc.type === 'code'
            ? `Code "${alloc.code}"`
            : alloc.title}{' '}
          — {i18n.formatCurrency(
            alloc.discountedAmount.amount,
            {currency},
          )}
        </Text>
      ))}
    </BlockStack>
  );
}
