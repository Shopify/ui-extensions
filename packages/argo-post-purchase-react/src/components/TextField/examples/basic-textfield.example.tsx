import {render, TextField} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return <TextField label="TextField" />;
}
