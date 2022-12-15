import {render, PhoneField} from '@shopify/ui-extensions-react/checkout';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <PhoneField label="Phone" value="1 (555) 555-5555" />;
}
