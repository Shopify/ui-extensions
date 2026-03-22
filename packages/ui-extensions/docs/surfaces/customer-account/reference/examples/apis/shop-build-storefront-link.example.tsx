import {
  reactExtension,
  useShop,
} from '@shopify/ui-extensions-react/customer-account';
import {
  Link,
  Text,
  BlockStack,
} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const shop = useShop();

  if (!shop.storefrontUrl) {
    return null;
  }

  return (
    <BlockStack>
      <Text>Continue shopping at {shop.name}:</Text>
      <Link to={`${shop.storefrontUrl}/collections`}>
        Browse collections
      </Link>
    </BlockStack>
  );
}
