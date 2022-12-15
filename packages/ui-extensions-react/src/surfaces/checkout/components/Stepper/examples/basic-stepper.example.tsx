import {render, Stepper} from '@shopify/ui-extensions-react/checkout';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <Stepper label="Quantity" value={1} />;
}
