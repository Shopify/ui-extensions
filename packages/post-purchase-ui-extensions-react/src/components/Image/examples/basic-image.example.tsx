import {render, Image} from '@shopify/post-purchase-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return <Image source="http://placekitten.com/300/300" />;
}
