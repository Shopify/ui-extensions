import {
  render,
  Banner,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <Extension />
));

function Extension() {
  return <Banner>Your extension</Banner>;
}
