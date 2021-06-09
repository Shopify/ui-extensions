import {render, Link} from '@shopify/argo-post-purchase-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return <Link to="https://shopify.com">Shopify</Link>;
}
