import {
  reactExtension,
  useNote,
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
  const note = useNote();

  if (!note) {
    return null;
  }

  return (
    <BlockStack>
      <Text emphasis="bold">Special instructions</Text>
      <Text>{note}</Text>
    </BlockStack>
  );
}
