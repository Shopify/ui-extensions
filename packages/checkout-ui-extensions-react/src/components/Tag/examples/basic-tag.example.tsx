import {render, Tag} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <Tag icon="discount">SPRING</Tag>;
}
