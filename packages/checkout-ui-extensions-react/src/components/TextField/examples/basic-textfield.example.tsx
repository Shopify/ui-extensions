import {render, TextField} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return <TextField label="TextField" />;
}
