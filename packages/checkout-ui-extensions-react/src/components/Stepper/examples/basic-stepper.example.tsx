import {render, Stepper} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <Stepper label="Quantity" value={1} />;
}
