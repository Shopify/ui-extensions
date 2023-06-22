import {reactExtension, DateField} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <DateField label="Select a date" />;
}
