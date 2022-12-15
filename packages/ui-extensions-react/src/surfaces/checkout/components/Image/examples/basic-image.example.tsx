import {render, Image} from '@shopify/ui-extensions-react/checkout';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <Image source="https://shopify.dev/assets/api/checkout-extensions/checkout/components/image-example-code.png" />
  );
}
