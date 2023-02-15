import {
  render,
  Banner,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <App />
));

function App() {
  return <Banner>Your extension</Banner>;
}
