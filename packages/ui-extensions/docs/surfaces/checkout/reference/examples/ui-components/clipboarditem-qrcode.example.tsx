import {
  reactExtension,
  BlockStack,
  Button,
  ClipboardItem,
  QRCode,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const bitcoinAddress =
    '14qViLJfdGaP4EeHnDyJbEGQysnCpwk3gd';

  return (
    <BlockStack maxInlineSize={200}>
      <QRCode
        size="fill"
        content={`bitcoin:${bitcoinAddress}`}
      />
      <Button activateTarget="bitcoin-address">
        Copy Bitcoin address
      </Button>
      <ClipboardItem
        text={bitcoinAddress}
        id="bitcoin-address"
      />
    </BlockStack>
  );
}
