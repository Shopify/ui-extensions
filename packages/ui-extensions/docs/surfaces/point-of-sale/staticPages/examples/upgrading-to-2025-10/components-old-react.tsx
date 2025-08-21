import {
  reactExtension,
  InlineStack,
  TextField,
  Button,
} from '@shopify/ui-extensions-react/point-of-sale';

export default reactExtension('pos.home.modal.render', () => <Extension />);

function Extension() {
  return (
    <InlineStack>
      <TextField label="Gift message" />
      <Button>Save</Button>
    </InlineStack>
  );
}
