import {render, Banner} from '@shopify/argo-checkout-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return <Banner status="critical" title="This is an error message" />;
}
