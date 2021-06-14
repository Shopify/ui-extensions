import {render, Checkbox} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    <Checkbox id="checkbox" name="checkbox">
      Save this information for next time
    </Checkbox>
  );
}
