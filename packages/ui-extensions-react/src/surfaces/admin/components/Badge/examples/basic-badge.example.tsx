import {
  reactExtension,
  Badge,
} from '@shopify/ui-extensions-react/admin';

reactExtension('Playground', () => <App />);

function App() {
  return <Badge tone="info">Fulfilled</Badge>;
}
