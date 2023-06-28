import {render, DateField} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <DateField label="Select a date" />;
}
