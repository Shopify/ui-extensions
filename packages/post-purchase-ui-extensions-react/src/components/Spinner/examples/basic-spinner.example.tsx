import {render, Spinner} from '@shopify/post-purchase-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return <Spinner />;
}
