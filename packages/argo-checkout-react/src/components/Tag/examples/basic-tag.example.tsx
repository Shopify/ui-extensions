import {render, Tag} from '@shopify/argo-checkout-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return <Tag>BOGO</Tag>;
}
