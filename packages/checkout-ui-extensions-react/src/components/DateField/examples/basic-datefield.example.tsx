import {render, DateField} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <DateField label="Select a date" />;
}
