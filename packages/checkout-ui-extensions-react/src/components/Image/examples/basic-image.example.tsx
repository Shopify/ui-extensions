import {render, Image} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return (
    <Image source="https://cdn.shopify.com/YOUR_IMAGE_HERE" />
  );
}
