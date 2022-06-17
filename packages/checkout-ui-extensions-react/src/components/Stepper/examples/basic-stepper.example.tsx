import {render, Stepper} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <Stepper label="Quantity" value={1} />;
}
