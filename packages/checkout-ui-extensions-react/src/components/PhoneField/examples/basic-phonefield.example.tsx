import {render, PhoneField} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return <PhoneField label="Phone" />;
}
