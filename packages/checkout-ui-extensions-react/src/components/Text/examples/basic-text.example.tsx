import {render, Text} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return <Text
    appearance='success'
    emphasized
    id='some_id'
    size='small'
    strong
  >Text</Text>;
}
