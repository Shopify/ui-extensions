import {
  extension,
  BlockStack,
  Button,
  ClipboardItem,
  QRCode,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root) => {
    const bitcoinAddress =
      '14qViLJfdGaP4EeHnDyJbEGQysnCpwk3gd';
    const qrCodeContent = `bitcoin:${bitcoinAddress}`;

    const qrCode = root.createComponent(QRCode, {
      content: qrCodeContent,
      size: 'fill',
    });

    const clipboardItem = root.createComponent(
      ClipboardItem,
      {
        text: bitcoinAddress,
        id: 'bitcoin-address',
      },
    );

    const button = root.createComponent(
      Button,
      {
        activateTarget: 'bitcoin-address',
      },
      'Copy Bitcoin address',
    );

    const blockStack = root.createComponent(
      BlockStack,
      {
        maxInlineSize: 200,
      },
    );

    blockStack.appendChild(qrCode);
    blockStack.appendChild(button);
    blockStack.appendChild(clipboardItem);

    root.appendChild(blockStack);
  },
);
