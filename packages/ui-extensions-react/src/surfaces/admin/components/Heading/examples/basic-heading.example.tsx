import {
  reactExtension,
  Heading,
} from '@shopify/ui-extensions-react/admin';

reactExtension('Playground', () => <App />);

function App() {
  return <Heading>Store name</Heading>;
}
