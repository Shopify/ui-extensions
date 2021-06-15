import {render, Banner} from '@shopify/post-purchase-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return <Banner status="critical" title="This is an error message" />;
}
