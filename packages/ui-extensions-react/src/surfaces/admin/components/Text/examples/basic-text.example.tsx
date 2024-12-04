import {
  reactExtension,
  Text,
  Stack,
} from '@shopify/ui-extensions-react/admin';

reactExtension('Playground', () => <App />);

function App() {
  return (
    <Stack
      direction="block"
      alignment="center"
      gap
    >
      <Text fontWeight="bold">Name:</Text>
      <Text>Jane Doe</Text>
    </Stack>
  );
}
