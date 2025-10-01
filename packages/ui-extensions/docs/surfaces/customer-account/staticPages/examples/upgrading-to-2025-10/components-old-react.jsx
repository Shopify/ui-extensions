import {
  reactExtension,
  InlineStack,
  TextField,
  Button,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
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
