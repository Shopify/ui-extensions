import {render, Tag} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <Tag icon="discount">SPRING</Tag>;
}
