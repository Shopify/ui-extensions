import {render, Link} from '@shopify/post-purchase-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return <Link to="https://shopify.com">Shopify</Link>;
}
