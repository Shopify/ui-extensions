import {render, Image} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return (
    <Image source="https://shopify.dev/assets/api/checkout-extensions/checkout/components/image-example-code.png" />
  );
}
