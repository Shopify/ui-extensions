import {
  reactExtension,
  Image,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Image source="https://cdn.shopify.com/YOUR_IMAGE_HERE" />
  );
}
