import {render, Spinner} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return <Spinner />;
}
