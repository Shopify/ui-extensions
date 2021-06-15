import {render, Banner} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return <Banner status="critical" title="This is an error message" />;
}
