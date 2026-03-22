import {
  reactExtension,
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
  const i18n = useI18n();

  const formattedPrice = i18n.formatCurrency(42.5, {
    currency: 'USD',
  });
  const formattedDate = i18n.formatDate(new Date());
  const formattedNumber = i18n.formatNumber(1234.56);

  return (
    <BlockStack>
      <Text>Price: {formattedPrice}</Text>
      <Text>Date: {formattedDate}</Text>
      <Text>Number: {formattedNumber}</Text>
    </BlockStack>
  );
}
