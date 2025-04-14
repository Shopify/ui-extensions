import {
  BlockStack,
  reactExtension,
  Text,
  useApi,
} from '@shopify/ui-extensions-react/customer-account';

// 1. Choose an extension target
export default reactExtension(
  'customer-account.footer.render-after',
  () => <Extension />,
);

function Extension() {
  // 2. Use the extension API to gather context from extension
  const {extension} = useApi();

  // 3. Render a UI
  return (
    <BlockStack>
      <Text>target: {extension.target}</Text>
    </BlockStack>
  );
}
