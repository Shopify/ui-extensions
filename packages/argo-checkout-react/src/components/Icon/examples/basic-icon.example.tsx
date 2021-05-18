import {render, Icon} from '@shopify/argo-checkout-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return <Icon source="discount" />;
}
