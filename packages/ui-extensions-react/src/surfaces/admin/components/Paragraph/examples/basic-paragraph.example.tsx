import {
  render,
  Paragraph,
  Stack,
  Text,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

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
