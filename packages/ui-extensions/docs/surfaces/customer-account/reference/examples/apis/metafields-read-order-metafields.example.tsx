import {
  reactExtension,
  useMetafield,
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
  const loyaltyPoints = useMetafield({
    namespace: 'loyalty',
    key: 'points_earned',
  });

  if (!loyaltyPoints) {
    return null;
  }

  return (
    <Banner status="success">
      <Text>
        You earned {loyaltyPoints.value} loyalty points on
        this order!
      </Text>
    </Banner>
  );
}
