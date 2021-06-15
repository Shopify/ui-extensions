import {render, Image} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return <Image source="http://placekitten.com/300/300" />;
}
