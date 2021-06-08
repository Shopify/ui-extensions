import {render, TextField} from '@shopify/argo-checkout-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return <TextField label="TextField" />;
}
