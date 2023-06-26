import {render, PhoneField} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <PhoneField label="Phone" value="1 (555) 555-5555" />;
}
