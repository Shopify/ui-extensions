import {
  reactExtension,
  useCartLines,
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
  const lines = useCartLines();

  const totalItems = lines.reduce(
    (sum, line) => sum + line.quantity,
    0,
  );

  return (
    <Banner status="info">
      <Text>
        This order contains {totalItems} item
        {totalItems !== 1 ? 's' : ''} across{' '}
        {lines.length} line item
        {lines.length !== 1 ? 's' : ''}.
      </Text>
    </Banner>
  );
}
