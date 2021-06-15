import {render, Link} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return <Link to="https://shopify.com">Shopify</Link>;
}
