import {render, DatePicker} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return <DatePicker selected="2021-06-01" />;
}
