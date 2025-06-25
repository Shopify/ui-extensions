export default async () => {
  const bitcoinAddress =
    '14qViLJfdGaP4EeHnDyJbEGQysnCpwk3gd';
  const qrCodeContent = `bitcoin:${bitcoinAddress}`;

  const stack = document.createElement('s-stack');
  stack.setAttribute('max-inline-size', '200');
  stack.setAttribute('direction', 'block');

  const qrCode =
    document.createElement('s-qrcode');
  qrCode.setAttribute('content', qrCodeContent);
  qrCode.setAttribute('size', 'fill');

  const button =
    document.createElement('s-button');
  button.setAttribute(
    'commandFor',
    'bitcoin-address',
  );
  button.textContent = 'Copy Bitcoin address';

  const clipboardItem = document.createElement(
    's-clipboard-item',
  );
  clipboardItem.setAttribute(
    'text',
    bitcoinAddress,
  );
  clipboardItem.setAttribute(
    'id',
    'bitcoin-address',
  );

  stack.appendChild(qrCode);
  stack.appendChild(button);
  stack.appendChild(clipboardItem);

  document.body.appendChild(stack);
}
