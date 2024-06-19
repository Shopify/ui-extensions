import {reactExtension, Image} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return (
    <Image source="https://cdn.shopify.com/YOUR_IMAGE_HERE" />
  );
}
