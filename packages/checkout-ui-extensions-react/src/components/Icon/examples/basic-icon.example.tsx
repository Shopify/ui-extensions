import {render, Icon} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return <Icon source="discount" />;
}
