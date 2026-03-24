import {
  reactExtension,
  useDiscountCodes,
} from '@shopify/ui-extensions-react/customer-account';
import {
  Banner,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const discountCodes = useDiscountCodes();

  if (discountCodes.length === 0) {
    return null;
  }

  return (
    <Banner status="success" title="Discounts applied">
      {discountCodes.map((discount) => (
        <Text key={discount.code}>Code: {discount.code}</Text>
      ))}
    </Banner>
  );
}
