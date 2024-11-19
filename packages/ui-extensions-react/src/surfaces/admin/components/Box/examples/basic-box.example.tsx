import {
  reactExtension,
  Box,
} from '@shopify/ui-extensions-react/admin';

reactExtension('Playground', () => <App />);

function App() {
  return <Box padding="base">Box</Box>;
}
