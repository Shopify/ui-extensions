import {
  reactExtension,
  QRCode,
  View,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <View maxInlineSize={300}>
      <QRCode
        content="https://shopify.com"
        size="fill"
      />
    </View>
  );
}
