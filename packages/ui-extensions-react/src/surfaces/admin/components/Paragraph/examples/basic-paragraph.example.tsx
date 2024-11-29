import {
  reactExtension,
  Paragraph,
  Stack,
  Text,
} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Stack
      direction="block"
      alignment="center"
      gap
    >
      <Paragraph>
        <Text type="strong">Name:</Text>
        <Text>Jane Doe</Text>
      </Paragraph>
    </Stack>
  );
}

export default reactExtension(
  'Playground',
  () => <App />,
);
