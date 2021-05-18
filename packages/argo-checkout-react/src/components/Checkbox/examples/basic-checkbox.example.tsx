import {render, Checkbox} from '@shopify/argo-checkout-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return (
    <Checkbox id="checkbox" name="checkbox">
      Save this information for next time
    </Checkbox>
  );
}
