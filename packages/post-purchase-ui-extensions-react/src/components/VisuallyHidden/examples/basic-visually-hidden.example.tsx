import {render, VisuallyHidden} from '@shopify/post-purchase-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    <VisuallyHidden>
      Visually hidden content although available to assistive technology
    </VisuallyHidden>
  );
}
