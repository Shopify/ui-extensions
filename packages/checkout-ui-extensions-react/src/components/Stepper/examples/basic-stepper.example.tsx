import {render, Stepper} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return <Stepper label="Stepper" />;
}
