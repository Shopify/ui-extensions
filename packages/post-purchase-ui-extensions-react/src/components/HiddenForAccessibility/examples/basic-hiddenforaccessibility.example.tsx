import {
  render,
  HiddenForAccessibility,
} from '@shopify/post-purchase-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  return (
    <HiddenForAccessibility>Purely decorative content</HiddenForAccessibility>
  );
}
