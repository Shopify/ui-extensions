import {render, Link} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <Link to="https://www.shopify.ca/climate/sustainability-fund">
      Sustainability fund
    </Link>
  );
}
