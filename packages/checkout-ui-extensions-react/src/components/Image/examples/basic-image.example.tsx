import {render, Image} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return <Image source="http://placekitten.com/300/300" />;
}
