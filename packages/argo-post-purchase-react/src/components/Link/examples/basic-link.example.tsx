import {render, Link} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return <Link to="https://shopify.com">Shopify</Link>;
}
