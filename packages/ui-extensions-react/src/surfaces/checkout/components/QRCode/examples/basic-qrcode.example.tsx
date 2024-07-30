import {
  reactExtension,
  QRCode,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return <QRCode content="https://shopify.com" />;
}
