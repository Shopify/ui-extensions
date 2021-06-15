import {render, Radio} from '@shopify/post-purchase-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    <Radio id="radio" name="radio">
      I want this choice
    </Radio>
  );
}
