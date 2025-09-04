import {
  reactExtension,
  Stack,
  TextField,
  Button,
} from '@shopify/ui-extensions-react/point-of-sale';

export default reactExtension('pos.home.modal.render', () => <Extension />);

function Extension() {
  return (
    <Stack direction="inline" gap="200">
      <TextField label="Gift message" />
      <Button title="Save" variant="primary" />
    </Stack>
  );
}
