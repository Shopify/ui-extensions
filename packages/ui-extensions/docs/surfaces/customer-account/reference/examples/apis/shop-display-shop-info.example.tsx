import {
  reactExtension,
  useShop,
} from '@shopify/ui-extensions-react/customer-account';
import {
  BlockStack,
  Text,
  Link,
} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const shop = useShop();

  return (
    <BlockStack>
      <Text emphasis="bold">{shop.name}</Text>
      {shop.storefrontUrl && (
        <Link to={shop.storefrontUrl}>
          Visit storefront
        </Link>
      )}
    </BlockStack>
  );
}
