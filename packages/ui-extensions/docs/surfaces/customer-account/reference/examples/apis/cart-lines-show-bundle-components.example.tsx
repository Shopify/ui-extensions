import {
  reactExtension,
  useCartLines,
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
  const lines = useCartLines();
  const bundleLines = lines.filter(
    (line) => line.lineComponents.length > 0,
  );

  if (bundleLines.length === 0) {
    return null;
  }

  return (
    <BlockStack>
      <Text emphasis="bold">Bundle details</Text>
      {bundleLines.map((line) => (
        <BlockStack key={line.id}>
          <Text>{line.merchandise.title}</Text>
          {line.lineComponents.map((component) => (
            <Text key={component.id} appearance="subdued">
              ↳ {component.merchandise.title} ×{' '}
              {component.quantity}
            </Text>
          ))}
        </BlockStack>
      ))}
    </BlockStack>
  );
}
