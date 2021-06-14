import {render, VisuallyHidden} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    <VisuallyHidden>
      Visually hidden content although available to assistive technology
    </VisuallyHidden>
  );
}
