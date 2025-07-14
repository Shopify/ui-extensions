import {
  reactExtension,
  InlineStack,
  TextField,
  Button,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <InlineStack>
      <TextField label="Gift message" />
      <Button>Save</Button>
    </InlineStack>
  );
}
