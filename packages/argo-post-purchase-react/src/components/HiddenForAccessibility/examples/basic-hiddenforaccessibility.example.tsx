import {
  render,
  HiddenForAccessibility,
} from '@shopify/argo-post-purchase-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    <HiddenForAccessibility>Purely decorative content</HiddenForAccessibility>
  );
}
