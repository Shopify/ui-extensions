import {render, DatePicker} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return <DatePicker selected="2021-06-01" />;
}
