import {
  reactExtension,
  useAttributeValues,
} from '@shopify/ui-extensions-react/customer-account';
import {
  Banner,
} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const [instructions] = useAttributeValues([
    'Delivery Instructions',
  ]);

  if (!instructions) {
    return null;
  }

  return (
    <Banner status="info" title="Delivery instructions">
      {instructions}
    </Banner>
  );
}
