import {render, Heading} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <Heading>Store name</Heading>;
}
