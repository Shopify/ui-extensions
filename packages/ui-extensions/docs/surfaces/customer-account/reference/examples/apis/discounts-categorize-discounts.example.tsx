import {
  reactExtension,
  useDiscountAllocations,
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

  const codeDiscounts = allocations.filter(
    (a) => a.type === 'code',
  );
  const automaticDiscounts = allocations.filter(
    (a) => a.type === 'automatic',
  );

  if (allocations.length === 0) {
    return null;
  }

  return (
    <BlockStack>
      {codeDiscounts.length > 0 && (
        <>
          <Text emphasis="bold">Code discounts</Text>
          {codeDiscounts.map((d, i) => (
            <Text key={i}>
              {d.code}: -{d.discountedAmount.amount}{' '}
              {d.discountedAmount.currencyCode}
            </Text>
          ))}
        </>
      )}
      {automaticDiscounts.length > 0 && (
        <>
          <Text emphasis="bold">Automatic discounts</Text>
          {automaticDiscounts.map((d, i) => (
            <Text key={i}>
              {d.title}: -{d.discountedAmount.amount}{' '}
              {d.discountedAmount.currencyCode}
            </Text>
          ))}
        </>
      )}
    </BlockStack>
  );
}
