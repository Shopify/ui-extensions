import {
  BlockStack,
  reactExtension,
  Text,
  useApi,
} from '@shopify/ui-extensions-react/checkout';

// 1. Choose an extension target
export default reactExtension(
  'purchase.thank-you.footer.render-after',
  () => <Extension />,
);

function Extension() {
  // 2. Use the extension API to gather context from the checkout and shop
  const {cost, shop} = useApi();

  // 3. Render a UI
  return (
    <BlockStack>
      <Text>Shop name: {shop.name}</Text>
      <Text>cost: {cost.totalAmount}</Text>
    </BlockStack>
  );
}
