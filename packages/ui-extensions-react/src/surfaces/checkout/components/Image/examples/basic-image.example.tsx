import {
  reactExtension,
  Image,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Image source="https://shopify.dev/assets/api/checkout-extensions/checkout/components/image-example-code.png" />
  );
}
