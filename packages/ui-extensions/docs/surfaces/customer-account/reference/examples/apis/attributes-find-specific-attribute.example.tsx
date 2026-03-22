import {
  reactExtension,
  useAttributeValues,
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
  const [giftMessage] = useAttributeValues(['Gift Message']);

  if (!giftMessage) {
    return null;
  }

  return (
    <Banner status="info" title="Gift message">
      <Text>{giftMessage}</Text>
    </Banner>
  );
}
