import {
  reactExtension,
  ProductThumbnail,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <ProductThumbnail
      source="https://shopify.dev/assets/api/checkout-extensions/checkout/components/product-thumbnail-example-code.png"
      badge={2}
    />
  );
}
