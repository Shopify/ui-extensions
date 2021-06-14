import {render, Radio} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    <Radio id="radio" name="radio">
      I want this choice
    </Radio>
  );
}
