import {render, TextField} from '@shopify/argo-post-purchase-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return <TextField label="TextField" />;
}
