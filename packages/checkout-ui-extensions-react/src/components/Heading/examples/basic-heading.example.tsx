import {render, Heading} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <Heading>Store name</Heading>;
}
