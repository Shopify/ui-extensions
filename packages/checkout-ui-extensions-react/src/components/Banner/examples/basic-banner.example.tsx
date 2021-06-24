import {render, Banner} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return <Banner status="critical" title="This is an error message" />;
}
